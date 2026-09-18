import React from "react";
import { motion } from "framer-motion";
import { Recycle } from "lucide-react";
import aboutData from "../../constants/AboutUs";

export default function AboutUs() {
    return (
        <section
            id="about"
            className="bg-white px-6 py-20 md:px-10 lg:px-20"
        >
            <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 }}
                >
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-green-600">
                        {aboutData.tag}
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
                        {aboutData.title}{" "}
                        <span className="text-green-600">
                            {aboutData.highlight}
                        </span>
                    </h2>

                    <p className="mt-5 text-sm leading-7 text-gray-600 md:text-base">
                        {aboutData.description}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base">
                        {aboutData.secondaryDescription}
                    </p>
                </motion.div>

                {/* Visual */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.08 }}
                    className="relative"
                >
                    <div className="overflow-hidden rounded-3xl border border-green-100 bg-white p-3 shadow-sm">
                        <img
                            src={aboutData.image}
                            alt="E-waste management"
                            className="
                                h-[360px]
                                w-full
                                rounded-2xl
                                object-cover
                            "
                        />
                    </div>

                    {/* Small floating info */}
                    <motion.div
                        whileHover={{ y: -3 }}
                        className="
                            absolute -bottom-5 -left-4
                            flex items-center gap-3
                            rounded-2xl
                            border border-green-100
                            bg-white
                            px-5 py-4
                            shadow-md
                        "
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-white">
                            <Recycle size={21} />
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-gray-950">
                                Reuse. Restore. Recycle.
                            </p>
                            <p className="text-xs text-gray-500">
                                For a cleaner future
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}