"use client";

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Calendar as CalendarIcon, Clock, CheckCircle } from "lucide-react";

const css = `
  .rdp {
    --rdp-cell-size: 40px;
    --rdp-accent-color: #0d8943;
    --rdp-background-color: #e6f4ea;
    margin: 0;
  }
  .rdp-day_selected:not([disabled]) { 
    background-color: var(--rdp-accent-color);
    color: white;
    font-weight: bold;
  }
  .rdp-day_selected:hover:not([disabled]) { 
    background-color: #0b7036;
  }
  .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
    background-color: #f0fdf4;
    color: #0d8943;
  }
`;

type CourseType = {
    id: string;
    time: string;
    spots: number;
};

const MOCK_AVAILABILITY: Record<string, CourseType[]> = {
    // Mocking some data for the next few days
    [format(new Date(), "yyyy-MM-dd")]: [
        { id: "1", time: "09:00 AM", spots: 3 },
        { id: "2", time: "01:00 PM", spots: 5 },
    ],
    [format(new Date(Date.now() + 86400000), "yyyy-MM-dd")]: [
        { id: "3", time: "10:00 AM", spots: 2 },
    ],
    [format(new Date(Date.now() + 86400000 * 2), "yyyy-MM-dd")]: [
        { id: "4", time: "09:00 AM", spots: 0 }, // Full
        { id: "5", time: "02:00 PM", spots: 8 },
    ]
};

export const CalendarBooking = () => {
    const [selected, setSelected] = useState<Date | undefined>(new Date());
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

    const footer = selected ? (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
            <p className="font-semibold text-gray-700 mb-3">
                Available Slots for {format(selected, "PPP")}:
            </p>
            <div className="space-y-2">
                {MOCK_AVAILABILITY[format(selected, "yyyy-MM-dd")]?.length > 0 ? (
                    MOCK_AVAILABILITY[format(selected, "yyyy-MM-dd")].map((slot) => (
                        <motion.button
                            key={slot.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => slot.spots > 0 && setSelectedSlot(slot.id)}
                            disabled={slot.spots === 0}
                            className={`w-full flex items-center justify-between p-3 rounded-md transition-all ${selectedSlot === slot.id
                                    ? "bg-brand-primary-600 text-white shadow-md ring-2 ring-brand-primary-200"
                                    : slot.spots === 0
                                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                        : "bg-white text-gray-700 hover:border-brand-primary-500 border border-transparent shadow-sm"
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <Clock size={16} />
                                <span className="font-medium">{slot.time}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                {slot.spots > 0 ? (
                                    <>
                                        <span className={selectedSlot === slot.id ? "text-brand-primary-100" : "text-brand-secondary-600"}>{slot.spots} spots left</span>
                                        {selectedSlot === slot.id && <CheckCircle size={14} />}
                                    </>
                                ) : (
                                    <span>Full</span>
                                )}
                            </div>
                        </motion.button>
                    ))
                ) : (
                    <p className="text-gray-500 italic text-sm">No classes scheduled for this date.</p>
                )}
            </div>
            <AnimatePresence>
                {selectedSlot && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t border-gray-200"
                    >
                        <button className="w-full bg-brand-primary-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:bg-brand-primary-700 transition-colors flex items-center justify-center gap-2 group">
                            Book Appointment
                            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    ) : (
        <p>Please pick a day.</p>
    );

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden font-sans">
            <style>{css}</style>
            <div className="bg-brand-primary-50 p-6 border-b border-brand-primary-100">
                <h3 className="text-xl font-bold text-brand-primary-900 flex items-center gap-2">
                    <CalendarIcon className="text-brand-primary-600" />
                    Find a Class
                </h3>
                <p className="text-brand-primary-700 text-sm mt-1">Select a date to see availability</p>
            </div>

            <div className="p-6">
                <DayPicker
                    mode="single"
                    selected={selected}
                    onSelect={setSelected}
                    footer={footer}
                    showOutsideDays
                    className="flex justify-center"
                />
            </div>
        </div>
    );
};
