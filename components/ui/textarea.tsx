"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, error, ...props }, ref) => {
        return (
            <div className="w-full">
                <textarea
                    className={cn(
                        "flex min-h-[80px] w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm ring-offset-white placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
                        error && "border-error focus-visible:ring-error",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {error && (
                    <p className="mt-1.5 text-sm text-error">{error}</p>
                )}
            </div>
        )
    }
)
Textarea.displayName = "Textarea"

// Textarea com contador de caracteres
const TextareaWithCounter = React.forwardRef<
    HTMLTextAreaElement,
    TextareaProps & {
        maxLength?: number
        showCounter?: boolean
    }
>(({ className, error, maxLength, showCounter = true, ...props }, ref) => {
    const [value, setValue] = React.useState<string>("")

    React.useEffect(() => {
        if (props.value) {
            setValue(props.value as string)
        }
    }, [props.value])

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value)
        props.onChange?.(e)
    }

    return (
        <div className="w-full">
            <textarea
                className={cn(
                    "flex min-h-[80px] w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm ring-offset-white placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
                    error && "border-error focus-visible:ring-error",
                    className
                )}
                ref={ref}
                maxLength={maxLength}
                onChange={handleChange}
                {...props}
            />
            <div className="flex justify-between mt-1.5">
                {error && (
                    <p className="text-sm text-error">{error}</p>
                )}
                {showCounter && maxLength && (
                    <p className={cn(
                        "text-xs ml-auto",
                        value.length > maxLength * 0.9 ? "text-error" : "text-neutral-500"
                    )}>
                        {value.length}/{maxLength}
                    </p>
                )}
            </div>
        </div>
    )
})
TextareaWithCounter.displayName = "TextareaWithCounter"

// Textarea redimensionável
const ResizableTextarea = React.forwardRef<
    HTMLTextAreaElement,
    TextareaProps & {
        minRows?: number
        maxRows?: number
    }
>(({ className, error, minRows = 3, maxRows = 10, ...props }, ref) => {
    const textareaRef = React.useRef<HTMLTextAreaElement>(null)

    React.useImperativeHandle(ref, () => textareaRef.current!)

    const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
        const textarea = e.currentTarget
        textarea.style.height = "auto"
        const newHeight = Math.min(
            Math.max(textarea.scrollHeight, minRows * 24),
            maxRows * 24
        )
        textarea.style.height = `${newHeight}px`
    }

    return (
        <div className="w-full">
            <textarea
                className={cn(
                    "flex w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm ring-offset-white placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 resize-none",
                    error && "border-error focus-visible:ring-error",
                    className
                )}
                ref={textareaRef}
                rows={minRows}
                onInput={handleInput}
                {...props}
            />
            {error && (
                <p className="mt-1.5 text-sm text-error">{error}</p>
            )}
        </div>
    )
})
ResizableTextarea.displayName = "ResizableTextarea"

export { Textarea, TextareaWithCounter, ResizableTextarea }
