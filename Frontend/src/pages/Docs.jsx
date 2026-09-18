import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowDown,
    ArrowUpRight,
    Building2,
    Check,
    Leaf,
    Recycle,
    Users,
} from "lucide-react";

import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";
import docsData from "../constants/Docs";

const reveal = {
    initial: {
        opacity: 0,
        y: 20,
    },
    whileInView: {
        opacity: 1,
        y: 0,
    },
    viewport: {
        once: true,
        amount: 0.15,
    },
    transition: {
        duration: 0.45,
        ease: "easeOut",
    },
};

export function Docs() {
    const [data, setData] = useState({
        name: "",
        email: "",
        idea: "",
    });

    const [loading, setLoading] = useState(false);

    const handlingValue = (event) => {
        const { name, value } = event.target;

        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const SendValue = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(
                "http://localhost:5000/api/docs",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            const result = await res.json();

            if (res.ok) {
                alert(result.msg);

                setData({
                    name: "",
                    email: "",
                    idea: "",
                });
            } else {
                alert(result.msg);
            }
        } catch (err) {
            console.log(err);
            alert("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#fafcf9] text-[#111814]">

            {/* =====================================================
                HERO
            ====================================================== */}

            <section className="relative min-h-[82vh] overflow-hidden bg-[#063b2d]">

                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{
                        backgroundImage: "url('/img/nature2.jpg')",
                    }}
                />

                <div className="absolute inset-0 bg-[#063b2d]/85" />

                <div className="relative z-10 mx-auto flex min-h-[82vh] max-w-6xl items-center px-6 py-24">

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55 }}
                        className="max-w-4xl"
                    >

                        <div className="mb-8 flex items-center gap-3">

                            <Recycle
                                size={20}
                                className="text-green-300"
                            />

                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-green-300">
                                E-Code Solutions
                            </span>

                        </div>

                        <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
                            {docsData.hero.title}
                        </h1>

                        <p className="mt-8 max-w-2xl text-base leading-8 text-green-50/65 sm:text-lg">
                            {docsData.hero.description}
                        </p>

                        <div className="mt-12 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-green-300/70">
                            <ArrowDown size={15} />
                            Discover our system
                        </div>

                    </motion.div>

                </div>

            </section>


            {/* =====================================================
                MAIN CONTENT
            ====================================================== */}

            <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">


                {/* =================================================
                    IMPORTANCE
                ================================================== */}

                <motion.section
                    {...reveal}
                    className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
                >

                    <div>

                        <div className="flex items-center gap-4">

                            <span className="text-sm font-black text-green-600">
                                01
                            </span>

                            <div className="h-px w-12 bg-green-300" />

                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
                                Why It Matters
                            </span>

                        </div>

                        <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-[#063b2d] sm:text-4xl">
                            {docsData.importance.title}
                        </h2>

                        <p className="mt-6 text-sm leading-8 text-gray-600">
                            {docsData.importance.description}
                        </p>

                    </div>


                    <div className="relative">

                        <div className="absolute -left-3 -top-3 h-full w-full border border-green-200" />

                        <video
                            src="/image/video.mp4"
                            controls
                            muted
                            playsInline
                            className="relative z-10 aspect-video w-full bg-black object-cover"
                        />

                    </div>

                </motion.section>


                {/* =================================================
                    FEATURES
                ================================================== */}

                <motion.section
                    {...reveal}
                    className="mt-32"
                >

                    <div className="flex items-center gap-4">

                        <span className="text-sm font-black text-green-600">
                            02
                        </span>

                        <div className="h-px w-12 bg-green-300" />

                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
                            Platform
                        </span>

                    </div>

                    <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">

                        <h2 className="max-w-xl text-3xl font-black tracking-tight text-[#063b2d] sm:text-4xl">
                            {docsData.features.title}
                        </h2>

                        <p className="max-w-md text-sm leading-7 text-gray-500">
                            Everything needed to make electronic waste
                            management simple and responsible.
                        </p>

                    </div>


                    <div className="mt-12 border-t border-gray-200">

                        {docsData.features.items.map((item, index) => (
                            <div
                                key={index}
                                className="group flex items-center gap-6 border-b border-gray-200 py-6"
                            >

                                <span className="text-sm font-black text-green-600/50">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                                    <Check size={15} />
                                </div>

                                <p className="flex-1 text-sm leading-7 text-gray-600 transition-colors group-hover:text-[#063b2d]">
                                    {item}
                                </p>

                                <ArrowUpRight
                                    size={17}
                                    className="text-green-600 opacity-0 transition duration-200 group-hover:opacity-100"
                                />

                            </div>
                        ))}

                    </div>

                </motion.section>


                {/* =================================================
                    WORKFLOW
                ================================================== */}

                <motion.section
                    {...reveal}
                    className="mt-32"
                >

                    <div className="flex items-center gap-4">

                        <span className="text-sm font-black text-green-600">
                            03
                        </span>

                        <div className="h-px w-12 bg-green-300" />

                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
                            Process
                        </span>

                    </div>

                    <h2 className="mt-6 text-3xl font-black tracking-tight text-[#063b2d] sm:text-4xl">
                        {docsData.workflow.title}
                    </h2>


                    <div className="relative mt-14">

                        <div className="absolute left-[23px] top-5 h-[calc(100%-40px)] w-px bg-green-200" />

                        <div className="space-y-10">

                            {docsData.workflow.items.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative flex gap-7"
                                >

                                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-green-300 bg-[#fafcf9] text-sm font-black text-green-700">
                                        {index + 1}
                                    </div>

                                    <div className="pt-2">

                                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-green-600">
                                            Step {index + 1}
                                        </p>

                                        <p className="mt-2 max-w-3xl text-sm leading-8 text-gray-600">
                                            {item}
                                        </p>

                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>

                </motion.section>


                {/* =================================================
                    ROLES
                ================================================== */}

                <motion.section
                    {...reveal}
                    className="mt-32"
                >

                    <div className="flex items-center gap-4">

                        <span className="text-sm font-black text-green-600">
                            04
                        </span>

                        <div className="h-px w-12 bg-green-300" />

                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
                            Community
                        </span>

                    </div>

                    <h2 className="mt-6 text-3xl font-black tracking-tight text-[#063b2d] sm:text-4xl">
                        {docsData.roles.title}
                    </h2>


                    <div className="mt-12 divide-y divide-gray-200 border-y border-gray-200">

                        {docsData.roles.items.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col gap-6 py-8 sm:flex-row sm:items-start"
                            >

                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">

                                    {index === 0 ? (
                                        <Users size={20} />
                                    ) : (
                                        <Building2 size={20} />
                                    )}

                                </div>

                                <div>

                                    <h3 className="text-lg font-bold text-[#063b2d]">
                                        {item.role}
                                    </h3>

                                    <p className="mt-2 max-w-3xl text-sm leading-7 text-gray-600">
                                        {item.description}
                                    </p>

                                </div>

                            </div>
                        ))}

                    </div>

                </motion.section>


                {/* =================================================
                    BENEFITS
                ================================================== */}

                <motion.section
                    {...reveal}
                    className="mt-32"
                >

                    <div className="flex items-center gap-4">

                        <span className="text-sm font-black text-green-600">
                            05
                        </span>

                        <div className="h-px w-12 bg-green-300" />

                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
                            Impact
                        </span>

                    </div>

                    <div className="mt-6 flex items-center gap-4">

                        <Leaf
                            size={27}
                            className="text-green-600"
                        />

                        <h2 className="text-3xl font-black tracking-tight text-[#063b2d] sm:text-4xl">
                            {docsData.benefits.title}
                        </h2>

                    </div>


                    <div className="mt-12 grid gap-x-12 md:grid-cols-2">

                        {docsData.benefits.items.map((item, index) => (
                            <div
                                key={index}
                                className="flex gap-5 border-t border-gray-200 py-7"
                            >

                                <span className="text-sm font-black text-green-600/50">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <p className="text-sm leading-7 text-gray-600">
                                    {item}
                                </p>

                            </div>
                        ))}

                    </div>

                </motion.section>


                {/* =================================================
                    CONTACT
                ================================================== */}

                <motion.section
                    {...reveal}
                    className="mt-32"
                >

                    <div className="border-t-2 border-[#063b2d] pt-10">

                        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

                            {/* Left */}

                            <div>

                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
                                    <Recycle size={21} />
                                </div>

                                <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-green-600">
                                    Share Your Ideas
                                </p>

                                <h2 className="mt-3 text-3xl font-black leading-tight text-[#063b2d] sm:text-4xl">
                                    Want to Collaborate with Us?
                                </h2>

                                <p className="mt-5 max-w-md text-sm leading-8 text-gray-600">
                                    We value your creativity! If you have a
                                    great idea or suggestion, please share it
                                    with us and help us make our project even
                                    better.
                                </p>

                            </div>


                            {/* Form */}

                            <form
                                onSubmit={SendValue}
                                className="space-y-6"
                            >

                                <div className="grid gap-6 sm:grid-cols-2">

                                    <Input
                                        label="Full Name"
                                        name="name"
                                        placeholder="Enter your name"
                                        value={data.name}
                                        onChange={handlingValue}
                                    />

                                    <Input
                                        label="Email Address"
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={data.email}
                                        onChange={handlingValue}
                                    />

                                </div>


                                <div className="flex flex-col gap-2">

                                    <label className="ml-1 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                                        Write your idea here
                                    </label>

                                    <textarea
                                        rows={6}
                                        name="idea"
                                        value={data.idea}
                                        onChange={handlingValue}
                                        required
                                        placeholder="Share your idea..."
                                        className="w-full resize-none border-b border-gray-300 bg-transparent px-1 py-3 text-sm text-gray-900 outline-none transition duration-200 placeholder:text-gray-400 focus:border-green-600"
                                    />

                                </div>


                                <label className="flex items-center gap-3 text-sm text-gray-600">

                                    <input
                                        type="checkbox"
                                        required
                                        className="h-4 w-4 accent-green-600"
                                    />

                                    <span>
                                        I agree to the Terms and Conditions
                                    </span>

                                </label>


                                <Button
                                    type="submit"
                                    loading={loading}
                                >
                                    Send Your Idea
                                </Button>

                            </form>

                        </div>

                    </div>

                </motion.section>

            </div>


            {/* =====================================================
                BOTTOM
            ====================================================== */}

            <footer className="border-t border-gray-200 bg-[#063b2d]">

                <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex items-center gap-3">

                        <img 
                            src="/image/logo.png"
                            size={18}
                            className="w-5 h-5"
                        />

                        <p className="text-xs text-green-100/50">
                            © {new Date().getFullYear()} E-Code Solutions. All rights reserved.
                        </p>

                    </div>

                    <p className="text-xs text-green-100/50">
                        Building a cleaner and greener future.
                    </p>

                </div>

            </footer>

        </main>
    );
}

export default Docs;