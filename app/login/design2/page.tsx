"use client";

import React, { useState } from "react";

const LoginDesign2 = () => {
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
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Left Panel - Branding */}
      <div
        style={{
          flex: 1,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px",
          color: "#ffffff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            top: "-80px",
            left: "-80px",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.06)",
            bottom: "60px",
            right: "-40px",
          }}
        />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "400px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              backgroundColor: "rgba(255,255,255,0.2)",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "32px",
            }}
          >
            <span style={{ fontSize: "28px", fontWeight: "bold" }}>H</span>
          </div>
          <h1
            style={{
              fontSize: "36px",
              fontWeight: 700,
              marginBottom: "16px",
              lineHeight: 1.2,
            }}
          >
            Manage your e-commerce business with ease
          </h1>
          <p
            style={{
              fontSize: "16px",
              opacity: 0.85,
              lineHeight: 1.6,
            }}
          >
            Track orders, manage products, and analyze your business performance
            all in one place.
          </p>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          backgroundColor: "#ffffff",
        }}
      >
        <div style={{ width: "100%", maxWidth: "380px" }}>
          <h2
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "#1a1a1a",
              marginBottom: "8px",
            }}
          >
            Sign in
          </h2>
          <p
            style={{
              color: "#6b7280",
              fontSize: "15px",
              marginBottom: "36px",
            }}
          >
            Welcome back! Please enter your details.
          </p>

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
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  fontSize: "14px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>

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
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  fontSize: "14px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "28px",
                fontSize: "14px",
              }}
            >
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#374151",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  style={{ width: "16px", height: "16px", cursor: "pointer" }}
                />
                Remember me
              </label>
              <a
                href="#"
                style={{
                  color: "#667eea",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "#ffffff",
                border: "none",
                borderRadius: "8px",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
                marginBottom: "16px",
              }}
            >
              Sign in
            </button>

            <button
              type="button"
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#ffffff",
                color: "#374151",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                fontSize: "15px",
                fontWeight: 500,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Sign in with Google
            </button>
          </form>

          <p
            style={{
              textAlign: "center",
              marginTop: "28px",
              fontSize: "14px",
              color: "#6b7280",
            }}
          >
            Don&apos;t have an account?{" "}
            <a
              href="#"
              style={{
                color: "#667eea",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Sign up for free
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginDesign2;
