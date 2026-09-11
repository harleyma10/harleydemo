"use client";

import React, { useState } from "react";

const LoginDesign5 = () => {
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
        backgroundColor: "#ffffff",
      }}
    >
      {/* Left Panel - Form */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 80px",
          maxWidth: "560px",
        }}
      >
        <div style={{ marginBottom: "48px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "48px",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                backgroundColor: "#ff6b35",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ color: "#fff", fontSize: "18px", fontWeight: "bold" }}>H</span>
            </div>
            <span style={{ fontSize: "16px", fontWeight: 600, color: "#1a1a1a" }}>
              HarleyDemo
            </span>
          </div>
          <h1
            style={{
              fontSize: "36px",
              fontWeight: 800,
              color: "#1a1a1a",
              margin: "0 0 12px 0",
              letterSpacing: "-1px",
              lineHeight: 1.1,
            }}
          >
            Welcome back
          </h1>
          <p style={{ color: "#888", fontSize: "16px", margin: 0 }}>
            Please enter your details to sign in.
          </p>
        </div>

        <div style={{ display: "flex", gap: "12px", marginBottom: "28px" }}>
          <button
            type="button"
            style={{
              flex: 1,
              padding: "12px",
              backgroundColor: "#fff",
              border: "1px solid #e0e0e0",
              borderRadius: "10px",
              fontSize: "14px",
              fontWeight: 500,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              color: "#333",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Google
          </button>
          <button
            type="button"
            style={{
              flex: 1,
              padding: "12px",
              backgroundColor: "#fff",
              border: "1px solid #e0e0e0",
              borderRadius: "10px",
              fontSize: "14px",
              fontWeight: 500,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              color: "#333",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#333">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </button>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "28px",
          }}
        >
          <div style={{ flex: 1, height: "1px", background: "#e0e0e0" }} />
          <span style={{ fontSize: "13px", color: "#aaa", textTransform: "uppercase", letterSpacing: "1px" }}>or</span>
          <div style={{ flex: 1, height: "1px", background: "#e0e0e0" }} />
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", fontSize: "14px", fontWeight: 500, color: "#333", marginBottom: "8px" }}>
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={{
                width: "100%",
                padding: "14px 16px",
                border: "1px solid #e0e0e0",
                borderRadius: "10px",
                fontSize: "15px",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ marginBottom: "28px" }}>
            <label style={{ display: "block", fontSize: "14px", fontWeight: 500, color: "#333", marginBottom: "8px" }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={{
                width: "100%",
                padding: "14px 16px",
                border: "1px solid #e0e0e0",
                borderRadius: "10px",
                fontSize: "15px",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "#ff6b35",
              color: "#ffffff",
              border: "none",
              borderRadius: "10px",
              fontSize: "15px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Sign in
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "28px", fontSize: "14px", color: "#888" }}>
          Don&apos;t have an account?{" "}
          <a href="#" style={{ color: "#ff6b35", textDecoration: "none", fontWeight: 600 }}>
            Sign up
          </a>
        </p>
      </div>

      {/* Right Panel - Illustration / Testimonial */}
      <div
        style={{
          flex: 1,
          background: "linear-gradient(160deg, #ff6b35 0%, #f7931e 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.06)",
            top: "-150px",
            right: "-150px",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.04)",
            bottom: "-80px",
            left: "-80px",
          }}
        />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "400px", textAlign: "center" }}>
          <div
            style={{
              fontSize: "64px",
              marginBottom: "32px",
            }}
          >
            &#128640;
          </div>
          <h2
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "16px",
              lineHeight: 1.3,
            }}
          >
            &ldquo;The best dashboard we&apos;ve ever used for our e-commerce business.&rdquo;
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.85)", marginBottom: "24px" }}>
            Sarah Johnson
          </p>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>
            CEO, TechStore Inc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginDesign5;
