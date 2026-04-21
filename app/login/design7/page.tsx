"use client";

import React, { useState } from "react";

const LoginDesign7 = () => {
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
        background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          backgroundColor: "#ffffff",
          borderRadius: "24px",
          overflow: "hidden",
          display: "flex",
          boxShadow: "0 25px 80px rgba(0, 0, 0, 0.12)",
          minHeight: "540px",
        }}
      >
        {/* Left - Visual */}
        <div
          style={{
            flex: 1,
            background: "linear-gradient(160deg, #e44d26 0%, #f16529 50%, #fca326 100%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "48px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.1)",
              top: "-40px",
              left: "-40px",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.08)",
              bottom: "40px",
              right: "-30px",
            }}
          />

          <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
            <div
              style={{
                width: "72px",
                height: "72px",
                backgroundColor: "rgba(255,255,255,0.2)",
                borderRadius: "20px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "28px",
                backdropFilter: "blur(8px)",
              }}
            >
              <span style={{ color: "#fff", fontSize: "36px", fontWeight: "bold" }}>H</span>
            </div>
            <h2 style={{ fontSize: "28px", fontWeight: 700, color: "#fff", marginBottom: "12px" }}>
              HarleyDemo
            </h2>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.85)", lineHeight: 1.6, maxWidth: "280px" }}>
              Your complete e-commerce management solution. Track, analyze, and grow.
            </p>

            <div style={{ marginTop: "40px", display: "flex", gap: "8px", justifyContent: "center" }}>
              <div style={{ width: "32px", height: "4px", borderRadius: "2px", backgroundColor: "#fff" }} />
              <div style={{ width: "32px", height: "4px", borderRadius: "2px", backgroundColor: "rgba(255,255,255,0.3)" }} />
              <div style={{ width: "32px", height: "4px", borderRadius: "2px", backgroundColor: "rgba(255,255,255,0.3)" }} />
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "48px",
          }}
        >
          <h1 style={{ fontSize: "26px", fontWeight: 700, color: "#1a1a1a", margin: "0 0 8px 0" }}>
            Sign in
          </h1>
          <p style={{ color: "#999", fontSize: "14px", margin: "0 0 32px 0" }}>
            Enter your credentials to access your dashboard
          </p>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "18px" }}>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#555", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="hello@example.com"
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  border: "2px solid #f0f0f0",
                  borderRadius: "12px",
                  fontSize: "15px",
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s",
                  backgroundColor: "#fafafa",
                }}
              />
            </div>

            <div style={{ marginBottom: "24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <label style={{ fontSize: "13px", fontWeight: 600, color: "#555", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  Password
                </label>
                <a href="#" style={{ fontSize: "13px", color: "#e44d26", textDecoration: "none", fontWeight: 500 }}>
                  Forgot?
                </a>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  border: "2px solid #f0f0f0",
                  borderRadius: "12px",
                  fontSize: "15px",
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s",
                  backgroundColor: "#fafafa",
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "14px",
                background: "linear-gradient(135deg, #e44d26 0%, #f16529 100%)",
                color: "#ffffff",
                border: "none",
                borderRadius: "12px",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "0 4px 16px rgba(228,77,38,0.3)",
              }}
            >
              Sign in
            </button>
          </form>

          <p style={{ textAlign: "center", marginTop: "28px", fontSize: "14px", color: "#999" }}>
            New here?{" "}
            <a href="#" style={{ color: "#e44d26", textDecoration: "none", fontWeight: 600 }}>
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginDesign7;
