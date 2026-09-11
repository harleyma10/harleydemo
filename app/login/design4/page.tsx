"use client";

import React, { useState } from "react";

const LoginDesign4 = () => {
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
        backgroundColor: "#0a0a0a",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        padding: "20px",
        position: "relative",
      }}
    >
      {/* Subtle grid pattern overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, transparent 0%, #10b981 30%, #06b6d4 70%, transparent 100%)",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Card */}
        <div
          style={{
            backgroundColor: "#141414",
            borderRadius: "16px",
            padding: "44px 36px",
            border: "1px solid #262626",
          }}
        >
          <div style={{ marginBottom: "36px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "28px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  background: "linear-gradient(135deg, #10b981, #06b6d4)",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    color: "#0a0a0a",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  H
                </span>
              </div>
              <span
                style={{
                  color: "#ffffff",
                  fontSize: "18px",
                  fontWeight: 600,
                  letterSpacing: "-0.3px",
                }}
              >
                HarleyDemo
              </span>
            </div>
            <h1
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#ffffff",
                margin: "0 0 8px 0",
                letterSpacing: "-0.5px",
              }}
            >
              Log in to your account
            </h1>
            <p
              style={{
                color: "#737373",
                fontSize: "14px",
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              Access your dashboard, orders, and analytics
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "18px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#a3a3a3",
                  marginBottom: "8px",
                }}
              >
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  backgroundColor: "#0a0a0a",
                  border: "1px solid #262626",
                  borderRadius: "10px",
                  fontSize: "14px",
                  color: "#ffffff",
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
                  marginBottom: "8px",
                }}
              >
                <label
                  style={{
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#a3a3a3",
                  }}
                >
                  Password
                </label>
                <a
                  href="#"
                  style={{
                    fontSize: "13px",
                    color: "#10b981",
                    textDecoration: "none",
                  }}
                >
                  Reset password
                </a>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  backgroundColor: "#0a0a0a",
                  border: "1px solid #262626",
                  borderRadius: "10px",
                  fontSize: "14px",
                  color: "#ffffff",
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
                background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                color: "#0a0a0a",
                border: "none",
                borderRadius: "10px",
                fontSize: "14px",
                fontWeight: 700,
                cursor: "pointer",
                letterSpacing: "0.3px",
                marginBottom: "16px",
              }}
            >
              Continue
            </button>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                margin: "24px 0",
              }}
            >
              <div style={{ flex: 1, height: "1px", background: "#262626" }} />
              <span style={{ fontSize: "12px", color: "#525252" }}>
                OR CONTINUE WITH
              </span>
              <div style={{ flex: 1, height: "1px", background: "#262626" }} />
            </div>

            <div style={{ display: "flex", gap: "12px" }}>
              <button
                type="button"
                style={{
                  flex: 1,
                  padding: "11px",
                  backgroundColor: "#1a1a1a",
                  border: "1px solid #262626",
                  borderRadius: "10px",
                  color: "#d4d4d4",
                  fontSize: "13px",
                  fontWeight: 500,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24">
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
                Google
              </button>
              <button
                type="button"
                style={{
                  flex: 1,
                  padding: "11px",
                  backgroundColor: "#1a1a1a",
                  border: "1px solid #262626",
                  borderRadius: "10px",
                  color: "#d4d4d4",
                  fontSize: "13px",
                  fontWeight: 500,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#d4d4d4">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </button>
              <button
                type="button"
                style={{
                  flex: 1,
                  padding: "11px",
                  backgroundColor: "#1a1a1a",
                  border: "1px solid #262626",
                  borderRadius: "10px",
                  color: "#d4d4d4",
                  fontSize: "13px",
                  fontWeight: 500,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#d4d4d4"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Apple
              </button>
            </div>
          </form>
        </div>

        {/* Bottom text outside card */}
        <p
          style={{
            textAlign: "center",
            marginTop: "24px",
            fontSize: "14px",
            color: "#525252",
          }}
        >
          New to HarleyDemo?{" "}
          <a
            href="#"
            style={{
              color: "#10b981",
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

export default LoginDesign4;
