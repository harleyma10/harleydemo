"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Registration failed");
        return;
      }

      router.push("/auth/login?registered=true");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "80px auto", padding: "20px" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "24px", textAlign: "center" }}>
        Create Account
      </h1>

      {error && (
        <div
          style={{
            background: "#fee2e2",
            color: "#dc2626",
            padding: "12px",
            borderRadius: "6px",
            marginBottom: "16px",
            fontSize: "14px",
          }}
        >
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "16px" }}>
          <label
            htmlFor="name"
            style={{ display: "block", marginBottom: "6px", fontSize: "14px", fontWeight: 500 }}
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 12px",
              border: "1px solid #d1d5db",
              borderRadius: "6px",
              fontSize: "14px",
              boxSizing: "border-box",
            }}
            placeholder="Your name"
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label
            htmlFor="email"
            style={{ display: "block", marginBottom: "6px", fontSize: "14px", fontWeight: 500 }}
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px 12px",
              border: "1px solid #d1d5db",
              borderRadius: "6px",
              fontSize: "14px",
              boxSizing: "border-box",
            }}
            placeholder="you@example.com"
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label
            htmlFor="password"
            style={{ display: "block", marginBottom: "6px", fontSize: "14px", fontWeight: 500 }}
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            style={{
              width: "100%",
              padding: "10px 12px",
              border: "1px solid #d1d5db",
              borderRadius: "6px",
              fontSize: "14px",
              boxSizing: "border-box",
            }}
            placeholder="At least 6 characters"
          />
        </div>

        <div style={{ marginBottom: "24px" }}>
          <label
            htmlFor="confirmPassword"
            style={{ display: "block", marginBottom: "6px", fontSize: "14px", fontWeight: 500 }}
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength={6}
            style={{
              width: "100%",
              padding: "10px 12px",
              border: "1px solid #d1d5db",
              borderRadius: "6px",
              fontSize: "14px",
              boxSizing: "border-box",
            }}
            placeholder="Confirm your password"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: loading ? "#9ca3af" : "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Creating account..." : "Create Account"}
        </button>
      </form>

      <p style={{ textAlign: "center", marginTop: "16px", fontSize: "14px" }}>
        Already have an account?{" "}
        <a href="/auth/login" style={{ color: "#2563eb", textDecoration: "underline" }}>
          Sign in
        </a>
      </p>
    </div>
  );
};

export default RegisterPage;
