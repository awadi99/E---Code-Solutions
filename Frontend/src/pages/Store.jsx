import React, { useEffect, useState } from "react";
import { Typography, Button } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { useDispatch } from "react-redux";
import { removeItem } from "../redux/slice";
import { useNavigate } from "react-router-dom";

export function Store() {
  const navigate = useNavigate();
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user._id) {
      const allCarts = JSON.parse(localStorage.getItem("allCarts")) || {};
      const userCart = allCarts[user._id] || [];
      setCartProducts(userCart);
    }
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/sign-in");
      return;
    }
  }, []);

  const handleDelete = (productId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user._id) return;

    const allCarts = JSON.parse(localStorage.getItem("allCarts")) || {};
    const userCart = allCarts[user._id] || [];

    const updatedCart = userCart.filter((p) => p._id !== productId);
    allCarts[user._id] = updatedCart;

    localStorage.setItem("allCarts", JSON.stringify(allCarts));
    setCartProducts(updatedCart);
  };

  const handleBuy = (product) => {
    navigate("/invoice", { state: { product } });
  };

  const dispatch = useDispatch();

  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/nature2.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography variant="h1" color="white" className="mb-6 font-black animate-bounce">
                Store
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Thank You for supporting us
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {cartProducts.length > 0 ? (
        <section className="bg-white px-4 pb-20 pt-4 m-auto">
          <div className="ml-48 container mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-40">
            {cartProducts.map((product) => (
              <div
                key={product._id}
                className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
              >
                <img
                  className="p-8 rounded-t-lg h-40 w-full object-cover"
                  src={product.image}
                  alt={product.title}
                />
                <div className="px-5 pb-5">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {product.title}
                  </h5>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Condition:{" "}
                    <span className="font-medium text-gray-900 dark:text-white">{product.condition}</span>
                  </p>
                  <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < product.rating ? "text-yellow-300" : "text-gray-200 dark:text-gray-600"
                          }`}
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      ))}
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">₹{product.price}</span>
                  <div className="mt-4 flex gap-3">
                    <Button
                      color="red"
                      size="sm"
                      onClick={() => {
                        handleDelete(product._id);
                        dispatch(removeItem(1));
                      }}
                    >
                      Delete
                    </Button>
                    <Button
                      color="green"
                      size="sm"
                      onClick={() => handleBuy(product)}
                    >
                      Buy
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <p className="text-center text-gray-500 mt-40">Your cart is empty</p>
      )}

      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Store;
