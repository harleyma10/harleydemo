"use client";

import React, { useState } from "react";

const LoginDesign1 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          padding: "48px 40px",
          boxShadow: "0 2px 16px rgba(0, 0, 0, 0.08)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              backgroundColor: "#4f46e5",
              borderRadius: "12px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "16px",
            }}
          >
            <span style={{ color: "#ffffff", fontSize: "24px", fontWeight: "bold" }}>
              H
            </span>
          </div>
          <h1
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#1a1a1a",
              margin: "0 0 8px 0",
            }}
          >
            Welcome back
          </h1>
          <p style={{ color: "#6b7280", fontSize: "14px", margin: 0 }}>
            Sign in to your account to continue
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: 500,
                color: "#374151",
                marginBottom: "6px",
              }}
            >
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              style={{
                width: "100%",
                padding: "10px 14px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                fontSize: "14px",
                outline: "none",
                boxSizing: "border-box",
                transition: "border-color 0.2s",
              }}
            />
          </div>

          <div style={{ marginBottom: "24px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "6px",
              }}
            >
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#374151",
                }}
              >
                Password
              </label>
              <a
                href="#"
                style={{
                  fontSize: "13px",
                  color: "#4f46e5",
                  textDecoration: "none",
                }}
              >
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={{
                width: "100%",
                padding: "10px 14px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                fontSize: "14px",
                outline: "none",
                boxSizing: "border-box",
                transition: "border-color 0.2s",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#4f46e5",
              color: "#ffffff",
              border: "none",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
          >
            Sign in
          </button>
        </form>

        <div
          style={{
            marginTop: "24px",
            textAlign: "center",
            fontSize: "14px",
            color: "#6b7280",
          }}
        >
          Don&apos;t have an account?{" "}
          <a
            href="#"
            style={{
              color: "#4f46e5",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginDesign1;
