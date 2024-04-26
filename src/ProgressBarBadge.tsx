import { PropsWithChildren, forwardRef } from "react";
import { ClassNameProp } from "./types";
import { progressPointBarClasses } from "./utils";
import clsx from "clsx";

export interface ProgressBarBadgeProps extends ClassNameProp<HTMLSpanElement> {
  variant: "success" | "danger" | "warning" | "info";
}

export const ProgressBarBadge = forwardRef<HTMLSpanElement, PropsWithChildren<ProgressBarBadgeProps>>(
  function ProgressBarBadge(props, ref) {
    const {children, className, variant, ...rest} = props;
    const variantKey = "badge" + variant.charAt(0).toUpperCase() + variant.substring(1);

    return (
      <span
        {...rest}
        ref={ref}
        className={clsx(
          progressPointBarClasses.badge,
          progressPointBarClasses[variantKey as keyof typeof progressPointBarClasses],
          className
        )}
      >
        {children}
      </span>
    );
  }
);
