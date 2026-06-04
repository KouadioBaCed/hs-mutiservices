import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold uppercase tracking-wider ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-brand-blue text-white shadow-[0_10px_30px_-8px_rgba(27,79,168,0.7)] hover:bg-brand-navy hover:-translate-y-0.5",
        accent:
          "bg-brand-red text-white shadow-[0_10px_30px_-8px_rgba(200,24,26,0.7)] hover:bg-brand-red-vivid hover:-translate-y-0.5",
        outline:
          "border border-slate-300 bg-white text-brand-navy hover:border-brand-blue/50 hover:bg-slate-50 hover:-translate-y-0.5",
        ghost: "text-brand-navy hover:bg-slate-100",
        light:
          "bg-white text-brand-navy shadow-sm hover:bg-brand-offwhite hover:-translate-y-0.5",
        "outline-light":
          "border border-white/40 bg-white/10 text-white backdrop-blur hover:border-white/70 hover:bg-white/20",
      },
      size: {
        default: "h-12 px-7 py-3",
        sm: "h-10 px-5",
        lg: "h-14 px-9 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
