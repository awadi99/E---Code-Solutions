import React, { forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Input = forwardRef(
    (
        {
            label,
            type = "text",
            name,
            placeholder,
            error,
            disabled = false,
            className = "",
            ...props
        },
        ref
    ) => {
        return (
            <div className="flex w-full flex-col gap-2 group transform-gpu">
                {label && (
                    <label className="ml-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                        {label}
                    </label>
                )}

                <div className="relative">
                    <input
                        ref={ref}
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        disabled={disabled}
                        className={`
                            w-full rounded-xl border px-4 py-3
                            font-sans text-sm outline-none
                            transition-all duration-300

                            bg-white
                            text-slate-900
                            placeholder:text-slate-400

                            ${
                                error
                                    ? "border-red-500 ring-4 ring-red-500/10"
                                    : "border-slate-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                            }

                            ${
                                disabled
                                    ? "cursor-not-allowed bg-slate-50 opacity-50"
                                    : "hover:border-slate-300"
                            }

                            ${className}
                        `}
                        {...props}
                    />
                </div>

                <AnimatePresence>
                    {error && (
                        <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-1 text-[10px] font-bold uppercase tracking-wider text-red-500"
                        >
                            {error}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
        );
    }
);

Input.displayName = "Input";

export default Input;