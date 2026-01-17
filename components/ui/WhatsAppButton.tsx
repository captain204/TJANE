"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { COMPANY_INFO } from "@/lib/constants";

export const WhatsAppButton = () => {
    const phoneNumber = COMPANY_INFO.phone.replace(/[^0-9]/g, ""); // Remove non-numeric chars
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <MessageCircle size={24} />
            <span className="font-semibold hidden sm:inline">Chat with us</span>
        </motion.a>
    );
};
