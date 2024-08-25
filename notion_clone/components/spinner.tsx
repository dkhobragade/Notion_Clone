import { Loader } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const spinnerVarients = cva(
    "text-muted-foreground animate-spin", {
    variants: {
        size: {
            default: "h-4 x-4",
            sm: "h-2 w-2",
            lg: 'h-6 w-6',
            icon: 'h-10 w-10'
        }
    },
    defaultVariants: {
        size: "default",
    }
}
)

interface SpinnnerProps extends VariantProps<typeof spinnerVarients> { }

export const Spinner = ({ size }: SpinnnerProps) => {
    return (
        <Loader className={cn(spinnerVarients({ size }))} />
    )
}

