import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowLeft,
    ArrowRight,
    Building2,
    Eye,
    EyeOff,
    Leaf,
    Mail,
    Recycle,
    User,
    Users,
} from "lucide-react";

export function SignUp() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "User",
        companyName: "",
        agencyName: "",
        service: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(
                "http://localhost:5000/api/sign-up",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const result = await res.json();

            if (res.ok) {
                alert(result.msg);

                localStorage.setItem(
                    "user",
                    JSON.stringify(result.data)
                );

                setFormData({
                    name: "",
                    email: "",
                    password: "",
                    role: "User",
                    companyName: "",
                    agencyName: "",
                    service: "",
                });

                navigate("/home");
            } else {
                alert(result.msg);
            }
        } catch (err) {
            console.error(err);
            alert("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#f6faf5]">

            <div className="mx-auto grid min-h-screen max-w-7xl lg:grid-cols-2">

                {/* =================================================
                    LEFT — VIDEO
                ================================================== */}

                <motion.section
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative hidden overflow-hidden bg-[#063b2d] lg:block"
                >

                    <video
                        src="/image/hello animation.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 h-full w-full object-cover opacity-65"
                    />

                    <div className="absolute inset-0 bg-[#063b2d]/60" />

                    <div className="relative z-10 flex h-full flex-col justify-between p-12 xl:p-16">

                        {/* Brand */}

                        <div className="flex items-center gap-3">

                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-400 text-[#063b2d]">
                                <Recycle size={19} />
                            </div>

                            <div>
                                <p className="text-sm font-black text-white">
                                    E-Code Solutions
                                </p>

                                <p className="text-[10px] uppercase tracking-[0.2em] text-green-300/70">
                                    E-Waste Management
                                </p>
                            </div>

                        </div>


                        {/* Bottom */}

                        <div>

                            <Leaf
                                size={25}
                                className="mb-6 text-green-300"
                            />

                            <h2 className="max-w-lg text-4xl font-black leading-tight text-white xl:text-5xl">
                                Join the movement
                                <span className="block text-green-300">
                                    for a cleaner future.
                                </span>
                            </h2>

                            <p className="mt-5 max-w-md text-sm leading-7 text-green-50/60">
                                Create your account and become part of a
                                platform focused on responsible electronic
                                waste management.
                            </p>

                        </div>

                    </div>

                </motion.section>


                {/* =================================================
                    RIGHT — SIGN UP
                ================================================== */}

                <motion.section
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.45,
                        delay: 0.1,
                    }}
                    className="flex items-center px-6 py-12 sm:px-10 lg:px-14 xl:px-20"
                >

                    <div className="mx-auto w-full max-w-lg">

                        {/* Brand mobile */}

                        <Link
                            to="/"
                            className="inline-flex items-center gap-3 lg:hidden"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#064e3b] text-green-300">
                                <Recycle size={19} />
                            </div>

                            <span className="text-sm font-black text-[#064e3b]">
                                E-Code Solutions
                            </span>
                        </Link>


                        {/* Heading */}

                        <div className="mt-10 lg:mt-0">

                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-green-600">
                                Get Started
                            </p>

                            <h1 className="mt-3 text-4xl font-black tracking-tight text-[#063b2d] sm:text-5xl">
                                Create your
                                <span className="block text-green-600">
                                    account.
                                </span>
                            </h1>

                            <p className="mt-4 text-sm leading-7 text-gray-500">
                                Fill out your details to become a part of
                                our community.
                            </p>

                        </div>


                        {/* Form */}

                        <form
                            onSubmit={handleSubmit}
                            className="mt-9 space-y-5"
                        >

                            {/* Name */}

                            <div>

                                <label className="mb-2 ml-1 block text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                                    Full Name
                                </label>

                                <div className="relative">

                                    <User
                                        size={17}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                    />

                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Aditya"
                                        required
                                        className="w-full border border-gray-200 bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-green-600 focus:ring-4 focus:ring-green-600/10"
                                    />

                                </div>

                            </div>


                            {/* Email */}

                            <div>

                                <label className="mb-2 ml-1 block text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                                    Email Address
                                </label>

                                <div className="relative">

                                    <Mail
                                        size={17}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                    />

                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="name@mail.com"
                                        required
                                        className="w-full border border-gray-200 bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-green-600 focus:ring-4 focus:ring-green-600/10"
                                    />

                                </div>

                            </div>


                            {/* Password */}

                            <div>

                                <label className="mb-2 ml-1 block text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                                    Password
                                </label>

                                <div className="relative">

                                    <input
                                        type={
                                            showPassword
                                                ? "text"
                                                : "password"
                                        }
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Create a password"
                                        required
                                        className="w-full border border-gray-200 bg-white py-3.5 pl-4 pr-12 text-sm outline-none transition focus:border-green-600 focus:ring-4 focus:ring-green-600/10"
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(
                                                !showPassword
                                            )
                                        }
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-green-600"
                                    >
                                        {showPassword ? (
                                            <EyeOff size={17} />
                                        ) : (
                                            <Eye size={17} />
                                        )}
                                    </button>

                                </div>

                            </div>


                            {/* Role */}

                            <div>

                                <label className="mb-3 ml-1 block text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                                    Select Account Type
                                </label>

                                <div className="grid grid-cols-3 gap-2">

                                    {[
                                        {
                                            value: "User",
                                            icon: User,
                                        },
                                        {
                                            value: "Customer",
                                            icon: Users,
                                        },
                                        {
                                            value: "Company",
                                            icon: Building2,
                                        },
                                    ].map((item) => {

                                        const Icon = item.icon;
                                        const active =
                                            formData.role ===
                                            item.value;

                                        return (
                                            <label
                                                key={item.value}
                                                className={`cursor-pointer border p-3 transition duration-200 ${
                                                    active
                                                        ? "border-green-600 bg-green-50 text-green-700"
                                                        : "border-gray-200 bg-white text-gray-500 hover:border-green-300"
                                                }`}
                                            >

                                                <input
                                                    type="radio"
                                                    name="role"
                                                    value={item.value}
                                                    checked={active}
                                                    onChange={
                                                        handleChange
                                                    }
                                                    className="sr-only"
                                                />

                                                <div className="flex flex-col items-center gap-2">

                                                    <Icon size={18} />

                                                    <span className="text-xs font-bold">
                                                        {item.value}
                                                    </span>

                                                </div>

                                            </label>
                                        );
                                    })}

                                </div>

                            </div>


                            {/* Conditional fields */}

                            <AnimatePresence mode="wait">

                                {formData.role === "Company" && (
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            height: 0,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            height: "auto",
                                        }}
                                        exit={{
                                            opacity: 0,
                                            height: 0,
                                        }}
                                        className="space-y-4 overflow-hidden"
                                    >

                                        <input
                                            name="companyName"
                                            value={
                                                formData.companyName
                                            }
                                            onChange={handleChange}
                                            placeholder="Company name"
                                            required
                                            className="w-full border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-green-600 focus:ring-4 focus:ring-green-600/10"
                                        />

                                        <input
                                            name="agencyName"
                                            value={
                                                formData.agencyName
                                            }
                                            onChange={handleChange}
                                            placeholder="Agency name"
                                            className="w-full border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-green-600 focus:ring-4 focus:ring-green-600/10"
                                        />

                                        <input
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            placeholder="What services do you provide?"
                                            required
                                            className="w-full border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-green-600 focus:ring-4 focus:ring-green-600/10"
                                        />

                                    </motion.div>
                                )}


                                {formData.role === "Customer" && (
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            height: 0,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            height: "auto",
                                        }}
                                        exit={{
                                            opacity: 0,
                                            height: 0,
                                        }}
                                        className="overflow-hidden"
                                    >

                                        <input
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            placeholder="Describe your needs"
                                            required
                                            className="w-full border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-green-600 focus:ring-4 focus:ring-green-600/10"
                                        />

                                    </motion.div>
                                )}

                            </AnimatePresence>


                            {/* Terms */}

                            <label className="flex cursor-pointer items-start gap-3 text-sm text-gray-500">

                                <input
                                    type="checkbox"
                                    required
                                    className="mt-1 h-4 w-4 accent-green-600"
                                />

                                <span className="leading-6">
                                    I agree to the{" "}
                                    <a
                                        href="#"
                                        className="font-semibold text-[#064e3b] underline underline-offset-2"
                                    >
                                        Terms and Conditions
                                    </a>
                                </span>

                            </label>


                            {/* Register */}

                            <motion.button
                                type="submit"
                                disabled={loading}
                                whileTap={{ scale: 0.98 }}
                                className="group flex w-full items-center justify-center gap-3 bg-[#064e3b] px-6 py-3.5 text-sm font-bold text-white transition duration-200 hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
                            >

                                {loading ? (
                                    <>
                                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                        Creating account...
                                    </>
                                ) : (
                                    <>
                                        Register Now

                                        <ArrowRight
                                            size={17}
                                            className="transition-transform group-hover:translate-x-1"
                                        />
                                    </>
                                )}

                            </motion.button>


                            {/* Sign in */}

                            <p className="text-center text-sm text-gray-500">

                                Already have an account?

                                <Link
                                    to="/sign-in"
                                    className="ml-1 font-bold text-[#064e3b] transition hover:text-green-600"
                                >
                                    Sign in
                                </Link>

                            </p>


                            {/* Back */}

                            <Link
                                to="/home"
                                className="mx-auto flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-gray-400 transition hover:text-green-600"
                            >
                                <ArrowLeft size={14} />
                                Back to home
                            </Link>

                        </form>

                    </div>

                </motion.section>

            </div>

        </main>
    );
}

export default SignUp;