"use client";

import React, { useState } from "react";

const LoginDesign3 = () => {
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
        background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        padding: "20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated gradient orbs */}
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)",
          top: "-100px",
          right: "-100px",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)",
          bottom: "-80px",
          left: "-80px",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)",
          top: "50%",
          left: "20%",
        }}
      />

      {/* Glassmorphism Card */}
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderRadius: "24px",
          padding: "48px 40px",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              background: "linear-gradient(135deg, #6366f1, #a855f7)",
              borderRadius: "16px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
              boxShadow: "0 4px 16px rgba(99,102,241,0.4)",
            }}
          >
            <span
              style={{ color: "#ffffff", fontSize: "28px", fontWeight: "bold" }}
            >
              H
            </span>
          </div>
          <h1
            style={{
              fontSize: "26px",
              fontWeight: 700,
              color: "#ffffff",
              margin: "0 0 8px 0",
            }}
          >
            Welcome back
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "14px",
              margin: 0,
            }}
          >
            Enter your credentials to access your dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                fontSize: "13px",
                fontWeight: 500,
                color: "rgba(255,255,255,0.7)",
                marginBottom: "8px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              style={{
                width: "100%",
                padding: "14px 16px",
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "12px",
                fontSize: "14px",
                color: "#ffffff",
                outline: "none",
                boxSizing: "border-box",
                transition: "border-color 0.2s, background 0.2s",
              }}
            />
          </div>

          <div style={{ marginBottom: "28px" }}>
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
                  color: "rgba(255,255,255,0.7)",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Password
              </label>
              <a
                href="#"
                style={{
                  fontSize: "13px",
                  color: "#a78bfa",
                  textDecoration: "none",
                }}
              >
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
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "12px",
                fontSize: "14px",
                color: "#ffffff",
                outline: "none",
                boxSizing: "border-box",
                transition: "border-color 0.2s, background 0.2s",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
              color: "#ffffff",
              border: "none",
              borderRadius: "12px",
              fontSize: "15px",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 4px 16px rgba(99,102,241,0.35)",
              transition: "transform 0.2s, box-shadow 0.2s",
              marginBottom: "16px",
            }}
          >
            Sign in
          </button>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              margin: "24px 0",
            }}
          >
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "rgba(255,255,255,0.12)",
              }}
            />
            <span
              style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.4)",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              or
            </span>
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "rgba(255,255,255,0.12)",
              }}
            />
          </div>

          <div style={{ display: "flex", gap: "12px" }}>
            <button
              type="button"
              style={{
                flex: 1,
                padding: "12px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "12px",
                color: "#ffffff",
                fontSize: "14px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google
            </button>
            <button
              type="button"
              style={{
                flex: 1,
                padding: "12px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "12px",
                color: "#ffffff",
                fontSize: "14px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </button>
          </div>
        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: "28px",
            fontSize: "14px",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          Don&apos;t have an account?{" "}
          <a
            href="#"
            style={{
              color: "#a78bfa",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Create one
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginDesign3;
