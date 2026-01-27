"use client";

import { DayPicker } from "react-day-picker";
import "./calendar.css";
import { format } from "date-fns";

interface BookingCalendarProps {
    selected: Date | undefined;
    onSelect: (date: Date | undefined) => void;
}

export const BookingCalendar = ({ selected, onSelect }: BookingCalendarProps) => {
    return (
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-center">
            <style>{`
                .rdp-root {
                    --rdp-day-height: 40px;
                    --rdp-day-width: 40px;
                    --rdp-accent-color: #0c4a6e;
                    --rdp-accent-background-color: #e0f2fe;
                    margin: 0;
                }
                .rdp-selected:not([disabled]) { 
                    background-color: var(--rdp-accent-color); 
                    color: white;
                }
                .rdp-selected:hover:not([disabled]) { 
                    background-color: var(--rdp-accent-color); 
                }
            `}</style>
            <DayPicker
                mode="single"
                selected={selected}
                onSelect={onSelect}
                footer={selected ? `Selected: ${format(selected, 'PPP')}` : "Please pick a day."}
                disabled={date => date < new Date(new Date().setHours(0, 0, 0, 0))}
                modifiersClassNames={{
                    selected: "bg-brand-primary text-white font-bold rounded-lg",
                    today: "font-bold text-brand-primary"
                }}
            />
        </div>
    );
};
