"use client";

import React, { useState } from "react";

const LoginDesign6 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
        background: "#f0f4f8",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "440px",
          backgroundColor: "#ffffff",
          borderRadius: "20px",
          padding: "48px 40px",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
        }}
      >
        {/* Avatar */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
              boxShadow: "0 8px 24px rgba(102,126,234,0.3)",
            }}
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#1a1a2e", margin: "0 0 8px 0" }}>
            Sign in to your account
          </h1>
          <p style={{ color: "#8492a6", fontSize: "15px", margin: 0 }}>
            Good to see you again!
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                border: "2px solid #e8ecf4",
                borderRadius: "14px",
                padding: "0 16px",
                transition: "border-color 0.2s",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8492a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                style={{
                  flex: 1,
                  padding: "16px 12px",
                  border: "none",
                  fontSize: "15px",
                  outline: "none",
                  background: "transparent",
                  color: "#1a1a2e",
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: "16px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                border: "2px solid #e8ecf4",
                borderRadius: "14px",
                padding: "0 16px",
                transition: "border-color 0.2s",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8492a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                style={{
                  flex: 1,
                  padding: "16px 12px",
                  border: "none",
                  fontSize: "15px",
                  outline: "none",
                  background: "transparent",
                  color: "#1a1a2e",
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "4px",
                  display: "flex",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8492a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {showPassword ? (
                    <>
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </>
                  ) : (
                    <>
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: "28px",
            }}
          >
            <a href="#" style={{ fontSize: "14px", color: "#667eea", textDecoration: "none", fontWeight: 500 }}>
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "16px",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "#ffffff",
              border: "none",
              borderRadius: "14px",
              fontSize: "16px",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 8px 24px rgba(102,126,234,0.3)",
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
            <div style={{ flex: 1, height: "1px", background: "#e8ecf4" }} />
            <span style={{ fontSize: "13px", color: "#8492a6" }}>or continue with</span>
            <div style={{ flex: 1, height: "1px", background: "#e8ecf4" }} />
          </div>

          <div style={{ display: "flex", gap: "12px" }}>
            <button
              type="button"
              style={{
                flex: 1,
                padding: "14px",
                backgroundColor: "#fff",
                border: "2px solid #e8ecf4",
                borderRadius: "14px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
            </button>
            <button
              type="button"
              style={{
                flex: 1,
                padding: "14px",
                backgroundColor: "#fff",
                border: "2px solid #e8ecf4",
                borderRadius: "14px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#1a1a2e">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </button>
            <button
              type="button"
              style={{
                flex: 1,
                padding: "14px",
                backgroundColor: "#fff",
                border: "2px solid #e8ecf4",
                borderRadius: "14px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#1a1a2e">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
            </button>
          </div>
        </form>

        <p style={{ textAlign: "center", marginTop: "28px", fontSize: "14px", color: "#8492a6" }}>
          Don&apos;t have an account?{" "}
          <a href="#" style={{ color: "#667eea", textDecoration: "none", fontWeight: 600 }}>
            Create account
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginDesign6;
