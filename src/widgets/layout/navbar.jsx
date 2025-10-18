import React from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";

export function Navbar({ brandName, routes, action }) {
  const [openNav, setOpenNav] = React.useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")); // get user info

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="ml-14 mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes
        .filter(({ name }) => {
          // hide Sign Up / Sign In
          if (name.toLowerCase() === "sign up" || name.toLowerCase() === "sign in") return false;

          // hide Items if logged-in user is not Customer/Company
          if (name.toLowerCase() === "products") {
            if (!user) return true; // show Items if not logged in
            return user.role === "Customer" || user.role === "Company";
          }

          if (name.toLowerCase() === "store") {
            if (!user) return true; // show Items if not logged in
            return user.role === "Customer" || user.role === "Company";
          }

          if (name.toLowerCase() === "invoice") {
            if (!user) return true; // show Items if not logged in
            return user.role === "Customer" || user.role === "Company";
          }

          if (name.toLowerCase() === "add new products") {
            if (!user) return true; // show Items if not logged in
            return user.role === "User";
          }
          return true;
        })
        .map(({ name, path, icon, href, target }) => (
          <Typography
            key={name}
            as="li"
            variant="small"
            color="inherit"
            className="capitalize"
          >
            {href ? (
              <a
                href={href}
                target={target}
                className="flex items-center gap-1 p-1 font-bold"
              >
                {icon &&
                  React.createElement(icon, {
                    className: "w-[18px] h-[18px] opacity-75 mr-1",
                  })}
                {name}
              </a>
            ) : (
              <Link
                to={path}
                target={target}
                className="flex items-center gap-1 p-1 font-bold"
              >
                {icon &&
                  React.createElement(icon, {
                    className: "w-[18px] h-[18px] opacity-75 mr-1",
                  })}
                {name}
              </Link>
            )}
          </Typography>
        ))}
    </ul>
  );

  const myselect = useSelector((state) => state.cart.value);

  return (
    <MTNavbar color="transparent" className="p-3">
      <div className="container mx-auto flex items-center justify-between text-white">
        <Link to="/">
          <Typography className="mr-4 ml-2 cursor-pointer py-1.5 font-bold">
            {brandName}
          </Typography>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <div className="hidden gap-2 lg:flex">
          {!user ? (
            <>
              <Link to="/sign-in">
                <Button variant="text" size="sm" color="white" fullWidth>
                  Sign In
                </Button>
              </Link>
              {React.cloneElement(action, { className: "hidden lg:inline-block" })}
            </>
          ) : (
            <>
              <Button
                className="text-white font-bold animate-pulse"
                size="sm"
                variant="text"
                color="white"
              >
                {user.name || user.email}
              </Button>
              <Button
                variant="text"
                size="sm"
                color="white"
                onClick={() => {
                  localStorage.removeItem("user");
                  navigate("/home"); // Redirect to home instead of reload
                }}
              >
                Logout
              </Button>
            </>
          )}
          {user && (user.role === "Customer" || user.role === "Company") && (
            <div className="hidden gap-2 lg:flex ml-10">
              <Link to="/store" className="flex items-center text-white relative">
                <ShoppingCartIcon className="h-6 w-6 mr-2 hover:text-gray-300" />
                <div className="absolute top-6 right-7 text-black bg-white size-4 rounded-full text-xs text-center">
                  {myselect}
                </div>
              </Link>
            </div>
          )}
        </div>
        <IconButton
          variant="text"
          size="sm"
          color="white"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>

      <MobileNav
        className="rounded-xl bg-white px-4 pt-2 pb-4 text-blue-gray-900"
        open={openNav}
      >
        <div className="container mx-auto">
          {navList}
          {!user ? (
            <>
              <Link to="/sign-in">
                <Button variant="text" size="sm" fullWidth>
                  Sign In
                </Button>
              </Link>
              {React.cloneElement(action, { className: "w-full block" })}
            </>
          ) : (
            <>
              <Typography className="text-black font-bold mb-2 ml-14">
                {user.name || user.email}
              </Typography>
              <Button
                variant="text"
                size="sm"
                fullWidth
                onClick={() => {
                  localStorage.removeItem("user");
                  navigate("/home"); // Redirect to home instead of reload
                }}
              >
                Logout
              </Button>
            </>
          )}
        </div>
      </MobileNav>
    </MTNavbar>
  );
}

Navbar.defaultProps = {
  brandName: "E - Code Solutions",
  action: (
    <Link to="/sign-up">
      <Button variant="gradient" size="sm" fullWidth>
        Sign up
      </Button>
    </Link>
  ),
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
