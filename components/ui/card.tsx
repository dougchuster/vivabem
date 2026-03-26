"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
    "rounded-2xl text-neutral-950 transition-all duration-300",
    {
        variants: {
            variant: {
                default: "border bg-white shadow-sm",
                elevated: "bg-white shadow-lg hover:shadow-xl",
                gradient: "bg-gradient-to-br from-white to-neutral-50 shadow-lg",
                glass: "bg-white/80 backdrop-blur-md border border-white/20 shadow-xl",
                outline: "border-2 border-neutral-200 bg-white",
                filled: "bg-neutral-100",
                premium: "bg-gradient-to-br from-brand-50 to-white border border-brand-100 shadow-lg",
                dark: "bg-neutral-900 text-white border-neutral-800",
            },
            size: {
                default: "p-6",
                sm: "p-4",
                lg: "p-8",
                xl: "p-10",
                compact: "p-3",
            },
            hover: {
                default: "",
                lift: "hover:-translate-y-1 hover:shadow-xl",
                glow: "hover:shadow-2xl hover:shadow-brand-500/10",
                scale: "hover:scale-[1.02]",
                none: "",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
            hover: "default",
        },
    }
)

export interface CardProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
    asChild?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant, size, hover, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(cardVariants({ variant, size, hover, className }))}
            {...props}
        />
    )
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex flex-col space-y-1.5", className)}
        {...props}
    />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn(
            "text-2xl font-semibold leading-none tracking-tight",
            className
        )}
        {...props}
    />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-sm text-neutral-500", className)}
        {...props}
    />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex items-center pt-0", className)}
        {...props}
    />
))
CardFooter.displayName = "CardFooter"

export {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent,
    cardVariants,
}