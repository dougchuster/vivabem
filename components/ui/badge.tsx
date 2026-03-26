"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
                secondary:
                    "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                destructive:
                    "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
                outline: "text-foreground",
                success:
                    "border-transparent bg-green-100 text-green-800 hover:bg-green-200",
                warning:
                    "border-transparent bg-amber-100 text-amber-800 hover:bg-amber-200",
                info:
                    "border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200",
                premium:
                    "border-transparent bg-gradient-to-r from-amber-500 to-orange-500 text-white",
                glass:
                    "border-white/20 bg-white/80 backdrop-blur-md text-neutral-900",
                gradient:
                    "border-transparent bg-gradient-to-r from-brand-500 to-brand-600 text-white",
            },
            size: {
                default: "px-2.5 py-0.5 text-xs",
                sm: "px-2 py-0.5 text-[10px]",
                lg: "px-3 py-1 text-sm",
                xl: "px-4 py-1.5 text-base",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
}

function Badge({ className, variant, size, leftIcon, rightIcon, children, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props}>
            {leftIcon && <span className="mr-1 flex-shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="ml-1 flex-shrink-0">{rightIcon}</span>}
        </div>
    )
}

export { Badge, badgeVariants }