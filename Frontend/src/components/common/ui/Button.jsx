import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Button = ({
    children,
    type = "button",
    onClick,
    loading = false,
    disabled = false,
    className = "",
}) => {
    return (
        <motion.button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className={`
                inline-flex items-center justify-center gap-2
                px-6 py-3
                rounded-lg

                bg-green-500
                text-black
                text-sm font-semibold

                shadow-sm shadow-green-500/20

                transition-colors duration-200
                hover:bg-green-400

                disabled:opacity-60
                disabled:cursor-not-allowed

                ${className}
            `}
        >
            {loading ? (
                <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                    <span>Wait...</span>
                </>
            ) : (
                <>
                    <span>{children}</span>

                    <ArrowUpRight
                        size={16}
                        strokeWidth={2}
                        className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                </>
            )}
        </motion.button>
    );
};

export default Button;