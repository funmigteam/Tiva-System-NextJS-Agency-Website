"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface HitboxProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  size?: string | number;
  radius?: string | number;
}

export const Hitbox = React.forwardRef<HTMLDivElement, HitboxProps>(
  ({ className, children, size, radius, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("absolute inset-0 cursor-pointer", className)}
        style={{
          ...(size ? { width: size, height: size } : {}),
          ...(radius ? { borderRadius: radius } : {}),
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Hitbox.displayName = "Hitbox";

export default Hitbox;
