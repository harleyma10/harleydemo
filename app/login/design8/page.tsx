"use client";

import React, { useState } from "react";

const LoginDesign8 = () => {
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
        backgroundColor: "#1a1a2e",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        padding: "20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Geometric shapes */}
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          border: "1px solid rgba(230,73,128,0.1)",
          borderRadius: "50%",
          top: "-200px",
          right: "-200px",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          border: "1px solid rgba(230,73,128,0.08)",
          borderRadius: "50%",
          bottom: "-150px",
          left: "-100px",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "200px",
          height: "200px",
          background: "radial-gradient(circle, rgba(230,73,128,0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          top: "30%",
          left: "10%",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "250px",
          height: "250px",
          background: "radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          bottom: "20%",
          right: "15%",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div
            style={{
              width: "52px",
              height: "52px",
              background: "linear-gradient(135deg, #e64980, #00d4ff)",
              borderRadius: "14px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
              boxShadow: "0 8px 24px rgba(230,73,128,0.3)",
            }}
          >
            <span style={{ color: "#fff", fontSize: "26px", fontWeight: "bold" }}>H</span>
          </div>
          <h1 style={{ fontSize: "28px", fontWeight: 700, color: "#ffffff", margin: "0 0 8px 0" }}>
            Welcome back
          </h1>
          <p style={{ color: "#6c6c8a", fontSize: "15px", margin: 0 }}>
            Sign in to continue to HarleyDemo
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "18px" }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              style={{
                width: "100%",
                padding: "16px 20px",
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "14px",
                fontSize: "15px",
                color: "#ffffff",
                outline: "none",
                boxSizing: "border-box",
                transition: "border-color 0.2s, background-color 0.2s",
              }}
            />
          </div>

          <div style={{ marginBottom: "12px" }}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              style={{
                width: "100%",
                padding: "16px 20px",
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "14px",
                fontSize: "15px",
                color: "#ffffff",
                outline: "none",
                boxSizing: "border-box",
                transition: "border-color 0.2s, background-color 0.2s",
              }}
            />
          </div>

          <div style={{ textAlign: "right", marginBottom: "24px" }}>
            <a href="#" style={{ fontSize: "13px", color: "#e64980", textDecoration: "none", fontWeight: 500 }}>
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "16px",
              background: "linear-gradient(135deg, #e64980 0%, #00d4ff 100%)",
              color: "#ffffff",
              border: "none",
              borderRadius: "14px",
              fontSize: "16px",
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 8px 24px rgba(230,73,128,0.25)",
              letterSpacing: "0.3px",
            }}
          >
            Sign in
          </button>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              margin: "28px 0",
            }}
          >
            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.08)" }} />
            <span style={{ fontSize: "12px", color: "#6c6c8a", textTransform: "uppercase", letterSpacing: "1.5px" }}>
              or
            </span>
            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.08)" }} />
          </div>

          <div style={{ display: "flex", gap: "12px" }}>
            <button
              type="button"
              style={{
                flex: 1,
                padding: "14px",
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "14px",
                color: "#fff",
                fontSize: "14px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
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
                padding: "14px",
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "14px",
                color: "#fff",
                fontSize: "14px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </button>
          </div>
        </form>

        <p style={{ textAlign: "center", marginTop: "32px", fontSize: "14px", color: "#6c6c8a" }}>
          New to HarleyDemo?{" "}
          <a
            href="#"
            style={{
              background: "linear-gradient(135deg, #e64980, #00d4ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginDesign8;
