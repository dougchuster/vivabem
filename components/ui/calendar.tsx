"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export type CalendarProps = {
    mode?: "single" | "multiple" | "range"
    selected?: Date | Date[] | { from: Date; to: Date }
    onSelect?: (date: Date | Date[] | { from: Date; to: Date } | undefined) => void
    className?: string
    disabled?: (date: Date) => boolean
    fromYear?: number
    toYear?: number
    fromMonth?: Date
    toMonth?: Date
    month?: Date
    onMonthChange?: (month: Date) => void
}

function Calendar({
    mode = "single",
    selected,
    onSelect,
    className,
    disabled,
    fromYear = 1900,
    toYear = 2030,
    fromMonth,
    toMonth,
    month: propMonth,
    onMonthChange,
}: CalendarProps) {
    const [month, setMonth] = React.useState(propMonth || new Date())

    React.useEffect(() => {
        if (propMonth) {
            setMonth(propMonth)
        }
    }, [propMonth])

    const handleMonthChange = (newMonth: Date) => {
        setMonth(newMonth)
        onMonthChange?.(newMonth)
    }

    const daysInMonth = new Date(
        month.getFullYear(),
        month.getMonth() + 1,
        0
    ).getDate()

    const firstDayOfMonth = new Date(
        month.getFullYear(),
        month.getMonth(),
        1
    ).getDay()

    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
    const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]

    const isSelected = (day: number) => {
        const date = new Date(month.getFullYear(), month.getMonth(), day)
        if (!selected) return false

        if (mode === "single") {
            return (selected as Date).toDateString() === date.toDateString()
        }

        if (mode === "multiple") {
            return (selected as Date[]).some(
                (d) => d.toDateString() === date.toDateString()
            )
        }

        if (mode === "range") {
            const range = selected as { from: Date; to: Date }
            return (
                range.from.toDateString() === date.toDateString() ||
                range.to.toDateString() === date.toDateString()
            )
        }

        return false
    }

    const isInRange = (day: number) => {
        if (mode !== "range" || !selected) return false
        const date = new Date(month.getFullYear(), month.getMonth(), day)
        const range = selected as { from: Date; to: Date }
        return date > range.from && date < range.to
    }

    const handleDayClick = (day: number) => {
        const date = new Date(month.getFullYear(), month.getMonth(), day)
        if (disabled?.(date)) return

        if (mode === "single") {
            onSelect?.(date)
        } else if (mode === "multiple") {
            const current = (selected as Date[]) || []
            const exists = current.some(
                (d) => d.toDateString() === date.toDateString()
            )
            if (exists) {
                onSelect?.(current.filter((d) => d.toDateString() !== date.toDateString()))
            } else {
                onSelect?.([...current, date])
            }
        } else if (mode === "range") {
            const current = selected as { from: Date; to: Date }
            if (!current?.from) {
                onSelect?.({ from: date, to: date })
            } else if (current.from.toDateString() === date.toDateString()) {
                onSelect?.({ from: date, to: date })
            } else if (date < current.from) {
                onSelect?.({ from: date, to: current.from })
            } else {
                onSelect?.({ from: current.from, to: date })
            }
        }
    }

    const goToPreviousMonth = () => {
        const newMonth = new Date(month.getFullYear(), month.getMonth() - 1)
        if (!fromMonth || newMonth >= fromMonth) {
            handleMonthChange(newMonth)
        }
    }

    const goToNextMonth = () => {
        const newMonth = new Date(month.getFullYear(), month.getMonth() + 1)
        if (!toMonth || newMonth <= toMonth) {
            handleMonthChange(newMonth)
        }
    }

    const goToPreviousYear = () => {
        const newMonth = new Date(month.getFullYear() - 1, month.getMonth())
        if (newMonth.getFullYear() >= fromYear) {
            handleMonthChange(newMonth)
        }
    }

    const goToNextYear = () => {
        const newMonth = new Date(month.getFullYear() + 1, month.getMonth())
        if (newMonth.getFullYear() <= toYear) {
            handleMonthChange(newMonth)
        }
    }

    return (
        <div className={cn("p-3", className)}>
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                    <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={goToPreviousYear}
                    >
                        <ChevronLeft className="h-4 w-4" />
                        <ChevronLeft className="h-4 w-4 -ml-2" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={goToPreviousMonth}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                </div>

                <div className="font-semibold">
                    {month.toLocaleDateString("pt-BR", {
                        month: "long",
                        year: "numeric",
                    })}
                </div>

                <div className="flex items-center gap-1">
                    <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={goToNextMonth}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={goToNextYear}
                    >
                        <ChevronRight className="h-4 w-4" />
                        <ChevronRight className="h-4 w-4 -ml-2" />
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
                {weekDays.map((day) => (
                    <div
                        key={day}
                        className="text-center text-sm font-medium text-neutral-500 py-2"
                    >
                        {day}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                    <div key={`empty-${index}`} className="h-9" />
                ))}

                {days.map((day) => {
                    const date = new Date(month.getFullYear(), month.getMonth(), day)
                    const isDisabled = disabled?.(date)
                    const isSelectedDay = isSelected(day)
                    const isInRangeDay = isInRange(day)

                    return (
                        <button
                            key={day}
                            onClick={() => handleDayClick(day)}
                            disabled={isDisabled}
                            className={cn(
                                "h-9 w-9 text-center text-sm transition-colors rounded-xl",
                                "hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2",
                                isSelectedDay && "bg-brand-500 text-white hover:bg-brand-600",
                                isInRangeDay && "bg-brand-100 text-brand-900",
                                isDisabled && "text-neutral-300 cursor-not-allowed hover:bg-transparent",
                                !isSelectedDay && !isInRangeDay && !isDisabled && "text-neutral-900"
                            )}
                        >
                            {day}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

Calendar.displayName = "Calendar"

export { Calendar }