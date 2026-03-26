"use client"

import { useEffect } from 'react'

interface AnalyticsProps {
    eventName: string
    eventData?: Record<string, unknown>
}

export function trackEvent(eventName: string, eventData?: Record<string, unknown>) {
    if (typeof window !== 'undefined') {
        // Google Analytics 4
        if (window.gtag) {
            window.gtag('event', eventName, eventData)
        }

        // Facebook Pixel
        if (window.fbq) {
            window.fbq('track', eventName, eventData)
        }

        // Console log em desenvolvimento
        if (process.env.NODE_ENV === 'development') {
            console.log('Analytics Event:', eventName, eventData)
        }
    }
}

export function Analytics({ eventName, eventData }: AnalyticsProps) {
    useEffect(() => {
        trackEvent(eventName, eventData)
    }, [eventName, eventData])

    return null
}

export function useAnalytics() {
    const trackPageView = (url: string) => {
        trackEvent('page_view', { page_location: url })
    }

    const trackClick = (element: string, section?: string) => {
        trackEvent('click', { element, section })
    }

    const trackFormSubmit = (formName: string, success: boolean) => {
        trackEvent('form_submit', { form_name: formName, success })
    }

    const trackSimulationStart = (planType: string) => {
        trackEvent('simulation_start', { plan_type: planType })
    }

    const trackSimulationComplete = (planType: string, numberOfLives: number) => {
        trackEvent('simulation_complete', {
            plan_type: planType,
            number_of_lives: numberOfLives
        })
    }

    const trackWhatsAppClick = (source: string) => {
        trackEvent('whatsapp_click', { source })
    }

    const trackPhoneClick = (source: string) => {
        trackEvent('phone_click', { source })
    }

    return {
        trackPageView,
        trackClick,
        trackFormSubmit,
        trackSimulationStart,
        trackSimulationComplete,
        trackWhatsAppClick,
        trackPhoneClick,
    }
}

// Declaração de tipos para gtag e fbq
declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void
        fbq?: (...args: unknown[]) => void
    }
}