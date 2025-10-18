import { Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function SignIn() {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });

  const handValue = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  }

  const sendData = async (e) => {
    e.preventDefault();
    try {
const res = await fetch(`${import.meta.env.VITE_API_URL}/api/sign-in`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
});


      const result = await res.json();
      if (res.ok) {
        // Save user info to localStorage
        localStorage.setItem("user", JSON.stringify(result.data));
        alert(result.msg);
        setData({ email: "", password: "" });
        navigate("/home"); // redirect to home page
      } else {
        alert(result.msg);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <section className="m-8 flex gap-4">
      <div className="w-full lg:w-3/5 mt-24">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Sign In</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">
            Enter your email and password to Sign In.
          </Typography>
        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2" onSubmit={sendData}>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">Your email</Typography>
            <Input
              size="lg"
              value={data.email}
              name="email"
              onChange={handValue}
              placeholder="name@mail.com"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{ className: "before:content-none after:content-none" }}
            />
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">Password</Typography>
            <Input
              type="password"
              value={data.password}
              name="password"
              onChange={handValue}
              size="lg"
              placeholder="********"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{ className: "before:content-none after:content-none" }}
            />
          </div>
          <Checkbox
            label={
              <Typography variant="small" color="gray" className="flex items-center justify-start font-medium">
                I agree the&nbsp;
                <a href="#" className="font-normal text-black transition-colors hover:text-gray-900 underline">Terms and Conditions</a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6 animate-bounce" fullWidth type="submit">Sign In</Button>
          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
            Not registered?
            <Link to="/sign-up" className="text-gray-900 ml-1">Create account</Link>
          </Typography>

          <Link to="/" className="text-gray-900 ml-1">
          <Button className="mt-6"fullWidth >
            back
          </Button>
          </Link>

        </form>
      </div>
      <div className="mt-20 mr-10 w-2/5 h-full hidden lg:block ">
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
    </section>
  );
}

export default SignIn;
