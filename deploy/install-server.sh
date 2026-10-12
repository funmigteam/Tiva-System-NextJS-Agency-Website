#!/usr/bin/env bash
set -Eeuo pipefail

APP_DIR='/srv/tiva-system'
APP_USER='deploy'
APP_PORT='3001'

if [[ ${EUID} -ne 0 ]]; then
  echo 'Run this script with sudo.' >&2
  exit 1
fi

apt-get update
apt-get install -y nodejs npm

runuser -u "$APP_USER" -- /bin/bash -lc "cd '$APP_DIR' && npm ci && npm run build"

install -d -m 0755 /etc/systemd/system
cat > /etc/systemd/system/tiva-system.service <<'UNIT'
[Unit]
Description=Tiva System Next.js application
After=network.target

[Service]
Type=simple
User=deploy
Group=deploy
WorkingDirectory=/srv/tiva-system
Environment=NODE_ENV=production
Environment=HOSTNAME=127.0.0.1
Environment=PORT=3001
ExecStart=/usr/bin/npm run start -- -H 127.0.0.1 -p 3001
Restart=on-failure
RestartSec=5
TimeoutStopSec=30

[Install]
WantedBy=multi-user.target
UNIT

cat > /etc/nginx/sites-available/tiva-system.conf <<'NGINX'
server {
    listen 80;
    listen 443 ssl;
    server_name tivasystems.ir www.tivasystems.ir;

    ssl_certificate /etc/nginx/origin-tls/origin.crt;
    ssl_certificate_key /etc/nginx/origin-tls/origin.key;

    include /etc/nginx/snippets/funmig-security.conf;

    location / {
        proxy_pass http://127.0.0.1:3001;
        include /etc/nginx/snippets/funmig-proxy.conf;
    }
}
NGINX

ln -sfn /etc/nginx/sites-available/tiva-system.conf /etc/nginx/sites-enabled/tiva-system.conf
nginx -t
systemctl daemon-reload
systemctl enable --now tiva-system.service
systemctl reload nginx

echo 'Deployment complete.'
