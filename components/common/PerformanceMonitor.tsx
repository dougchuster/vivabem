"use client"

import { useEffect, useState } from 'react'

interface PerformanceMetrics {
    lcp: number | null
    fid: number | null
    cls: number | null
    fcp: number | null
    ttfb: number | null
}

export function PerformanceMonitor() {
    const [metrics, setMetrics] = useState<PerformanceMetrics>({
        lcp: null,
        fid: null,
        cls: null,
        fcp: null,
        ttfb: null,
    })

    useEffect(() => {
        if (typeof window === 'undefined') return

        // Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries()
            const lastEntry = entries[entries.length - 1] as PerformanceEntry
            setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }))
        })

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries()
            const firstEntry = entries[0] as PerformanceEventTiming
            setMetrics(prev => ({ ...prev, fid: firstEntry.processingStart - firstEntry.startTime }))
        })

        // Cumulative Layout Shift (CLS)
        const clsObserver = new PerformanceObserver((list) => {
            let clsValue = 0
            for (const entry of list.getEntries()) {
                if (!(entry as any).hadRecentInput) {
                    clsValue += (entry as any).value
                }
            }
            setMetrics(prev => ({ ...prev, cls: clsValue }))
        })

        // First Contentful Paint (FCP)
        const fcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries()
            const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint')
            if (fcpEntry) {
                setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }))
            }
        })

        // Time to First Byte (TTFB)
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        if (navigationEntry) {
            setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }))
        }

        try {
            lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
            fidObserver.observe({ entryTypes: ['first-input'] })
            clsObserver.observe({ entryTypes: ['layout-shift'] })
            fcpObserver.observe({ entryTypes: ['paint'] })
        } catch (error) {
            console.log('Performance monitoring not supported:', error)
        }

        return () => {
            lcpObserver.disconnect()
            fidObserver.disconnect()
            clsObserver.disconnect()
            fcpObserver.disconnect()
        }
    }, [])

    // Log metrics in development
    useEffect(() => {
        if (process.env.NODE_ENV === 'development') {
            console.log('Performance Metrics:', metrics)
        }
    }, [metrics])

    // Send metrics to analytics
    useEffect(() => {
        if (typeof window !== 'undefined' && window.gtag) {
            if (metrics.lcp !== null) {
                window.gtag('event', 'web_vitals', {
                    event_category: 'performance',
                    event_label: 'LCP',
                    value: Math.round(metrics.lcp),
                })
            }
            if (metrics.fid !== null) {
                window.gtag('event', 'web_vitals', {
                    event_category: 'performance',
                    event_label: 'FID',
                    value: Math.round(metrics.fid),
                })
            }
            if (metrics.cls !== null) {
                window.gtag('event', 'web_vitals', {
                    event_category: 'performance',
                    event_label: 'CLS',
                    value: Math.round(metrics.cls * 1000),
                })
            }
        }
    }, [metrics])

    return null
}

export function usePerformanceMetrics() {
    const [metrics, setMetrics] = useState<PerformanceMetrics>({
        lcp: null,
        fid: null,
        cls: null,
        fcp: null,
        ttfb: null,
    })

    useEffect(() => {
        if (typeof window === 'undefined') return

        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                if (entry.entryType === 'largest-contentful-paint') {
                    setMetrics(prev => ({ ...prev, lcp: entry.startTime }))
                }
                if (entry.entryType === 'first-input') {
                    const fidEntry = entry as PerformanceEventTiming
                    setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }))
                }
                if (entry.entryType === 'layout-shift') {
                    if (!(entry as any).hadRecentInput) {
                        setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + (entry as any).value }))
                    }
                }
            }
        })

        try {
            observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
        } catch (error) {
            console.log('Performance monitoring not supported:', error)
        }

        return () => observer.disconnect()
    }, [])

    return metrics
}