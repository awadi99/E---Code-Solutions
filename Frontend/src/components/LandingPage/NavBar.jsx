import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Moon,
    Sun,
    ArrowUpRight,
    Menu,
    X,
    Recycle,
} from "lucide-react";
import { useLenis } from "../scroll/SmoothScroll";
import { useNavigate } from "react-router-dom";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "What we Do", href: "#what-we-do" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const lenis = useLenis();
    const navigate = useNavigate();


    /* ================= SCROLL ================= */

    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);


    /* ================= MOBILE SCROLL LOCK ================= */

    useEffect(() => {

        if (isOpen) {
            lenis?.stop();
            document.body.style.overflow = "hidden";
        } else {
            lenis?.start();
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };

    }, [isOpen, lenis]);


    /* ================= SMOOTH SCROLL ================= */

    const handleScrollTo = (e, href) => {

        e.preventDefault();

        setIsOpen(false);

        if (lenis) {

            setTimeout(() => {

                lenis.scrollTo(href, {
                    offset: -100,
                    duration: 1.2,
                    easing: (t) =>
                        Math.min(
                            1,
                            1.001 - Math.pow(2, -10 * t)
                        ),
                });

            }, 10);

        } else {

            document
                .querySelector(href)
                ?.scrollIntoView({
                    behavior: "smooth",
                });

        }

    };


    return (

        <header className="pointer-events-none fixed left-0 top-4 z-[1000] w-full px-4 md:top-6 md:px-6">

            {/* =====================================================
                NAVBAR
            ====================================================== */}

            <motion.div
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.5,
                    ease: "easeOut",
                }}
                className={`
                    pointer-events-auto mx-auto flex max-w-6xl
                    items-center justify-between
                    rounded-2xl border px-2 py-2
                    transition-all duration-300

                    ${
                        scrolled
                            ? "border-green-900/30 bg-black/85 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
                            : "border-white/10 bg-black/25 backdrop-blur-md"
                    }
                `}
            >


                {/* =================================================
                    LOGO
                ================================================== */}

                <button
                    onClick={(e) =>
                        handleScrollTo(e, "#hero")
                    }
                    className="flex items-center gap-3 pl-2 md:pl-4"
                >

                    {/* Logo icon */}

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-green-400/20 bg-green-500/10 shadow-sm">

                        <img
                            src="/image/logo.png"
                            alt="E-Code Solutions"
                            className="h-8 w-8 rounded-lg object-cover"
                        />

                    </div>


                    {/* Brand */}

                    <div className="flex flex-col items-start leading-none">

                        <span className="text-xl font-black tracking-tight text-white md:text-2xl">
                            E-CODE
                            <span className="text-green-400">
                                .
                            </span>
                        </span>

                        <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.22em] text-green-400/80">
                            Solutions
                        </span>

                    </div>

                </button>


                {/* =================================================
                    DESKTOP NAV
                ================================================== */}

                <nav className="hidden items-center gap-1 md:flex">

                    {navItems.map((item) => (

                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) =>
                                handleScrollTo(e, item.href)
                            }
                            className="
                                rounded-xl px-4 py-2.5
                                text-[10px] font-bold
                                uppercase tracking-widest
                                text-gray-400
                                transition-all duration-200
                                hover:bg-green-500/10
                                hover:text-green-400
                            "
                        >
                            {item.name}
                        </a>

                    ))}

                </nav>


                {/* =================================================
                    ACTIONS
                ================================================== */}

                <div className="flex items-center gap-2 pr-1 md:pr-2">


                    {/* CTA */}

                    <motion.button
                        whileHover={{
                            y: -1,
                        }}
                        whileTap={{
                            scale: 0.97,
                        }}
                        onClick={() =>
                            navigate("/sign-up")
                        }
                        className="
                            hidden sm:flex
                            items-center gap-2
                            rounded-xl
                            bg-green-500
                            px-5 py-2.5
                            text-[10px]
                            font-black
                            uppercase
                            tracking-[0.15em]
                            text-black
                            shadow-[0_6px_25px_rgba(34,197,94,0.15)]
                            transition-colors
                            hover:bg-green-400
                        "
                    >

                        Login

                        <ArrowUpRight size={14} />

                    </motion.button>


                    {/* Mobile menu button */}

                    <button
                        onClick={() =>
                            setIsOpen(!isOpen)
                        }
                        aria-label="Toggle menu"
                        className="
                            flex h-10 w-10
                            items-center justify-center
                            rounded-xl
                            border border-white/10
                            bg-white/5
                            text-white
                            transition-all
                            hover:border-green-400/30
                            hover:text-green-400
                            md:hidden
                        "
                    >

                        {isOpen ? (
                            <X size={20} />
                        ) : (
                            <Menu size={20} />
                        )}

                    </button>

                </div>

            </motion.div>


            {/* =====================================================
                MOBILE MENU
            ====================================================== */}

            <AnimatePresence>

                {isOpen && (

                    <>

                        {/* Backdrop */}

                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                            }}
                            onClick={() =>
                                setIsOpen(false)
                            }
                            className="
                                pointer-events-auto
                                fixed inset-0
                                z-[1001]
                                bg-black/80
                                backdrop-blur-sm
                                md:hidden
                            "
                        />


                        {/* Menu */}

                        <motion.div
                            initial={{
                                x: "100%",
                            }}
                            animate={{
                                x: 0,
                            }}
                            exit={{
                                x: "100%",
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "easeOut",
                            }}
                            className="
                                pointer-events-auto
                                fixed right-0 top-0
                                z-[1002]
                                flex h-screen
                                w-[85%] max-w-[360px]
                                flex-col
                                border-l border-green-900/30
                                bg-[#050805]
                                p-7
                                shadow-2xl
                                md:hidden
                            "
                        >

                            {/* Mobile header */}

                            <div className="flex items-center justify-between">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10">

                                        {/* <Recycle
                                            size={21}
                                            className="text-green-400"
                                        /> */}
                                        <img src="/image/logo.png" alt="" />

                                    </div>

                                    <div>

                                        <p className="text-sm font-black text-white">
                                            E-CODE
                                            <span className="text-green-400">
                                                .
                                            </span>
                                        </p>

                                        <p className="text-[8px] uppercase tracking-[0.2em] text-green-400/70">
                                            Solutions
                                        </p>

                                    </div>

                                </div>


                                <button
                                    onClick={() =>
                                        setIsOpen(false)
                                    }
                                    className="text-gray-400 hover:text-white"
                                >
                                    <X size={23} />
                                </button>

                            </div>


                            {/* Mobile navigation */}

                            <nav className="mt-16 flex flex-col">

                                {navItems.map((item, index) => (

                                    <motion.a
                                        initial={{
                                            opacity: 0,
                                            x: 20,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        transition={{
                                            delay:
                                                index * 0.05,
                                            duration: 0.25,
                                        }}
                                        key={item.name}
                                        href={item.href}
                                        onClick={(e) =>
                                            handleScrollTo(
                                                e,
                                                item.href
                                            )
                                        }
                                        className="
                                            border-b
                                            border-white/5
                                            py-5
                                            text-3xl
                                            font-black
                                            tracking-tight
                                            text-white
                                            transition-colors
                                            hover:text-green-400
                                        "
                                    >
                                        {item.name}
                                    </motion.a>

                                ))}

                            </nav>


                            {/* Mobile CTA */}

                            <div className="mt-auto">

                                <motion.button
                                    whileTap={{
                                        scale: 0.98,
                                    }}
                                    onClick={() => {
                                        setIsOpen(false);
                                        navigate("/sell");
                                    }}
                                    className="
                                        flex w-full
                                        items-center
                                        justify-center
                                        gap-2
                                        rounded-xl
                                        bg-green-500
                                        py-4
                                        text-xs
                                        font-black
                                        uppercase
                                        tracking-widest
                                        text-black
                                        hover:bg-green-400
                                    "
                                >

                                    Sell Your Items

                                    <ArrowUpRight
                                        size={16}
                                    />

                                </motion.button>

                            </div>

                        </motion.div>

                    </>

                )}

            </AnimatePresence>

        </header>
    );
}