import {
  Input,
  Checkbox,
  Button,
  Typography,
  Radio,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const res = await fetch(`${API_URL}/api/sign-up`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});


      const result = await res.json();

      if (res.ok) {
        alert(result.msg);

        // Save user to localStorage
        localStorage.setItem("user", JSON.stringify(result.data));

        setFormData({
          name: "",
          email: "",
          password: "",
          role: "User",
          companyName: "",
          agencyName: "",
          service: "",
        });

        // Redirect to home
        navigate("/home");
      } else {
        alert(result.msg);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <section className="m-8 flex">
      {/* Left image */}
      <div className=" mt-20 ml-10 w-2/5 h-full hidden lg:block">
      <br />
      <br />
        <video
          src="/img/hello animation.mp4"
          controls
          className="h-full w-full object-cover rounded-3xl"
          autoPlay
          loop
          muted
        />
      </div>

      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">
            Join Us Today
          </Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">
            Fill out your details to become a part of our community.
          </Typography>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            {/* Name */}
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">Full Name</Typography>
            <Input name="name" value={formData.name} onChange={handleChange} size="lg" placeholder="Aditya" />

            {/* Email */}
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">Email Address</Typography>
            <Input name="email" value={formData.email} onChange={handleChange} size="lg" placeholder="name@mail.com" />

            {/* Password */}
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">Password</Typography>
            <Input name="password" value={formData.password} onChange={handleChange} type="password" size="lg" placeholder="********" />

            {/* Role */}
            <div className="flex items-center gap-6 mt-2">
              <Radio name="role" value="User" checked={formData.role === "User"} onChange={handleChange} label="User" />
              <Radio name="role" value="Customer" checked={formData.role === "Customer"} onChange={handleChange} label="Customer" />
              <Radio name="role" value="Company" checked={formData.role === "Company"} onChange={handleChange} label="Company" />
            </div>

            {/* Conditional fields */}
            {formData.role === "Company" && (
              <div className="flex flex-col gap-4 mt-4">
                <Input name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Your company name" />
                <Input name="agencyName" value={formData.agencyName} onChange={handleChange} placeholder="Your agency name" />
                <Input name="service" value={formData.service} onChange={handleChange} placeholder="What services do you provide?" />
              </div>
            )}

            {formData.role === "Customer" && (
              <div className="flex flex-col gap-4 mt-4">
                <Input name="service" value={formData.service} onChange={handleChange} placeholder="Describe your needs" />
              </div>
            )}
          </div>

          <Checkbox label="I agree to the Terms and Conditions" />

          <Button className="mt-6 animate-bounce" fullWidth type="submit">Register Now</Button>

          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
            Already have an account? <Link to="/sign-in" className="text-gray-900 ml-1">Sign in</Link>
          </Typography>


            <Link to="/home" className="text-gray-900 ml-1">
          <Button className="mt-6"fullWidth >
            back
          </Button>
          </Link>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
