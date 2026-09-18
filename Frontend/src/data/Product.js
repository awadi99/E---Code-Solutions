import { ChatBubbleBottomCenterTextIcon ,DeviceTabletIcon,CreditCardIcon, TruckIcon } from "@heroicons/react/24/solid";

export const ProductsData = [
  {
    color: "green",
    title: "Product Usage",
    icon: DeviceTabletIcon,
    description: [
      "• Use the product only as intended.",
      "• Follow instructions carefully.",
      "• Keep out of reach of children if necessary."
    ],
  },
  {
    color: "green",
    title: " Payment & Delivery",
    icon: CreditCardIcon,
    description: [
      "Payment must be completed before shipping.",
      "Delivery time may vary by location.",
      "Check shipping charges before checkout."
    ],
  },
  {
    color: "green",
    title: "Returns & Warranty",
    icon: TruckIcon,
    description: [
      "Returns accepted within 7 days if unused.",
      "Refund will be processed after inspection.",
      "Warranty applies as per manufacturer terms"
    ],
  }
];

export default ProductsData;
