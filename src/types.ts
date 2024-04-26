import { HTMLProps } from "react";
import { ClassValue } from "clsx";

export interface ClassNameProp<Element extends HTMLElement> extends Omit<HTMLProps<Element>, 'className'> {
  className?: ClassValue;
}

export type ProgressPointVariant = "success" | "danger" | "warning" | "info";
