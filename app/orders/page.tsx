"use client";

import React, { useState } from "react";
import StatusBadge from "@/components/StatusBadge";
import { orders } from "@/data/mock";

type OrderStatus = "All" | "Pending" | "Processing" | "Shipped" | "Delivered";

export default function OrdersPage() {
  const [filter, setFilter] = useState<OrderStatus>("All");

  const filtered = filter === "All" ? orders : orders.filter((o) => o.status === filter);

  const statuses: OrderStatus[] = ["All", "Pending", "Processing", "Shipped", "Delivered"];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
          <p className="text-sm text-gray-500 mt-1">Track and manage customer orders</p>
        </div>
        <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors">
          + New Order
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-1.5 inline-flex gap-1">
        {statuses.map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              filter === status
                ? "bg-indigo-600 text-white"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr className="text-left text-gray-500">
                <th className="px-6 py-3 font-medium">Order ID</th>
                <th className="px-6 py-3 font-medium">Customer</th>
                <th className="px-6 py-3 font-medium">Date</th>
                <th className="px-6 py-3 font-medium">Items</th>
                <th className="px-6 py-3 font-medium">Total</th>
                <th className="px-6 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((order) => (
                <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-indigo-600">{order.id}</td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900">{order.customer}</p>
                      <p className="text-xs text-gray-500">{order.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{order.date}</td>
                  <td className="px-6 py-4 text-gray-600">{order.items} items</td>
                  <td className="px-6 py-4 text-gray-900 font-medium">${order.total.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={order.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 text-sm text-gray-500">
          Showing {filtered.length} of {orders.length} orders
        </div>
      </div>
    </div>
  );
}
