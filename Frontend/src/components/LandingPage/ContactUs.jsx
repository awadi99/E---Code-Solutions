import React from "react";
import { motion } from "framer-motion";
import contactData from "../../constants/contact-data";
import Button from "../common/ui/Button";
import Input from "../common/ui/Input";

export default function ContactUs() {
    return (
        <section
            id="contact"
            className="bg-[#f0fdf4] px-6 py-20 md:px-10 lg:px-20"
        >
            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35 }}
                    className="mx-auto mb-12 max-w-2xl text-center"
                >
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-green-600">
                        Contact Us
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
                        Let's Build a
                        <span className="text-green-600">
                            {" "}Greener Future.
                        </span>
                    </h2>

                    <p className="mt-4 text-sm leading-6 text-gray-500 md:text-base">
                        Have a question, want to sell your e-waste, or want to
                        work with us? Send us a message.
                    </p>
                </motion.div>

                <div className="grid gap-8 lg:grid-cols-2">

                    {/* Contact Data */}
                    <div className="space-y-4">
                        {contactData.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="
                                        flex gap-4
                                        rounded-2xl
                                        border border-green-100
                                        bg-white
                                        p-5
                                    "
                                >
                                    <div className="
                                        flex h-11 w-11 shrink-0
                                        items-center justify-center
                                        rounded-xl
                                        bg-green-600
                                        text-white
                                    ">
                                        <Icon size={21} strokeWidth={2} />
                                    </div>

                                    <div>
                                        <h3 className="
                                            text-lg font-semibold
                                            text-gray-950
                                        ">
                                            {item.title}
                                        </h3>

                                        <p className="
                                            mt-1 text-sm leading-6
                                            text-gray-600
                                        ">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Form */}
                    <motion.form
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: 0.05 }}
                        className="
                            rounded-2xl
                            border border-green-100
                            bg-white
                            p-6 md:p-8
                        "
                    >
                        <Input
                            label="Name"
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                        />

                        <div className="mt-5">
                            <Input
                                label="Email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="mt-5">
                            <label
                                htmlFor="message"
                                className="
                                    mb-2 block
                                    text-sm font-medium
                                    text-gray-800
                                "
                            >
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Write your message..."
                                className="
                                    w-full resize-none
                                    rounded-lg
                                    border border-gray-200
                                    bg-gray-50
                                    px-4 py-3
                                    text-sm text-gray-950
                                    outline-none
                                    transition-colors duration-200
                                    placeholder:text-gray-400
                                    focus:border-green-500
                                "
                                required
                            />
                        </div>

                        <div className="mt-6">
                            <Button type="submit" className="w-full">
                                Send Message
                            </Button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}