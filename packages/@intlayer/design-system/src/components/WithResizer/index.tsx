'use client';

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FC,
  type PropsWithChildren,
} from 'react';
import { cn } from '../../utils/cn';

type WithResizerProps = {
  initialWidth: number;
  maxWidth?: number;
  minWidth?: number;
};

export const WithResizer: FC<PropsWithChildren<WithResizerProps>> = ({
  initialWidth,
  maxWidth,
  minWidth = 0,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(initialWidth);
  const [isResizing, setIsResizing] = useState(false);

  // Handler to start resizing
  const startResizing = useCallback(
    (
      mouseDownEvent:
        | React.MouseEvent<HTMLDivElement>
        | React.TouchEvent<HTMLDivElement>
    ) => {
      setIsResizing(true);
      mouseDownEvent.preventDefault();
    },
    []
  );

  // Handler to stop resizing
  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  // Handler to resize the div
  const resize = useCallback(
    (mouseMoveEvent: MouseEvent | TouchEvent) => {
      const container = containerRef.current;
      if (isResizing && container && parent) {
        const { left: containerLeft } = container.getBoundingClientRect();

        let clientX = 0;
        if (mouseMoveEvent instanceof MouseEvent) {
          clientX = mouseMoveEvent.clientX;
        } else if (mouseMoveEvent instanceof TouchEvent) {
          clientX = mouseMoveEvent.touches[0].clientX;
        }

        const newWidth = clientX - containerLeft;
        const correctedWidth = Math.max(newWidth, 0);

        setWidth(correctedWidth);
      }
    },
    [isResizing]
  );

  // Add event listeners for mouse move and mouse up
  useEffect(() => {
    window.addEventListener('mousemove', resize, { passive: true });
    window.addEventListener('mouseup', stopResizing);
    window.addEventListener('touchmove', resize, { passive: true });
    window.addEventListener('touchend', stopResizing);

    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
      window.removeEventListener('touchmove', resize);
      window.removeEventListener('touchend', stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <div
      className={cn(
        minWidth && `max-w-[${maxWidth}px]`,
        maxWidth && `min-w-[${minWidth}px]`,
        'relative h-full w-full max-w-[80%] cursor-ew-resize border-r-[2px] border-neutral-200 transition dark:border-neutral-950',
        'after:absolute after:right-0 after:top-1/2 after:block after:h-10 after:w-2 after:-translate-y-1/2 after:translate-x-1/2 after:transform after:cursor-ew-resize after:rounded-full after:bg-neutral-200 after:transition after:content-[""] dark:after:bg-neutral-950',
        'active:border-neutral-400 active:after:bg-neutral-400 dark:active:border-neutral-600 active:dark:after:bg-neutral-600'
      )}
      style={{
        width: `${width}px`,
      }}
      ref={containerRef}
      onMouseDown={startResizing}
      onTouchStart={startResizing}
      aria-valuemin={minWidth}
      aria-valuemax={maxWidth}
      aria-valuenow={width}
      aria-label="Resizable component"
      role="slider"
      tabIndex={0}
    >
      <div
        className="absolute left-0 top-0 size-full cursor-default overflow-hidden"
        onMouseDown={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
