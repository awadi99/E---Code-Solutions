import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    ArrowRight,
    Eye,
    EyeOff,
    LockKeyhole,
    Mail,
    Recycle,
} from "lucide-react";

export function SignIn() {
    const navigate = useNavigate();

    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handValue = (event) => {
        const { name, value } = event.target;

        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const sendData = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(
                "http://localhost:5000/api/sign-in",
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
                localStorage.setItem(
                    "user",
                    JSON.stringify(result.data)
                );

                alert(result.msg);

                setData({
                    email: "",
                    password: "",
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
                    LEFT — SIGN IN
                ================================================== */}

                <motion.section
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45 }}
                    className="flex items-center px-6 py-12 sm:px-10 lg:px-16 xl:px-24"
                >

                    <div className="w-full max-w-md mx-auto">

                        {/* Logo / Brand */}

                        <Link
                            to="/"
                            className="inline-flex items-center gap-3"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#064e3b] text-green-300">
                                <Recycle size={19} />
                            </div>

                            <span className="text-sm font-black tracking-wide text-[#064e3b]">
                                E-Code Solutions
                            </span>
                        </Link>


                        {/* Heading */}

                        <div className="mt-14">

                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-green-600">
                                Welcome Back
                            </p>

                            <h1 className="mt-3 text-4xl font-black tracking-tight text-[#063b2d] sm:text-5xl">
                                Sign in to your
                                <span className="block text-green-600">
                                    account.
                                </span>
                            </h1>

                            <p className="mt-4 text-sm leading-7 text-gray-500">
                                Enter your email and password to continue
                                to E-Code Solutions.
                            </p>

                        </div>


                        {/* Form */}

                        <form
                            onSubmit={sendData}
                            className="mt-10 space-y-6"
                        >

                            {/* Email */}

                            <div>

                                <label className="mb-2 ml-1 block text-[11px] font-bold uppercase tracking-[0.18em] text-gray-500">
                                    Your email
                                </label>

                                <div className="relative">

                                    <Mail
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                    />

                                    <input
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        onChange={handValue}
                                        placeholder="name@mail.com"
                                        required
                                        className="w-full border border-gray-200 bg-white py-3.5 pl-11 pr-4 text-sm text-gray-900 outline-none transition duration-200 placeholder:text-gray-400 focus:border-green-600 focus:ring-4 focus:ring-green-600/10"
                                    />

                                </div>

                            </div>


                            {/* Password */}

                            <div>

                                <label className="mb-2 ml-1 block text-[11px] font-bold uppercase tracking-[0.18em] text-gray-500">
                                    Password
                                </label>

                                <div className="relative">

                                    <LockKeyhole
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                    />

                                    <input
                                        type={
                                            showPassword
                                                ? "text"
                                                : "password"
                                        }
                                        name="password"
                                        value={data.password}
                                        onChange={handValue}
                                        placeholder="Enter your password"
                                        required
                                        className="w-full border border-gray-200 bg-white py-3.5 pl-11 pr-12 text-sm text-gray-900 outline-none transition duration-200 placeholder:text-gray-400 focus:border-green-600 focus:ring-4 focus:ring-green-600/10"
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
                                            <EyeOff size={18} />
                                        ) : (
                                            <Eye size={18} />
                                        )}
                                    </button>

                                </div>

                            </div>


                            {/* Terms */}

                            <label className="flex cursor-pointer items-start gap-3 text-sm text-gray-500">

                                <input
                                    type="checkbox"
                                    required
                                    className="mt-0.5 h-4 w-4 accent-green-600"
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


                            {/* Submit */}

                            <motion.button
                                type="submit"
                                disabled={loading}
                                whileTap={{ scale: 0.98 }}
                                className="group flex w-full items-center justify-center gap-3 bg-[#064e3b] px-6 py-3.5 text-sm font-bold text-white transition duration-200 hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
                            >

                                {loading ? (
                                    <>
                                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                        Signing in...
                                    </>
                                ) : (
                                    <>
                                        Sign In

                                        <ArrowRight
                                            size={17}
                                            className="transition-transform group-hover:translate-x-1"
                                        />
                                    </>
                                )}

                            </motion.button>


                            {/* Register */}

                            <p className="text-center text-sm text-gray-500">

                                Not registered?

                                <Link
                                    to="/sign-up"
                                    className="ml-1 font-bold text-[#064e3b] transition hover:text-green-600"
                                >
                                    Create account
                                </Link>

                            </p>


                            {/* Back */}

                            <Link
                                to="/"
                                className="mx-auto flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-gray-400 transition hover:text-green-600"
                            >
                                <ArrowLeft size={14} />
                                Back to home
                            </Link>

                        </form>

                    </div>

                </motion.section>


                {/* =================================================
                    RIGHT — VIDEO
                ================================================== */}

                <motion.section
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.1,
                    }}
                    className="relative hidden overflow-hidden bg-[#063b2d] lg:block"
                >

                    <video
                        src="/image/hello animation.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 h-full w-full object-cover opacity-70"
                    />

                    <div className="absolute inset-0 bg-[#063b2d]/55" />

                    <div className="relative z-10 flex h-full flex-col justify-between p-12 xl:p-16">

                        {/* Top */}

                        <div className="flex items-center justify-between">

                            <span className="text-xs font-bold uppercase tracking-[0.25em] text-green-300">
                                E-Waste Management
                            </span>

                            <Recycle
                                size={22}
                                className="text-green-300"
                            />

                        </div>


                        {/* Bottom content */}

                        <div>

                            <div className="mb-6 h-px w-16 bg-green-400" />

                            <h2 className="max-w-lg text-4xl font-black leading-tight text-white xl:text-5xl">
                                Give old electronics
                                <span className="block text-green-300">
                                    a new purpose.
                                </span>
                            </h2>

                            <p className="mt-5 max-w-md text-sm leading-7 text-green-50/65">
                                Connect with responsible recycling,
                                reuse, and e-waste management through
                                E-Code Solutions.
                            </p>

                        </div>

                    </div>

                </motion.section>

            </div>

        </main>
    );
}

export default SignIn;