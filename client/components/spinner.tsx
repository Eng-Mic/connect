import { Loader } from "lucide-react";
import { 
    cva, 
    type VariantProps 
} from "class-variance-authority"; // It provides functionalities for defining component variants with different styles based on props.

import { cn } from "@/lib/utils"; // Used for combining classNames


// Defining set of variant for Spinner component
const spinnerVariants = cva(
    "text-muted-foreground animate-spin", // Default classNames
    {
        variants: { // Defines different styles based on props name. In this case : size
            // props: size
            size: {
                default: "h-4 w-4",
                sm: "h-2 w-2",
                lg: "h-6 w-6",
                icon: "h-10 w-10"
            }
        },
        // Setting size prop defaultVariant value to "default"
        defaultVariants: {
            size: "default"
        }
    }
)

// SpinnerProps inherits any props related to class-variance-authority. In this case: size
interface SpinnerProps extends VariantProps<typeof spinnerVariants> {}

export const Spinner = ({
    size,
}: SpinnerProps) => {
    return (
        // cn(spinnerVariants({ size }): Combining the base class names from spinnerVariants with the class names corresponding to the provided size prop.
        <Loader className={cn(spinnerVariants({ size }))} />
    )
}

