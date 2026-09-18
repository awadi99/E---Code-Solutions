import React from "react";
import { Link } from "react-router-dom";
import {
    FiGithub,
    FiLinkedin,
    FiInstagram,
    FiYoutube,
} from "react-icons/fi";
import {
    Mail,
    MapPin,
    Phone,
    Send,
    Code2,
    Recycle,
    Leaf,
} from "lucide-react";

const SOCIAL_LINKS = [
    {
        Icon: FiInstagram,
        href: "https://www.instagram.com/",
    },
    {
        Icon: FiYoutube,
        href: "https://youtube.com/",
    },
    {
        Icon: FiLinkedin,
        href: "https://www.linkedin.com/",
    },
    {
        Icon: FiGithub,
        href: "https://github.com/",
    },
];

const EXPLORE_LINKS = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/items" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms-and-conditions" },
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-green-900/40 bg-[#052e23] pb-8 pt-16 text-white md:pt-20">

            {/* Small top accent */}
            <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-green-400/40 via-transparent to-transparent" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">

                {/* =================================================
                    MAIN FOOTER
                ================================================== */}

                <div className="mb-14 grid grid-cols-1 gap-y-12 gap-x-10 sm:grid-cols-2 lg:grid-cols-12">


                    {/* =================================================
                        BRAND
                    ================================================== */}

                    <div className="space-y-7 text-left lg:col-span-4">

                        <div>

                            <div className="flex items-center gap-4">

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black/20 text-[#052e23] shadow-sm">
                                    <img src="/image/logo.png" alt="" />
                                </div>

                                <div>

                                    <h2 className="text-2xl font-black tracking-tight text-white">
                                        E-Code
                                        <span className="text-green-400">
                                            {" "}Solutions
                                        </span>
                                    </h2>

                                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.25em] text-green-200/50">
                                        E-Waste Management
                                    </p>

                                </div>

                            </div>


                            <p className="mt-6 max-w-sm text-sm font-medium leading-7 text-green-100/55">
                                A platform that helps people and companies
                                manage electronic waste through responsible
                                reuse, resale, and recycling.
                            </p>

                        </div>


                        {/* Developer */}

                        <div className="inline-flex items-center gap-3 border border-green-900/60 bg-white/[0.03] px-5 py-3">

                            <Code2
                                size={18}
                                className="text-green-400"
                            />

                            <div>

                                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-green-100/35">
                                    Developed By
                                </p>

                                <p className="text-sm font-bold text-green-100/75">
                                    Aditya Waghmare
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* =================================================
                        EXPLORE
                    ================================================== */}

                    <div className="text-left lg:col-span-2">

                        <h3 className="mb-7 text-[11px] font-black uppercase tracking-[0.3em] text-green-400">
                            Explore
                        </h3>

                        <ul className="space-y-4 text-sm font-semibold">

                            {EXPLORE_LINKS.map((item) => (
                                <li key={item.name}>

                                    <Link
                                        to={item.path}
                                        className="inline-block text-green-100/50 transition-all duration-200 hover:translate-x-1 hover:text-white"
                                    >
                                        {item.name}
                                    </Link>

                                </li>
                            ))}

                        </ul>

                    </div>


                    {/* =================================================
                        CONTACT
                    ================================================== */}

                    <div className="text-left lg:col-span-3">

                        <h3 className="mb-7 text-[11px] font-black uppercase tracking-[0.3em] text-green-400">
                            Contact
                        </h3>

                        <ul className="space-y-5 text-sm font-semibold">


                            <li className="flex items-start gap-4 text-green-100/50">

                                <MapPin
                                    size={19}
                                    className="mt-0.5 shrink-0 text-green-400/70"
                                />

                                <span className="leading-6">
                                    Maharashtra,
                                    <br />
                                    India
                                </span>

                            </li>


                            <li>

                                <a
                                    href="tel:+919673298788"
                                    className="flex items-center gap-4 text-green-100/50 transition hover:text-white"
                                >

                                    <Phone
                                        size={18}
                                        className="shrink-0 text-green-400/70"
                                    />

                                    <span>
                                        +91 96732 98788
                                    </span>

                                </a>

                            </li>


                            <li>

                                <a
                                    href="mailto:adityawaghmare9990@gmail.com"
                                    className="flex items-center gap-4 text-green-100/50 transition hover:text-white"
                                >

                                    <Mail
                                        size={18}
                                        className="shrink-0 text-green-400/70"
                                    />

                                    <span className="truncate">
                                        adityawaghmare9990@gmail.com
                                    </span>

                                </a>

                            </li>

                        </ul>

                    </div>


                    {/* =================================================
                        NEWSLETTER + SOCIAL
                    ================================================== */}

                    <div className="space-y-8 text-left lg:col-span-3">

                        <div>

                            <h3 className="mb-6 text-[11px] font-black uppercase tracking-[0.3em] text-green-400">
                                Stay Updated
                            </h3>

                            <div className="flex border border-green-900/60 bg-white/[0.04] p-1.5 transition focus-within:border-green-500/50">

                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full bg-transparent px-4 py-2 text-sm text-white outline-none placeholder:text-green-100/25"
                                />

                                <button
                                    type="button"
                                    className="flex shrink-0 items-center justify-center bg-green-500 px-3 transition hover:bg-green-400"
                                >
                                    <Send
                                        size={17}
                                        className="text-[#052e23]"
                                    />
                                </button>

                            </div>

                        </div>


                        {/* Social */}

                        <div>

                            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-green-100/35">
                                Follow Us
                            </p>

                            <div className="flex items-center gap-5">

                                {SOCIAL_LINKS.map(
                                    ({ Icon, href }, index) => (
                                        <a
                                            key={index}
                                            href={href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-green-100/40 transition duration-200 hover:-translate-y-1 hover:text-green-400"
                                        >
                                            <Icon size={21} />
                                        </a>
                                    )
                                )}

                            </div>

                        </div>

                    </div>

                </div>


                {/* =================================================
                    BOTTOM
                ================================================== */}

                <div className="flex flex-col gap-5 border-t border-green-900/50 pt-7 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex items-center gap-3">

                        <Leaf
                            size={16}
                            className="shrink-0 text-green-400"
                        />

                        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-green-100/35">
                            © {new Date().getFullYear()} E-Code Solutions
                        </p>

                    </div>


                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-100/25">
                        Reuse • Restore • Recycle
                    </p>

                </div>

            </div>
        </footer>
    );
}