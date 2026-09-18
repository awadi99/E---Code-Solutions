import { Home, Profile, SignIn, SignUp, Docs,Items,AddProducts,Store } from "@/pages";
import Invoice from "./pages/Invoice";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "profile",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "Sign Up",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    name: "Docs",
    path:"/docs",
    element: <Docs/>
  },
  {
    name: "Products",
    path:"/items",
    element: <Items/>
  },

   {
    name: "Add New Products",
    path:"/addproducts",
    element: <AddProducts/>
  },

    {
    name: "Store",
    path:"/store",
    element: <Store/>
  },

    {
    name: "Invoice",
    path:"/invoice",
    element: <Invoice/>
  },
];

export default routes;
