"use client";

import React from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
        <p>Loading...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div style={{ maxWidth: "500px", margin: "80px auto", padding: "20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "28px", marginBottom: "16px" }}>E-commerce Dashboard</h1>
        <p style={{ marginBottom: "24px", color: "#6b7280" }}>
          Please sign in to access the dashboard.
        </p>
        <button
          onClick={() => router.push("/auth/login")}
          style={{
            padding: "10px 24px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            cursor: "pointer",
            marginRight: "12px",
          }}
        >
          Sign In
        </button>
        <button
          onClick={() => router.push("/auth/register")}
          style={{
            padding: "10px 24px",
            backgroundColor: "white",
            color: "#2563eb",
            border: "1px solid #2563eb",
            borderRadius: "6px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
        <div>
          <h1 style={{ fontSize: "28px", marginBottom: "4px" }}>E-commerce Dashboard</h1>
          <p style={{ color: "#6b7280" }}>
            Welcome, {session.user?.name || session.user?.email}
          </p>
        </div>
        <button
          onClick={() => signOut()}
          style={{
            padding: "8px 16px",
            backgroundColor: "#ef4444",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          Sign Out
        </button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
        <a
          href="/products"
          style={{
            padding: "24px",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <h2 style={{ fontSize: "18px", marginBottom: "8px" }}>Products</h2>
          <p style={{ color: "#6b7280", fontSize: "14px" }}>Manage your product catalog</p>
        </a>
        <a
          href="/orders"
          style={{
            padding: "24px",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <h2 style={{ fontSize: "18px", marginBottom: "8px" }}>Orders</h2>
          <p style={{ color: "#6b7280", fontSize: "14px" }}>View and manage orders</p>
        </a>
        <a
          href="/analytics"
          style={{
            padding: "24px",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <h2 style={{ fontSize: "18px", marginBottom: "8px" }}>Analytics</h2>
          <p style={{ color: "#6b7280", fontSize: "14px" }}>View dashboard analytics</p>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
