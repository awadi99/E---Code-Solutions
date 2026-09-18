import { motion } from "framer-motion";
import  Button  from "../common/ui/Button";
import { Link } from "react-router-dom";

export function Hero() {
    return (
        <section id="hero" className="relative min-h-screen overflow-hidden bg-black">

            {/* ================= BACKGROUND ================= */}

            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/image/nature2.jpg')",
                }}
            />

            {/* Strong dark overlay for readability */}
            <div className="absolute inset-0" />

            {/* Left-to-right dark/green cinematic gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 " />

            {/* Bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />


            {/* ================= HERO CONTENT ================= */}

            <div className="relative z-10 flex min-h-screen items-center">

                <div className="container mx-auto px-6 lg:px-16">

                    <div className="max-w-4xl">


                        {/* ================= BADGE ================= */}

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.45,
                                ease: "easeOut",
                            }}
                            className="mb-7 inline-flex items-center rounded-full border border-green-400/30 bg-black/40 px-4 py-2"
                        >

                            <span className="mr-2 bg-green-400 " />
                            <span className="animate-spin">♻</span>
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/90 sm:text-sm">
                            &nbsp;Welcome to E-Code Solutions 
                            </span>

                        </motion.div>


                        {/* ================= HEADING ================= */}

                        <motion.h1
                            initial={{ opacity: 0, y: 22 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.08,
                                ease: "easeOut",
                            }}
                            className="max-w-2xl text-5xl font-black leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-[84px]"
                        >

                            Don't Let Your

                            <br />

                            <span className="text-green-400">
                                Old Tech Go to Waste.
                            </span>

                        </motion.h1>


                        {/* ================= DESCRIPTION ================= */}

                        <motion.p
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.55,
                                delay: 0.2,
                                ease: "easeOut",
                            }}
                            className="mt-7 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg"
                        >
                            Sell your old electronic devices and give them
                            another purpose through responsible reuse,
                            repair, and recycling.
                        </motion.p>


                        {/* ================= BUTTONS ================= */}

                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.55,
                                delay: 0.32,
                                ease: "easeOut",
                            }}
                            className="mt-9 flex flex-col gap-3 sm:flex-row"
                        >

                            {/* PRIMARY */}

                            <Link to="/sign-up">

                                <motion.div
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >

                                    <Button
                                        size="lg"
                                        className="group flex w-full items-center justify-center rounded-xl bg-green-600/70 px-8 py-4 font-bold text-black shadow-[0_8px_30px_rgba(34,197,94,0.18)] transition-all duration-200 hover:bg-green-500 sm:w-auto hover:text-white/80 "
                                    >

                                        Sell Your Items

                                    </Button>

                                </motion.div>

                            </Link>


                            {/* SECONDARY */}

                            <Link to="/docs">

                                <motion.div
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >

                                    <Button
                                        size="lg"
                                        variant="outlined"
                                        className="w-full rounded-xl border-white/30 bg-black/20 px-8 py-4 font-medium text-white transition-all duration-200 hover:border-green-400 hover:bg-green-500/10 hover:text-green-300 sm:w-auto"
                                    >
                                        Learn More
                                    </Button>

                                </motion.div>

                            </Link>

                        </motion.div>


                        {/* ================= TRUST LINE ================= */}

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.5,
                            }}
                            className="mt-10 flex items-center gap-3"
                        >

                            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-green-400/20 bg-green-500/10 text-green-400 animate-spin">
                                ♻
                            </div>

                            <div>

                                <p className="text-sm font-medium text-gray-200">
                                    Reuse. Recycle. Renew.
                                </p>

                                <p className="text-xs text-gray-500">
                                    Give your electronics another chance.
                                </p>

                            </div>

                        </motion.div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;