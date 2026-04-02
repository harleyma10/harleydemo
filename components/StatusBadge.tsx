import React from "react";

type Status = "Pending" | "Processing" | "Shipped" | "Delivered" | "In Stock" | "Low Stock" | "Out of Stock";

const statusStyles: Record<Status, string> = {
  Pending: "bg-red-50 text-red-700 ring-red-600/20",
  Processing: "bg-yellow-50 text-yellow-700 ring-yellow-600/20",
  Shipped: "bg-blue-50 text-blue-700 ring-blue-600/20",
  Delivered: "bg-green-50 text-green-700 ring-green-600/20",
  "In Stock": "bg-green-50 text-green-700 ring-green-600/20",
  "Low Stock": "bg-yellow-50 text-yellow-700 ring-yellow-600/20",
  "Out of Stock": "bg-red-50 text-red-700 ring-red-600/20",
};

interface StatusBadgeProps {
  status: Status;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}
