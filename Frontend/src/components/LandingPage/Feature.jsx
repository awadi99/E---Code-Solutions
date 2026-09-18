import React from "react";
import { motion } from "framer-motion";
import featuresData from "../../constants/features-data";

export default function Feature() {
    return (
        <section
            id="what-we-do"
            className="bg-white px-6 py-20 md:px-10 lg:px-20"
        >
            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="mx-auto mb-12 max-w-2xl text-center"
                >
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-green-600">
                        What We Do
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
                        Give Your Old Tech
                        <span className="text-green-600">
                            {" "}A New Life.
                        </span>
                    </h2>

                    <p className="mt-4 text-sm leading-6 text-gray-500 md:text-base">
                        We help you reuse, restore, and recycle old electronic
                        devices responsibly.
                    </p>
                </motion.div>

                {/* Feature Cards */}
                <div className="grid gap-5 md:grid-cols-3">
                    {featuresData.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <motion.article
                                key={feature.title}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.06,
                                }}
                                whileHover={{ y: -3 }}
                                className="
                                    rounded-2xl
                                    border border-green-100
                                    bg-green-50
                                    p-7
                                    transition-shadow
                                    duration-200
                                    hover:shadow-md
                                "
                            >
                                {/* Icon */}
                                <div
                                    className="
                                        mb-6
                                        flex h-11 w-11
                                        items-center justify-center
                                        rounded-xl
                                        bg-green-600
                                        text-white
                                    "
                                >
                                    <Icon
                                        size={22}
                                        strokeWidth={2}
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold text-gray-950">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="
                                    mt-3
                                    text-sm
                                    leading-6
                                    text-gray-600
                                ">
                                    {feature.description}
                                </p>

                                {/* Accent */}
                                <div
                                    className="
                                        mt-6
                                        h-1
                                        w-9
                                        rounded-full
                                        bg-green-600
                                        transition-[width]
                                        duration-200
                                        hover:w-14
                                    "
                                />
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}