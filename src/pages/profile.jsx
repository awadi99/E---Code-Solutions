import { Avatar, Typography, Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";
import { Link } from "react-router-dom";

export function Profile() {
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>
      <section className="relative bg-white py-16">
        <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words bg-white">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="relative flex gap-6 items-start">
                <div className="-mt-20 w-40">
                  <Avatar
                    src="public\img\WhatsApp Image 2025-10-11 at 19.48.23_9b73135b.jpg"
                    alt="Profile picture"
                    variant="circular"
                    className="h-full w-full animate-bounce"
                  />
                </div>
                <div className="flex flex-col mt-2">
                  <Typography variant="h4" color="blue-gray">
                    Aditya Waghmare
                  </Typography>
                  <Typography variant="paragraph" color="gray" className="!mt-0 font-normal">adityawaghmare9990@gmail.com</Typography>
                </div>
              </div>

              <div className="mt-10 mb-10 flex lg:flex-col justify-between items-center lg:justify-end lg:mb-0 lg:px-4 flex-wrap lg:-mt-5">
              </div>
            </div>
            <br />
            <br />
            <div className="-mt-4 container space-y-2">
              <div className="flex items-center gap-2">
                <MapPinIcon className="-mt-px h-4 w-4 text-blue-gray-500" />
                <Typography className="font-medium text-blue-gray-500">
                  Baramati,Pune
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <BriefcaseIcon className="-mt-px h-4 w-4 text-blue-gray-500" />
                <Typography className="font-medium text-blue-gray-500">
                  Solution Manager, Founder
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <BuildingLibraryIcon className="-mt-px h-4 w-4 text-blue-gray-500" />
                <Typography className="font-medium text-blue-gray-500">
                  D.Y Patil University Pimpri,Pune
                </Typography>
              </div>
            </div>
            <div className="mb-10 py-6">
              <div className="flex w-full flex-col items-start lg:w-1/2">
                <Typography className="mb-6 font-normal text-blue-gray-500">
                  The intention behind this E-Waste Management project is to create a sustainable platform that allows users to safely dispose of or sell old and unused electronic devices. It aims to reduce environmental pollution, promote recycling, support companies in reusing electronics, and encourage responsible consumption and disposal habits.
                </Typography>
                <div className="flex w-full flex-row">
                <a href="https://www.linkedin.com/in/aditya-waghmare-95271b25a/" ><Button variant="text" fullWidth className=" mt-6 "> Show more</Button></a>
              <Link to="/home" className="text-gray-900 ml-10 ">
                <Button className="mt-6"fullWidth >
                  back
                </Button>
              </Link>
              </div>
              </div>
              </div>
          </div>
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>

    </>
  );
}

export default Profile;
