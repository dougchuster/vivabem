"use client"

import { cn } from "@/lib/utils"

function Skeleton({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "animate-pulse rounded-xl bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 bg-[length:200%_100%]",
                className
            )}
            {...props}
        />
    )
}

function SkeletonText({
    lines = 3,
    className,
}: {
    lines?: number
    className?: string
}) {
    return (
        <div className={cn("space-y-2", className)}>
            {Array.from({ length: lines }).map((_, i) => (
                <Skeleton
                    key={i}
                    className={cn(
                        "h-4",
                        i === lines - 1 ? "w-3/4" : "w-full"
                    )}
                />
            ))}
        </div>
    )
}

function SkeletonCard({
    className,
}: {
    className?: string
}) {
    return (
        <div className={cn("rounded-2xl border bg-white p-6 shadow-sm", className)}>
            <div className="space-y-4">
                <Skeleton className="h-8 w-1/2" />
                <SkeletonText lines={2} />
                <div className="flex gap-2">
                    <Skeleton className="h-6 w-16 rounded-full" />
                    <Skeleton className="h-6 w-20 rounded-full" />
                </div>
            </div>
        </div>
    )
}

function SkeletonAvatar({
    size = "md",
    className,
}: {
    size?: "sm" | "md" | "lg" | "xl"
    className?: string
}) {
    const sizeClasses = {
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-12 w-12",
        xl: "h-16 w-16",
    }

    return (
        <Skeleton
            className={cn(
                "rounded-full",
                sizeClasses[size],
                className
            )}
        />
    )
}

function SkeletonButton({
    size = "default",
    className,
}: {
    size?: "sm" | "default" | "lg"
    className?: string
}) {
    const sizeClasses = {
        sm: "h-9 w-20",
        default: "h-11 w-24",
        lg: "h-12 w-32",
    }

    return (
        <Skeleton
            className={cn(
                "rounded-xl",
                sizeClasses[size],
                className
            )}
        />
    )
}

function SkeletonImage({
    aspectRatio = "video",
    className,
}: {
    aspectRatio?: "square" | "video" | "wide"
    className?: string
}) {
    const aspectClasses = {
        square: "aspect-square",
        video: "aspect-video",
        wide: "aspect-[21/9]",
    }

    return (
        <Skeleton
            className={cn(
                "w-full rounded-2xl",
                aspectClasses[aspectRatio],
                className
            )}
        />
    )
}

export {
    Skeleton,
    SkeletonText,
    SkeletonCard,
    SkeletonAvatar,
    SkeletonButton,
    SkeletonImage,
}