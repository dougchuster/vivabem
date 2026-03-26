"use client"

import { useState, useEffect } from 'react'

export function SkipLink() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Tab') {
                setIsVisible(true)
            }
        }

        const handleKeyUp = () => {
            setIsVisible(false)
        }

        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('keyup', handleKeyUp)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('keyup', handleKeyUp)
        }
    }, [])

    if (!isVisible) {
        return null
    }

    return (
        <a
            href="#main-content"
            className="fixed top-4 left-4 z-[9999] px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-semibold shadow-xl shadow-primary/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 backdrop-blur-sm"
            style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
                opacity: isVisible ? 1 : 0,
            }}
        >
            Pular para o conteúdo principal
        </a>
    )
}