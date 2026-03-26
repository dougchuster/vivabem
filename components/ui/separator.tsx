"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import { cn } from "@/lib/utils"

const Separator = React.forwardRef<
    React.ElementRef<typeof SeparatorPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
    (
        { className, orientation = "horizontal", decorative = true, ...props },
        ref
    ) => (
        <SeparatorPrimitive.Root
            ref={ref}
            decorative={decorative}
            orientation={orientation}
            className={cn(
                "shrink-0 bg-neutral-200",
                orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
                className
            )}
            {...props}
        />
    )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

// Separator com texto
const SeparatorWithText = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & {
        text?: string
        orientation?: "horizontal" | "vertical"
    }
>(({ className, text, orientation = "horizontal", ...props }, ref) => {
    if (orientation === "vertical") {
        return (
            <div
                ref={ref}
                className={cn("flex flex-col items-center", className)}
                {...props}
            >
                <Separator orientation="vertical" className="flex-1" />
                {text && (
                    <span className="px-2 py-1 text-xs text-neutral-500 font-medium">
                        {text}
                    </span>
                )}
                <Separator orientation="vertical" className="flex-1" />
            </div>
        )
    }

    return (
        <div
            ref={ref}
            className={cn("flex items-center", className)}
            {...props}
        >
            <Separator className="flex-1" />
            {text && (
                <span className="px-4 text-xs text-neutral-500 font-medium">
                    {text}
                </span>
            )}
            <Separator className="flex-1" />
        </div>
    )
})
SeparatorWithText.displayName = "SeparatorWithText"

// Separator decorativo
const DecorativeSeparator = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & {
        variant?: "dots" | "line" | "gradient"
    }
>(({ className, variant = "dots", ...props }, ref) => {
    const variantClasses = {
        dots: "flex items-center justify-center gap-1",
        line: "flex items-center justify-center",
        gradient: "h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent",
    }

    return (
        <div
            ref={ref}
            className={cn(variantClasses[variant], className)}
            {...props}
        >
            {variant === "dots" && (
                <>
                    <div className="w-1 h-1 rounded-full bg-neutral-300" />
                    <div className="w-1 h-1 rounded-full bg-neutral-300" />
                    <div className="w-1 h-1 rounded-full bg-neutral-300" />
                </>
            )}
            {variant === "line" && (
                <div className="w-16 h-[1px] bg-neutral-300" />
            )}
        </div>
    )
})
DecorativeSeparator.displayName = "DecorativeSeparator"

export {
    Separator,
    SeparatorWithText,
    DecorativeSeparator,
}