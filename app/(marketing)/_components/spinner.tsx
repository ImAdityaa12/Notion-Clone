import { Loader } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const SpinnerVaritants = cva("text-muted-foreground animate-spin", {
  variants: {
    size: {
      default: "h-4 w-4",
      sm: "h-2 w-2",
      lg: "h-6 w-6",
      icon: "h-10 w-10",
    },
    defaultVariants: {
      size: "default",
    },
  },
});

interface SpinnerProps extends VariantProps<typeof SpinnerVaritants> {}

export const Spinner = ({ size }: SpinnerProps) => {
  return <Loader className={cn(SpinnerVaritants({ size }))} />;
};
