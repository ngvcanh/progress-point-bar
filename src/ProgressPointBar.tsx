/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, forwardRef, useEffect, useMemo, useState } from "react";
import { ClassNameProp, ProgressPointVariant } from "./types";
import { progressPointBarClasses } from "./utils";
import { ProgressBarBadge } from "./ProgressBarBadge";
import clsx from "clsx";

export interface ProgressPointBarProps extends Omit<ClassNameProp<HTMLDivElement>, 'label'> {
  label?: ReactNode;
  point?: number;
  variant?: ProgressPointVariant;
  pointVariant?: Record<number, ProgressPointVariant>;
}

export const ProgressPointBar = forwardRef<HTMLDivElement, ProgressPointBarProps>(
  function ProgressPointBar(props, ref) {
    const {className, label, point = 0, variant, pointVariant = {}, ...rest} = props;

    const [currentPoint, setCurrentPoint] = useState(point);

    useEffect(() => {
      point === currentPoint || setCurrentPoint(point);
    }, [point]);

    const pointValue = useMemo(() => currentPoint, [currentPoint]);

    return (
      <div {...rest} ref={ref} className={clsx(progressPointBarClasses.root, className)}>
        <div className={clsx(progressPointBarClasses.labelBar)}>
          <div className={clsx(progressPointBarClasses.labelProgress)}>
            <ProgressBarBadge variant="success">
              5%
            </ProgressBarBadge>
            <span className={clsx(progressPointBarClasses.label)}>
              {label}
            </span>
          </div>
          <div className={clsx(progressPointBarClasses.labelGroup)}>
            <ProgressBarBadge variant="success">
              +25%
            </ProgressBarBadge>
            <span className={clsx(progressPointBarClasses.label)}>
              Thêm thông tin cơ bản
            </span>
          </div>
        </div>
        <div className={progressPointBarClasses.container}>
          <div
            className={clsx(progressPointBarClasses.progress, progressPointBarClasses.progressSuccess)}
            style={{ width: "20%" }}
          />
        </div>
      </div>
    );
  }
);
