import {
    Smartphone,
    ClipboardCheck,
    Wrench,
    Recycle,
    Truck,
    ShoppingCart,
} from "lucide-react";

export const servicesData = [
    {
        title: "Sell Your E-Waste",
        icon: Smartphone,
        description:
            "Users can sell unwanted electronic items through our platform. We accept more than just mobiles and laptops, including TVs, refrigerators, computers, appliances, and other electronic devices.",
    },

    {
        title: "Inspection & Evaluation",
        icon: ClipboardCheck,
        description:
            "Once an electronic item is received, we inspect its condition and evaluate whether it can be repaired, reused, restored, or recycled.",
    },

    {
        title: "Repair & Restore",
        icon: Wrench,
        description:
            "Devices that can be recovered are repaired, refurbished, and restored to usable condition instead of being immediately discarded.",
    },

    {
        title: "Responsible Recycling",
        icon: Recycle,
        description:
            "Items that cannot be reused or restored are processed responsibly to recover useful materials and reduce electronic waste.",
    },

    {
        title: "Delivery & Logistics",
        icon: Truck,
        description:
            "Our platform works with delivery partners to help collect electronic items from users and deliver processed products to customers and companies.",
    },

    {
        title: "Buy & Sell",
        icon: ShoppingCart,
        description:
            "Customers can purchase available refurbished products, while companies can place bulk orders for suitable electronic products through our platform.",
    },
];

export default servicesData;