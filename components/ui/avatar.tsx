"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Root
        ref={ref}
        className={cn(
            "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
            className
        )}
        {...props}
    />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Image>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Image
        ref={ref}
        className={cn("aspect-square h-full w-full", className)}
        {...props}
    />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Fallback>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Fallback
        ref={ref}
        className={cn(
            "flex h-full w-full items-center justify-center rounded-full bg-neutral-100",
            className
        )}
        {...props}
    />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

// Avatar com gradiente e borda
const AvatarWithBorder = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & {
        variant?: "default" | "gradient" | "ring"
    }
>(({ className, variant = "default", ...props }, ref) => {
    const variantClasses = {
        default: "ring-2 ring-white",
        gradient: "ring-2 ring-gradient-to-r from-brand-400 to-brand-600",
        ring: "ring-2 ring-brand-500 ring-offset-2",
    }

    return (
        <AvatarPrimitive.Root
            ref={ref}
            className={cn(
                "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
                variantClasses[variant],
                className
            )}
            {...props}
        />
    )
})
AvatarWithBorder.displayName = "AvatarWithBorder"

// Avatar grupo
const AvatarGroup = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & {
        max?: number
        size?: "sm" | "default" | "lg"
    }
>(({ className, max = 4, size = "default", children, ...props }, ref) => {
    const sizeClasses = {
        sm: "h-6 w-6 -ml-2",
        default: "h-8 w-8 -ml-3",
        lg: "h-10 w-10 -ml-4",
    }

    return (
        <div
            ref={ref}
            className={cn("flex items-center", className)}
            {...props}
        >
            {React.Children.toArray(children).slice(0, max)}
            {React.Children.count(children) > max && (
                <div
                    className={cn(
                        "flex items-center justify-center rounded-full bg-neutral-100 text-xs font-medium text-neutral-600",
                        sizeClasses[size]
                    )}
                >
                    +{React.Children.count(children) - max}
                </div>
            )}
        </div>
    )
})
AvatarGroup.displayName = "AvatarGroup"

export {
    Avatar,
    AvatarImage,
    AvatarFallback,
    AvatarWithBorder,
    AvatarGroup,
}