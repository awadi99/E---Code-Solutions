import React, { useState, useEffect } from "react";
import { Typography, Button, Input, Card } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { Footer } from "@/widgets/layout";

export function AddProducts() {
    const navigate = useNavigate();
    const [userRole, setUserRole] = useState("");
    const [products, setProducts] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newProduct, setNewProduct] = useState({
        title: "",
        price: "",
        rating: 0,
        condition: "",
        image: null, // store base64
    });

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user && user.role === "User") {
            setUserRole(user.role);
            fetchProducts();
        } else {
            navigate("/sign-in");
        }
    }, [navigate]);

    const user = JSON.parse(localStorage.getItem("user"));

    const fetchProducts = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/items");
            const data = await res.json();

            // get current user
            if (user) {
                // filter products created by current user
                const userProducts = data.filter(product => product.createdBy === user._id);
                setProducts(userProducts);
            }
        } catch (err) {
            console.error(err);
        }
    };


    if (!userRole) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setNewProduct({ ...newProduct, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddProduct = async (e) => {
        e.preventDefault();
        if (!newProduct.title || !newProduct.price || !newProduct.condition) return;

        try {
            const user = JSON.parse(localStorage.getItem("user"));
            const res = await fetch("http://localhost:5000/api/addproducts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...newProduct, userId: user._id }),
            });

            const data = await res.json();
            if (res.ok) {
                setProducts([data.data, ...products]);
                setNewProduct({ title: "", price: "", rating: 0, condition: "", image: null });
                setShowForm(false);
            } else {
                alert(data.msg || "Error adding product");
            }
        } catch (err) {
            console.error(err);
        }
    };

    const handleDeleteProduct = async (id) => {
        try {
            const res = await fetch(`http://localhost:5000/api/products/${id}`, {
                method: "DELETE",
            });
            if (res.ok) {
                setProducts(products.filter((p) => p._id !== id));
            } else {
                alert("Error deleting product");
            }
        } catch (err) {
            console.error(err);
        }
    };



    return (
        <>
            {/* Hero Section */}
            <div className="relative flex h-screen items-center justify-center pt-16 pb-32">
                <div className="absolute top-0 h-full w-full bg-[url('/img/nature2.jpg')] bg-cover bg-center" />
                <div className="absolute top-0 h-full w-full bg-black/60" />
                <div className="container relative mx-auto text-center">
                    <Typography variant="h1" color="white" className="mb-6 font-black">
                        Products
                    </Typography>
                    <Typography variant="lead" color="white" className="opacity-80 mb-6">
                        Add your electronic items here to sell, donate, or recycle.
                        Make your products visible to customers and help reduce e-waste
                        while earning or sharing value.
                    </Typography>
                    <Button onClick={() => setShowForm(!showForm)} color="blue">
                        {showForm ? "Close Form" : "Add Product"}
                    </Button>
                </div>
            </div>

            {/* Add Product Form */}
            {showForm && (
                <div className="flex items-center justify-center mt-10">
                    <Card className="p-6 w-full max-w-md bg-white shadow-lg">
                        <Typography variant="h5" color="blue-gray" className="mb-4 text-center">
                            Add New Product
                        </Typography>
                        <form onSubmit={handleAddProduct} className="space-y-4">
                            <Input label="Product Title" name="title" value={newProduct.title} onChange={handleChange} />
                            <Input label="Price" name="price" type="number" value={newProduct.price} onChange={handleChange} />
                            <Input label="Condition" name="condition" value={newProduct.condition} onChange={handleChange} />
                            <Input
                                label="Rating (0–5)"
                                name="rating"
                                type="number"
                                min="0"
                                max="5"
                                value={newProduct.rating}
                                onChange={(e) => setNewProduct({ ...newProduct, rating: Number(e.target.value) })}
                            />
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>
                                <input type="file" accept="image/*" onChange={handleImageUpload} className="block w-full text-sm border border-gray-300 rounded-lg cursor-pointer bg-gray-50" />
                            </div>
                            {newProduct.image && <img src={newProduct.image} alt="Preview" className="w-full h-40 mt-2 object-cover rounded-lg" />}
                            <div className="flex justify-center mt-4">
                                <Button type="submit" color="blue">Add Product</Button>
                            </div>
                        </form>
                    </Card>
                </div>
            )}

            {/* Product List */}
            {products.length > 0 && (
                <section className="-mt-32 bg-white px-4 pb-20 pt-4">
                    <div className="container mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-40">
                        {products.map(({ _id, title, image, rating, price, condition }) => (
                            <div key={_id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                                <img className="p-8 rounded-t-lg h-40 w-full object-cover" src={image} alt={title} />
                                <div className="px-5 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                                    <br />

                                    {/* Display user info here */}
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                                        Seller: <span className="font-medium text-gray-900 dark:text-white">{user?.name}</span>
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                                        Email: <span className="font-medium text-gray-900 dark:text-white">{user?.email}</span>
                                    </p>

                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                                        Condition: <span className="font-medium text-gray-900 dark:text-white">{condition}</span>
                                    </p>
                                    <div className="flex items-center mt-2.5 mb-5">
                                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className={`w-4 h-4 ${i < rating ? "text-yellow-300" : "text-gray-200 dark:text-gray-600"}`}
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">{rating}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-3xl font-bold text-gray-900 dark:text-white">₹{price}</span>
                                        <Button color="red" onClick={() => handleDeleteProduct(_id)}>Delete</Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <Footer />
        </>
    );
}

export default AddProducts;
