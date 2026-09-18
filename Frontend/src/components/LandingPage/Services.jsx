import React from "react";
import { motion } from "framer-motion";
import servicesData from "../../constants/Services";

export default function Services() {
    return (
        <section
            id="services"
            className="bg-green-50 px-6 py-20 md:px-10 lg:px-20"
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
                        Our Services
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
                        Complete E-Waste
                        <span className="text-green-600">
                            {" "}Management.
                        </span>
                    </h2>

                    <p className="mt-4 text-sm leading-6 text-gray-500 md:text-base">
                        From selling and collecting electronic items to
                        repairing, restoring, recycling, and reselling them,
                        we manage the complete process.
                    </p>
                </motion.div>

                {/* Services */}
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {servicesData.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.article
                                key={service.title}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.05,
                                }}
                                whileHover={{ y: -3 }}
                                className="
                                    group
                                    rounded-2xl
                                    border border-green-100
                                    bg-white
                                    p-6
                                    transition-shadow duration-200
                                    hover:shadow-md
                                "
                            >
                                {/* Icon */}
                                <div
                                    className="
                                        mb-5
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
                                <h3 className="
                                    text-lg
                                    font-semibold
                                    text-gray-950
                                ">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="
                                    mt-3
                                    text-sm
                                    leading-6
                                    text-gray-600
                                ">
                                    {service.description}
                                </p>

                                {/* Accent */}
                                <div className="
                                    mt-5
                                    h-1
                                    w-8
                                    rounded-full
                                    bg-green-600
                                    transition-[width]
                                    duration-200
                                    group-hover:w-12
                                " />
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}