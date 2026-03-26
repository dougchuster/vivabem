"use client"

import { motion } from 'framer-motion'

interface LoadingProps {
    size?: 'sm' | 'md' | 'lg'
    text?: string
    className?: string
}

export function Loading({ size = 'md', text, className = '' }: LoadingProps) {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12',
    }

    return (
        <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
            <motion.div
                className={`${sizeClasses[size]} border-2 border-primary/20 border-t-primary rounded-full`}
                animate={{ rotate: 360 }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />
            {text && (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-neutral-600"
                >
                    {text}
                </motion.p>
            )}
        </div>
    )
}

export function LoadingSkeleton({ className = '' }: { className?: string }) {
    return (
        <div className={`animate-pulse bg-neutral-200 rounded ${className}`} />
    )
}

export function LoadingCard() {
    return (
        <div className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm">
            <div className="animate-pulse">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-neutral-200 rounded-xl" />
                    <div className="flex-1">
                        <div className="h-4 bg-neutral-200 rounded w-3/4 mb-2" />
                        <div className="h-3 bg-neutral-200 rounded w-1/2" />
                    </div>
                </div>
                <div className="space-y-3">
                    <div className="h-3 bg-neutral-200 rounded" />
                    <div className="h-3 bg-neutral-200 rounded w-5/6" />
                    <div className="h-3 bg-neutral-200 rounded w-4/6" />
                </div>
            </div>
        </div>
    )
}

export function LoadingPage() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <Loading size="lg" text="Carregando..." />
        </div>
    )
}