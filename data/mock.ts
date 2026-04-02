export interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  stock: number;
  status: "In Stock" | "Low Stock" | "Out of Stock";
  category: string;
  image: string;
}

export interface Order {
  id: string;
  customer: string;
  email: string;
  date: string;
  total: number;
  status: "Pending" | "Processing" | "Shipped" | "Delivered";
  items: number;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  orders: number;
  totalSpent: number;
  joinDate: string;
  location: string;
}

export interface RevenueData {
  month: string;
  revenue: number;
  orders: number;
}

export const products: Product[] = [
  { id: "PRD-001", name: "Wireless Headphones", sku: "WH-1001", price: 89.99, stock: 145, status: "In Stock", category: "Electronics", image: "/products/headphones.jpg" },
  { id: "PRD-002", name: "Leather Wallet", sku: "LW-2001", price: 49.99, stock: 8, status: "Low Stock", category: "Accessories", image: "/products/wallet.jpg" },
  { id: "PRD-003", name: "Running Shoes", sku: "RS-3001", price: 129.99, stock: 62, status: "In Stock", category: "Footwear", image: "/products/shoes.jpg" },
  { id: "PRD-004", name: "Smartphone Case", sku: "SC-4001", price: 19.99, stock: 0, status: "Out of Stock", category: "Accessories", image: "/products/case.jpg" },
  { id: "PRD-005", name: "Bluetooth Speaker", sku: "BS-5001", price: 59.99, stock: 234, status: "In Stock", category: "Electronics", image: "/products/speaker.jpg" },
  { id: "PRD-006", name: "Cotton T-Shirt", sku: "CT-6001", price: 24.99, stock: 5, status: "Low Stock", category: "Clothing", image: "/products/tshirt.jpg" },
  { id: "PRD-007", name: "Yoga Mat", sku: "YM-7001", price: 34.99, stock: 89, status: "In Stock", category: "Fitness", image: "/products/yogamat.jpg" },
  { id: "PRD-008", name: "Stainless Water Bottle", sku: "WB-8001", price: 27.99, stock: 156, status: "In Stock", category: "Accessories", image: "/products/bottle.jpg" },
  { id: "PRD-009", name: "Desk Lamp", sku: "DL-9001", price: 44.99, stock: 3, status: "Low Stock", category: "Home", image: "/products/lamp.jpg" },
  { id: "PRD-010", name: "Backpack", sku: "BP-1002", price: 79.99, stock: 0, status: "Out of Stock", category: "Accessories", image: "/products/backpack.jpg" },
];

export const orders: Order[] = [
  { id: "ORD-7291", customer: "Sarah Johnson", email: "sarah.j@email.com", date: "2026-04-01", total: 189.97, status: "Delivered", items: 3 },
  { id: "ORD-7292", customer: "Mike Chen", email: "mike.c@email.com", date: "2026-04-01", total: 89.99, status: "Shipped", items: 1 },
  { id: "ORD-7293", customer: "Emily Davis", email: "emily.d@email.com", date: "2026-03-31", total: 259.97, status: "Processing", items: 4 },
  { id: "ORD-7294", customer: "James Wilson", email: "james.w@email.com", date: "2026-03-31", total: 49.99, status: "Pending", items: 1 },
  { id: "ORD-7295", customer: "Lisa Anderson", email: "lisa.a@email.com", date: "2026-03-30", total: 154.97, status: "Delivered", items: 2 },
  { id: "ORD-7296", customer: "Robert Taylor", email: "robert.t@email.com", date: "2026-03-30", total: 324.96, status: "Shipped", items: 5 },
  { id: "ORD-7297", customer: "Anna Martinez", email: "anna.m@email.com", date: "2026-03-29", total: 79.99, status: "Delivered", items: 1 },
  { id: "ORD-7298", customer: "David Brown", email: "david.b@email.com", date: "2026-03-29", total: 114.98, status: "Processing", items: 2 },
  { id: "ORD-7299", customer: "Jennifer Lee", email: "jennifer.l@email.com", date: "2026-03-28", total: 209.97, status: "Pending", items: 3 },
  { id: "ORD-7300", customer: "Chris Garcia", email: "chris.g@email.com", date: "2026-03-28", total: 67.98, status: "Delivered", items: 2 },
];

export const customers: Customer[] = [
  { id: "CUS-001", name: "Sarah Johnson", email: "sarah.j@email.com", orders: 12, totalSpent: 1289.45, joinDate: "2025-03-15", location: "New York, NY" },
  { id: "CUS-002", name: "Mike Chen", email: "mike.c@email.com", orders: 8, totalSpent: 876.30, joinDate: "2025-05-22", location: "San Francisco, CA" },
  { id: "CUS-003", name: "Emily Davis", email: "emily.d@email.com", orders: 15, totalSpent: 2145.60, joinDate: "2025-01-10", location: "Chicago, IL" },
  { id: "CUS-004", name: "James Wilson", email: "james.w@email.com", orders: 3, totalSpent: 234.97, joinDate: "2026-01-05", location: "Austin, TX" },
  { id: "CUS-005", name: "Lisa Anderson", email: "lisa.a@email.com", orders: 22, totalSpent: 3456.80, joinDate: "2024-11-20", location: "Seattle, WA" },
  { id: "CUS-006", name: "Robert Taylor", email: "robert.t@email.com", orders: 6, totalSpent: 567.88, joinDate: "2025-08-14", location: "Denver, CO" },
  { id: "CUS-007", name: "Anna Martinez", email: "anna.m@email.com", orders: 9, totalSpent: 987.65, joinDate: "2025-06-01", location: "Miami, FL" },
  { id: "CUS-008", name: "David Brown", email: "david.b@email.com", orders: 18, totalSpent: 2876.40, joinDate: "2024-09-30", location: "Portland, OR" },
  { id: "CUS-009", name: "Jennifer Lee", email: "jennifer.l@email.com", orders: 11, totalSpent: 1567.25, joinDate: "2025-04-18", location: "Boston, MA" },
  { id: "CUS-010", name: "Chris Garcia", email: "chris.g@email.com", orders: 5, totalSpent: 432.90, joinDate: "2025-12-02", location: "Los Angeles, CA" },
];

export const revenueData: RevenueData[] = [
  { month: "Jul", revenue: 18500, orders: 142 },
  { month: "Aug", revenue: 22300, orders: 168 },
  { month: "Sep", revenue: 19800, orders: 155 },
  { month: "Oct", revenue: 25600, orders: 198 },
  { month: "Nov", revenue: 31200, orders: 245 },
  { month: "Dec", revenue: 38900, orders: 312 },
  { month: "Jan", revenue: 21400, orders: 175 },
  { month: "Feb", revenue: 24100, orders: 189 },
  { month: "Mar", revenue: 28700, orders: 221 },
  { month: "Apr", revenue: 15200, orders: 98 },
];

export const kpiData = {
  totalRevenue: 245700,
  totalOrders: 1903,
  totalCustomers: 847,
  avgOrderValue: 129.12,
  revenueChange: 12.5,
  ordersChange: 8.3,
  customersChange: 15.2,
  aovChange: -2.1,
};

export const ordersByStatus = [
  { name: "Delivered", value: 892, color: "#10b981" },
  { name: "Shipped", value: 423, color: "#3b82f6" },
  { name: "Processing", value: 312, color: "#f59e0b" },
  { name: "Pending", value: 276, color: "#ef4444" },
];

export const topProducts = [
  { name: "Wireless Headphones", revenue: 12589, units: 140 },
  { name: "Running Shoes", revenue: 11049, units: 85 },
  { name: "Bluetooth Speaker", revenue: 8399, units: 140 },
  { name: "Backpack", revenue: 7199, units: 90 },
  { name: "Leather Wallet", revenue: 5499, units: 110 },
];
