
import React from "react";
import { cn } from "@/lib/utils";

interface MotionProps extends React.HTMLAttributes<HTMLDivElement> {
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  transition?: Record<string, any>;
  children?: React.ReactNode;
}

// Create a reusable function for all motion components to avoid repetition
const createMotionComponent = (Element: keyof JSX.IntrinsicElements) => {
  return ({ 
    initial = {}, 
    animate = {}, 
    transition = {}, 
    children, 
    className,
    ...props 
  }: MotionProps) => {
    // This is a simplified mock of framer-motion
    const CustomTag = Element as any;
    return (
      <CustomTag
        className={cn("transition-all duration-500 ease-out", className)}
        style={{
          // Apply some basic CSS transitions based on animate values
          opacity: animate.opacity !== undefined ? animate.opacity : 1,
          transform: `translateY(${animate.y || 0}px) translateX(${animate.x || 0}px) scale(${animate.scale || 1})`,
        }}
        {...props}
      >
        {children}
      </CustomTag>
    );
  };
};

// Export the motion object with all needed components
export const motion = {
  div: createMotionComponent('div'),
  h1: createMotionComponent('h1'),
  p: createMotionComponent('p'),
  span: createMotionComponent('span'),
  a: createMotionComponent('a'),
  button: createMotionComponent('button'),
  section: createMotionComponent('section')
};
