import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export function Invoice() {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product;
  const [user, setUser] = useState(null);
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      navigate("/sign-in");
      return;
    }
    setUser(storedUser);

    const fetchCreator = async () => {
      if (product?.createdBy) {
        try {
          const response = await fetch(`${API_URL}/api/user/${product.createdBy}`);
          if (!response.ok) {
            throw new Error("Failed to fetch creator");
          }
          const data = await response.json();
          setCreator(data);
        } catch (error) {
          console.error("Error fetching creator:", error);
        }
      }
    };

    fetchCreator();
  }, [navigate, product]);

  return (
    <>
      {/* Your JSX code remains the same */}
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/nature2.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center brightness-100 contrast-200" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black animate-bounce"
              >
                Order Invoice
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Thank you for supporting us. We are shipping your product.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto mt-40">
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-28">
            {/* Product Card */}
            <div className="flex justify-center">
              <Card className="shadow-lg border shadow-gray-500/90 rounded-lg w-full max-w-md">
                <CardHeader className="relative h-56">
                  <img
                    alt={product?.title || "Product"}
                    src={product?.image || "/img/nature.jpg"}
                    className="h-full w-full object-cover"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {product?.title || "Product Title"}
                  </Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    ₹{product?.price || "0"}
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    🌱 <strong>Our Priority: Protecting the Environment</strong>
                    <br />
                    Thank you for purchasing this product. Your support helps us
                    promote responsible e-waste management and a greener planet.
                  </Typography>
                </CardBody>
              </Card>
            </div>
            {/* User Info Card */}
            {user && (
              <div className="flex justify-center mt-10">
                <Card className="shadow-lg border shadow-gray-500/90 rounded-lg w-full max-w-md">
                  <CardHeader className="bg-green-500 text-white text-center py-4">
                    <Typography variant="h6" color="white">
                      Buyer Information
                    </Typography>
                  </CardHeader>
                  <CardBody>
                    <Typography variant="paragraph" className="mb-2">
                      <strong>Name:</strong> {user.name || "N/A"}
                    </Typography>
                    <Typography variant="paragraph" className="mb-2">
                      <strong>Email:</strong> {user.email || "N/A"}
                    </Typography>
                    <Typography variant="paragraph" className="mb-2">
                      <strong>User ID:</strong> {user._id}
                    </Typography>
                    {creator && (
                      <div className="flex justify-center mt-20">
                        <Card className="rounded-lg w-full max-w-md">
                          <CardHeader className="bg-indigo-500 text-white text-center py-4">
                            <Typography variant="h6" color="white">
                              Product Creator (Seller) Info
                            </Typography>
                          </CardHeader>
                          <CardBody>
                            <Typography variant="paragraph" className="mb-2">
                              <strong>Name:</strong> {creator.name || "N/A"}
                            </Typography>
                            <Typography variant="paragraph" className="mb-2">
                              <strong>Email:</strong> {creator.email || "N/A"}
                            </Typography>
                            <Typography variant="paragraph" className="mb-2">
                              <strong>User ID:</strong> {product?.createdBy}
                            </Typography>
                          </CardBody>
                        </Card>
                      </div>
                    )}
                  </CardBody>
                </Card>
              </div>
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

export default Invoice;
