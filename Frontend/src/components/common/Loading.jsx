import React from "react";
import { motion } from "framer-motion";

export default function Loading() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-black">

            {/* Loader */}
            <div className="relative flex h-32 w-32 items-center justify-center">

                {/* Pulsing Ring */}
                <motion.div
                    className="absolute h-28 w-28 rounded-full border border-green-500/30"
                    animate={{
                        scale: [0.85, 1.12, 0.85],
                        opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Rotating Ring */}
                <motion.div
                    className="absolute h-28 w-28 rounded-full border-2 border-green-500/10 border-t-green-500"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                {/* Orbiting Dot */}
                <motion.div
                    className="absolute inset-0"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    <div className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-green-400" />
                </motion.div>

                {/* Logo */}
                <motion.img
                    src="/image/logo.png"
                    alt="E-Code Solutions"
                    className="h-20 w-20 object-contain"
                    animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.85, 1, 0.85],
                    }}
                    transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Brand */}
            <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-5 text-center"
            >
                <p className="text-sm font-semibold tracking-[0.25em] text-white">
                    E-CODE
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-green-500">
                    Solutions
                </p>
            </motion.div>
        </div>
    );
}