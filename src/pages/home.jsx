import React from "react";
import { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
  textarea,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import { Link } from "react-router-dom";


export function Home() {


  // form data post

  const [data, setData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handlingValue = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  }

 const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const sendValue = async (e) => {
  e.preventDefault();

  const { name, email, message } = data;
  if (!name || !email || !message) {
    return alert("Please fill in all the fields.");
  }

  setLoading(true); // Start loading
  try {
    const res = await fetch(`${API_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    if (res.ok) {
      alert(result.msg || "Message sent successfully!");
      setData({ name: "", email: "", message: "" });
    } else {
      alert(result.msg || "Failed to send message.");
    }
  } catch (err) {
    console.error(err);
    alert("Something went wrong.");
  } finally {
    setLoading(false); // End loading
  }
};
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/nature2.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center " />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black animate-bounce"
              >
                Start your story with us.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                This project aims to reduce electronic waste by creating a platform where users can sell old electronic items and companies can buy, reuse, or recycle them. It helps protect the environment, save valuable materials, and promote a cleaner and greener future.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className=" container mx-auto ">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg ">
                <FingerPrintIcon className="h-8 w-8 text-green-500" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Why E-Waste Management Is Important
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                🌍 E-Waste Management System

                In today’s world, we use many electronic devices every day. As new technology comes, old gadgets are often thrown away, which creates a lot of e-waste and harms the environment.

                Our E-Waste Management System helps solve this problem by letting users sell old items and allowing companies to buy, reuse, or recycle them safely. It helps reduce pollution and makes waste management easy and eco-friendly.
              </Typography>
              <Link to="/docs" className="text-grey-900 ml-1">
              <Button variant="filled" className="mt-6  animate-bounce">read more</Button>
              </Link>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/90 rounded-lg">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/nature.jpg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="small" color="blue-gray" className="font-normal">Protectors</Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold "
                  >
                    Top Notch Services
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    🌱 <strong>Our Priority: Protecting the Environment</strong><br />
                    The main goal of our E-Waste Management System is to tackle environmental problems caused by discarded electronic devices. By managing e-waste responsibly, we can reduce pollution, prevent harmful chemicals from entering soil and water, and conserve natural resources.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <PageTitle section="How It Works" heading="Our E-Waste Management System makes it easy for everyone to help the environment">
            Our system allows users to safely dispose of old electronic devices. Customers bring e-waste to our company, where it is sorted, repaired if possible, recycled, or properly disposed of. This process prevents pollution, conserves resources, and rewards users for helping protect the environment responsibly.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description, color }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900 hover:animate-bounce"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20 ">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-green-500",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle section="Contact Us" heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto w-full mt-12 lg:w-5/12 " onSubmit={sendValue}>
            <div className="mb-8 flex gap-8">
              <Input variant="outlined" size="lg" type="text" value={data.name} name="name" label="Full Name" onChange={handlingValue} />
              <Input variant="outlined" size="lg" type="email" value={data.email} name="email" label="Email Address" onChange={handlingValue} />
            </div>
            <Textarea variant="outlined" size="lg" label="Message" value={data.message} name="message" rows={8} onChange={handlingValue} />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
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
            <Button type="submit" variant="gradient" size="lg" className="mt-8" fullWidth >
              Send Message
            </Button>
          </form>
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
