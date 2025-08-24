import React, { useState, useRef, useEffect, type ReactNode } from "react";
import clsx from "clsx";

export interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  delayShow?: number; // ms
  delayHide?: number; // ms
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = "top",
  delayShow = 300,
  delayHide = 200,
  className,
}) => {
  const [visible, setVisible] = useState(false);
  const showTimeout = useRef<number>(0);
  const hideTimeout = useRef<number>(0);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    clearTimeout(hideTimeout.current);
    showTimeout.current = setTimeout(() => setVisible(true), delayShow);
  };

  const handleMouseLeave = () => {
    clearTimeout(showTimeout.current);
    hideTimeout.current = setTimeout(() => setVisible(false), delayHide);
  };

  useEffect(() => {
    return () => {
      clearTimeout(showTimeout.current);
      clearTimeout(hideTimeout.current);
    };
  }, []);

  const arrowPositionClasses: Record<string, string> = {
    top: "bottom-[-4px] left-1/2 -translate-x-1/2 rotate-45",
    bottom: "top-[-4px] left-1/2 -translate-x-1/2 rotate-45",
    left: "right-[-4px] top-1/2 -translate-y-1/2 rotate-45",
    right: "left-[-4px] top-1/2 -translate-y-1/2 rotate-45",
  };

  const tooltipPositionClasses: Record<string, string> = {
    top: "bottom-full mb-2 left-1/2 -translate-x-1/2",
    bottom: "top-full mt-2 left-1/2 -translate-x-1/2",
    left: "right-full mr-2 top-1/2 -translate-y-1/2",
    right: "left-full ml-2 top-1/2 -translate-y-1/2",
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      <div
          ref={tooltipRef}
          className={clsx(
            "absolute z-50 px-3 py-1 text-sm text-white bg-black rounded-md shadow-lg whitespace-nowrap transition-opacity duration-500",
            visible ? "opacity-1" : "opacity-0",
            tooltipPositionClasses[position],
            className
          )}
        >
          {content}
          <div
            className={clsx(
              "w-2 h-2 bg-black absolute",
              arrowPositionClasses[position]
            )}
          />
        </div>

    </div>
  );
};

export default Tooltip;
