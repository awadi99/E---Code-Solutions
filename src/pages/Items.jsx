import React, { useEffect, useState } from "react";
import { Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { FeatureCard } from "@/widgets/cards";
import { featuresData } from "@/data";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slice";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export function Items() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [sellers, setSellers] = useState({});

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (!loggedUser) {
      navigate("/sign-in");
      return;
    }

    if (loggedUser.role === "User") {
      navigate("/"); // redirect to home or another page
      return;
    }

    setUser(loggedUser);
  }, [navigate]);

  useEffect(() => {
    const fetchUserProducts = async () => {
      try {
        const res = await fetch(`${API_URL}/api/items`);
        const products = await res.json();
        setProducts(products);

        products.forEach(async (product) => {
          const sellerRes = await fetch(`${API_URL}/api/user/${product.createdBy}`);
          const sellerData = await sellerRes.json();
          setSellers((prev) => ({
            ...prev,
            [product.createdBy]: sellerData,
          }));
        });
      } catch (err) {
        console.error("Error fetching products or sellers:", err);
      }
    };

    fetchUserProducts();
  }, []);

  const handleAddToCart = (product) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user._id) return alert("You must be logged in");

    const allCarts = JSON.parse(localStorage.getItem("allCarts")) || {};
    const userCart = allCarts[user._id] || [];

    const alreadyAdded = userCart.find((item) => item._id === product._id);
    if (alreadyAdded) {
      return alert("Product already in cart");
    }

    userCart.push(product);
    allCarts[user._id] = userCart;

    localStorage.setItem("allCarts", JSON.stringify(allCarts));
    alert("Product added to cart!");
  };

  if (!user) return null;

  const dispatch = useDispatch();

  return (
    <>
      {/* Header Section */}
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/nature2.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography variant="h1" color="white" className="mb-6 font-black">
                Products
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Our platform helps you sell or donate old electronic items so
                they can be reused, restored, or recycled safely. Instead of
                letting gadgets go to waste, you can turn them into something
                valuable again.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          {/* Static Features */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, { className: "w-5 h-5 text-white" })}
                description={<li className="space-y-2 text-left">{description}</li>}
              />
            ))}
          </div>

          {/* User's Products */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-32">
            {products.length > 0 ? (
           products.map(({ _id, title, image, rating, price, condition, createdBy }) => (
    <div key={_id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <img className="p-8 rounded-t-lg" src={image || "/img/default.png"} alt={title} />
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          Condition: <span className="font-medium text-gray-900 dark:text-white">{condition}</span>
        </p>

        {/* Add creator info here */}
        {createdBy && sellers[createdBy] && (
          <p className="text-xs text-gray-700">
            Seller : {sellers[createdBy].name} 
            <br />
            <br />
            Email : {sellers[createdBy].email}
          </p>
        )}

        <div className="flex items-center mt-2.5 mb-5">
          {/* rating stars as you have */}
          {/* ... */}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">₹{price}</span>
          <button
            onClick={() => {
              handleAddToCart({ _id, title, image, rating, price, condition,createdBy });
              dispatch(addItem(1));
            }}
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  ))
) : (
  <p className="text-center text-gray-500 col-span-3 mt-10">
    No products found. Add your items to see them here.
  </p>
)}
          </div>
        </div>
      </section>

      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Items;
