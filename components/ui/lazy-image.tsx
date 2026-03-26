"use client"

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

interface LazyImageProps {
    src: string
    alt: string
    width?: number
    height?: number
    fill?: boolean
    className?: string
    priority?: boolean
    sizes?: string
    placeholder?: 'blur' | 'empty'
    blurDataURL?: string
}

export function LazyImage({
    src,
    alt,
    width,
    height,
    fill = false,
    className = '',
    priority = false,
    sizes,
    placeholder = 'empty',
    blurDataURL,
}: LazyImageProps) {
    const [isLoaded, setIsLoaded] = useState(false)
    const [isInView, setIsInView] = useState(false)
    const imgRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true)
                    observer.disconnect()
                }
            },
            {
                rootMargin: '50px 0px',
                threshold: 0.01,
            }
        )

        if (imgRef.current) {
            observer.observe(imgRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={imgRef}
            className={`relative overflow-hidden ${className}`}
            style={fill ? {} : { width, height }}
        >
            {(isInView || priority) && (
                <Image
                    src={src}
                    alt={alt}
                    width={fill ? undefined : width}
                    height={fill ? undefined : height}
                    fill={fill}
                    className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                    priority={priority}
                    sizes={sizes}
                    placeholder={placeholder}
                    blurDataURL={blurDataURL}
                    onLoad={() => setIsLoaded(true)}
                    loading={priority ? 'eager' : 'lazy'}
                />
            )}
            {!isLoaded && (
                <div
                    className="absolute inset-0 bg-neutral-100 animate-pulse"
                    style={fill ? {} : { width, height }}
                />
            )}
        </div>
    )
}