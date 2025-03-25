
import React from "react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface ProgressStepsProps {
  steps: number;
  currentStep: number;
  className?: string;
}

const ProgressSteps = ({ steps, currentStep, className }: ProgressStepsProps) => {
  const progressPercentage = (currentStep / (steps - 1)) * 100;
  
  return (
    <div className={cn("w-full", className)}>
      <Progress value={progressPercentage} className="h-1.5 bg-blue-100" />
      <div className="flex justify-between mt-1">
        {Array.from({ length: steps }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "h-3 w-3 rounded-full -mt-2.5 transition-all duration-300 transform",
              index < currentStep 
                ? "bg-primary-600 scale-100" 
                : index === currentStep 
                  ? "bg-primary-500 scale-125 ring-2 ring-primary-200" 
                  : "bg-blue-100"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressSteps;
