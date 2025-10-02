export interface Vendor {
  id: string;
  name: string;
  location: string;
  rating: number;
  isLive: boolean;
  distance: string;
  image: string;
  speciality: string;
  totalOrders: number;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  image: string;
  inStock: boolean;
  vendorId: string;
}

export interface Order {
  id: string;
  customerId: string;
  customerName: string;
  vendorId: string;
  items: { productId: string; quantity: number; productName: string }[];
  total: number;
  status: "pending" | "accepted" | "completed" | "cancelled";
  time: string;
  deliveryAddress: string;
}

export const vendors: Vendor[] = [
  {
    id: "v1",
    name: "Sharma Ji Ki Redi",
    location: "Sector 22, Chandigarh",
    rating: 4.8,
    isLive: true,
    distance: "0.5 km",
    image: "🛒",
    speciality: "Fresh Vegetables",
    totalOrders: 1250
  },
  {
    id: "v2",
    name: "Kaur Fruits & Veggies",
    location: "Model Town, Ludhiana",
    rating: 4.9,
    isLive: true,
    distance: "1.2 km",
    image: "🥬",
    speciality: "Organic Produce",
    totalOrders: 890
  },
  {
    id: "v3",
    name: "Gupta Fresh Market",
    location: "Civil Lines, Jalandhar",
    rating: 4.7,
    isLive: false,
    distance: "2.1 km",
    image: "🥕",
    speciality: "Daily Essentials",
    totalOrders: 2100
  },
  {
    id: "v4",
    name: "Singh Sabzi Wala",
    location: "Rajpura Road, Patiala",
    rating: 4.6,
    isLive: true,
    distance: "0.8 km",
    image: "🍅",
    speciality: "Farm Fresh",
    totalOrders: 750
  }
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Tomato (Tamatar)",
    category: "vegetables",
    price: 40,
    unit: "kg",
    image: "🍅",
    inStock: true,
    vendorId: "v1"
  },
  {
    id: "p2",
    name: "Potato (Aloo)",
    category: "vegetables",
    price: 30,
    unit: "kg",
    image: "🥔",
    inStock: true,
    vendorId: "v1"
  },
  {
    id: "p3",
    name: "Onion (Pyaaz)",
    category: "vegetables",
    price: 35,
    unit: "kg",
    image: "🧅",
    inStock: true,
    vendorId: "v1"
  },
  {
    id: "p4",
    name: "Green Chilli (Hari Mirch)",
    category: "vegetables",
    price: 60,
    unit: "kg",
    image: "🌶️",
    inStock: true,
    vendorId: "v2"
  },
  {
    id: "p5",
    name: "Cauliflower (Gobi)",
    category: "vegetables",
    price: 50,
    unit: "kg",
    image: "🥦",
    inStock: true,
    vendorId: "v2"
  },
  {
    id: "p6",
    name: "Spinach (Palak)",
    category: "vegetables",
    price: 40,
    unit: "kg",
    image: "🥬",
    inStock: true,
    vendorId: "v2"
  },
  {
    id: "p7",
    name: "Apple (Seb)",
    category: "fruits",
    price: 150,
    unit: "kg",
    image: "🍎",
    inStock: true,
    vendorId: "v3"
  },
  {
    id: "p8",
    name: "Banana (Kela)",
    category: "fruits",
    price: 50,
    unit: "dozen",
    image: "🍌",
    inStock: true,
    vendorId: "v3"
  },
  {
    id: "p9",
    name: "Mango (Aam)",
    category: "fruits",
    price: 120,
    unit: "kg",
    image: "🥭",
    inStock: true,
    vendorId: "v4"
  },
  {
    id: "p10",
    name: "Orange (Santra)",
    category: "fruits",
    price: 80,
    unit: "kg",
    image: "🍊",
    inStock: true,
    vendorId: "v4"
  }
];

export const orders: Order[] = [
  {
    id: "o1",
    customerId: "c1",
    customerName: "Priya Sharma",
    vendorId: "v1",
    items: [
      { productId: "p1", quantity: 2, productName: "Tomato" },
      { productId: "p2", quantity: 3, productName: "Potato" }
    ],
    total: 170,
    status: "pending",
    time: "10:30 AM",
    deliveryAddress: "H.No 45, Sector 18"
  },
  {
    id: "o2",
    customerId: "c2",
    customerName: "Rajesh Kumar",
    vendorId: "v1",
    items: [
      { productId: "p3", quantity: 2, productName: "Onion" }
    ],
    total: 70,
    status: "accepted",
    time: "11:00 AM",
    deliveryAddress: "Flat 302, Green Valley"
  }
];

export const categories = [
  { id: "vegetables", name: "Vegetables", icon: "🥬", color: "bg-primary" },
  { id: "fruits", name: "Fruits", icon: "🍎", color: "bg-accent" },
  { id: "daily", name: "Daily Basket", icon: "🛒", color: "bg-secondary" },
  { id: "cosmetics", name: "Cosmetics", icon: "💄", color: "bg-info" }
];
