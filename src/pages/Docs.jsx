import React from "react";
import { useState } from "react";
import {
    Typography,
    Button,
    Input,
    Textarea,
    Checkbox,
} from "@material-tailwind/react";
import { PageTitle, Footer } from "@/widgets/layout";

export function Docs() {

    const [data, setData] = useState({
        name: "",
        email: "",
        idea: ""
    });

    const handlingValue = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    }

    const SendValue = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:5000/api/docs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await res.json();
            if (res.ok) {
                alert(result.msg);
                setData({ name: "", email: "", idea: "" });
            }
            else {
                alert(result.msg);

            }
        }catch(err)
        {
            console.log(err);
            alert("something went worng");
        }
    }



    return (
        <>
            {/* Hero Section */}
            <div className="relative flex h-screen items-center justify-center pt-16 pb-32">
                <div className="absolute top-0 h-full w-full bg-[url('/img/nature2.jpg')] bg-cover bg-center" />
                <div className="absolute top-0 h-full w-full bg-black/60" />
                <div className="max-w-7xl container relative mx-auto text-center px-4">
                    <Typography
                        variant="h1"
                        color="white"
                        className="mb-6 font-black animate-bounce"
                    >
                        Welcome to E-Waste Management
                    </Typography>
                    <Typography variant="lead" color="white" className="opacity-80 max-w-3xl mx-auto">
                        Our platform reduces electronic waste by connecting users,
                        customers, and companies. Users can sell old electronics,
                        and companies can buy, reuse, or recycle them safely,
                        promoting a cleaner, greener future.
                    </Typography>
                </div>
            </div>

            <br />
            <br />

            <br />
            <br /><br />
            <br />
            {/* Why It Matters */}
            <section className="-mt-32 bg-white px-4 py-20">
                <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
                    {/* Left Column: Text */}
                    <div className="w-full md:w-6/12">
                        <Typography
                            variant="h3"
                            className="mb-4 font-bold "
                            color="blue-gray"
                        >
                            Why E-Waste Management Is Important
                        </Typography>
                        <Typography className="mb-6 font-normal text-blue-gray-500">
                            🌍 In today’s world, we use many electronic devices every day.
                            As new technology emerges, old gadgets are often thrown away,
                            creating a lot of e-waste that harms the environment. Our system
                            allows users to sell old items and lets companies buy, reuse,
                            or recycle them safely. It reduces pollution and makes waste
                            management eco-friendly and efficient.
                        </Typography>
                    </div>

                    {/* Right Column: Image */}
                    <div className="w-full md:w-6/12 flex justify-center">
                        <video
                            src="/img/video.mp4"
                            controls
                            className="rounded-lg shadow-lg w-full max-w-md"
                            autoPlay
                            // loop
                            muted
                        />
                    </div>
                </div>
            </section>


            {/* Key Features and Workflow */}
            <section className="bg-gray-50 px-4 py-16">
                <div className="container mx-auto flex flex-col md:flex-row gap-6">
                    {/* Left Column */}
                    <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow space-y-4">
                        <Typography variant="h4" className="font-bold">
                            Key Features
                        </Typography>
                        <ul className="list-disc ml-5 space-y-2 text-blue-gray-600">
                            <li>Accepts any type of electronic device (old, damaged, unused).</li>
                            <li>Users can sell e-waste directly to companies or recyclers.</li>
                            <li>Companies can register to buy or recycle e-waste.</li>
                            <li>Customers can track status of submitted e-waste.</li>
                            <li>Ensures proper disposal to reduce environmental hazards.</li>
                        </ul>

                        <Typography variant="h4" className="font-bold mt-6">
                            Workflow
                        </Typography>
                        <ol className="list-decimal ml-5 space-y-2 text-blue-gray-600">
                            <li>User submits electronic device details (type, condition, quantity).</li>
                            <li>System lists e-waste to verified companies.</li>
                            <li>Companies bid, purchase, or schedule pickup.</li>
                            <li>Payment or recycling confirmation is sent to the user.</li>
                            <li>E-waste is safely processed or refurbished.</li>
                        </ol>
                    </div>

                    {/* Right Column */}
                    <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow space-y-4">
                        <Typography variant="h4" className="font-bold">
                            User Roles
                        </Typography>
                        <ul className="list-disc ml-5 space-y-2 text-blue-gray-600">
                            <li>
                                <strong>User / Customer:</strong> Register/login, submit e-waste, track status, receive notifications.
                            </li>
                            <li>
                                <strong>Companies / Recyclers:</strong> Register, browse e-waste, purchase or schedule pickup, manage inventory.
                            </li>
                        </ul>

                        <Typography variant="h4" className="font-bold mt-6">
                            Benefits & Key Points
                        </Typography>
                        <ul className="list-disc ml-5 space-y-2 text-blue-gray-600">
                            <li>Reduces environmental pollution by properly recycling e-waste.</li>
                            <li>Easy way for users to sell or dispose of electronics.</li>
                            <li>Supports companies in acquiring reusable components.</li>
                            <li>Encourages sustainable practices and responsible disposal.</li>
                            <li>Secure, verified, and transparent transactions between users and companies.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="bg-white px-4 py-24">
                <div className="container mx-auto">
                    <PageTitle
                        section="Share Your Ideas"
                        heading="Want to Collaborate with Us?"
                    >
                        We value your creativity! If you have a great idea or suggestion, please share it with us and help us make our project even better.
                    </PageTitle>

                    <form className="mx-auto w-full mt-12 lg:w-5/12 space-y-6" onSubmit={SendValue}>
                        <div className="flex flex-col md:flex-row gap-4">
                            <Input variant="outlined" size="lg" label="Full Name" value={data.name} name="name" onChange={handlingValue} />
                            <Input variant="outlined" size="lg" label="Email Address" value={data.email} name="email" onChange={handlingValue} />
                        </div>
                        <Textarea variant="outlined" size="lg" label="Write your idea here" rows={6} value={data.idea} name="idea" onChange={handlingValue} />
                        <Checkbox
                            label={
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className="flex items-center font-normal"
                                >
                                    I agree to the
                                    <a
                                        href="#"
                                        className="font-medium transition-colors hover:text-gray-900"
                                    >
                                        &nbsp;Terms and Conditions
                                    </a>
                                </Typography>
                            }
                            containerProps={{ className: "-ml-2.5" }}
                        />
                        <Button type="submit" variant="gradient" size="lg" fullWidth>
                            Send Your Idea
                        </Button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <div className="bg-white">
                <Footer />
            </div>
        </>
    );
}

export default Docs;
