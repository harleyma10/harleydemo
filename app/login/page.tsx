import React from "react";

const designs = [
  {
    id: 1,
    name: "Minimal Clean",
    description:
      "A simple, centered card on a light gray background with clean typography and a focused form layout.",
    path: "/login/design1",
    colors: ["#f5f5f5", "#4f46e5"],
  },
  {
    id: 2,
    name: "Split Screen",
    description:
      "A two-panel layout with a branded left side featuring a gradient and messaging, and a form on the right with social login options.",
    path: "/login/design2",
    colors: ["#667eea", "#764ba2"],
  },
  {
    id: 3,
    name: "Gradient Glassmorphism",
    description:
      "A dark gradient background with floating orbs and a frosted glass card. Features social login buttons and a modern aesthetic.",
    path: "/login/design3",
    colors: ["#302b63", "#6366f1"],
  },
  {
    id: 4,
    name: "Dark Theme",
    description:
      "A sleek dark interface with a subtle grid pattern, teal-cyan accent gradient, and three social login providers.",
    path: "/login/design4",
    colors: ["#0a0a0a", "#10b981"],
  },
  {
    id: 5,
    name: "Warm Testimonial",
    description:
      "A split layout with the form on the left and an orange-gradient right panel featuring a customer testimonial quote.",
    path: "/login/design5",
    colors: ["#ff6b35", "#f7931e"],
  },
  {
    id: 6,
    name: "Soft Rounded",
    description:
      "A clean card with a user avatar icon, icon-adorned inputs with a show/hide password toggle, and soft rounded corners throughout.",
    path: "/login/design6",
    colors: ["#667eea", "#764ba2"],
  },
  {
    id: 7,
    name: "Warm Card",
    description:
      "A peach gradient background with a white rounded card containing a branded left panel and form on the right, with a carousel indicator.",
    path: "/login/design7",
    colors: ["#e44d26", "#fca326"],
  },
  {
    id: 8,
    name: "Neon Cyber",
    description:
      "A deep navy background with geometric circle outlines, a pink-to-cyan gradient accent, and a gradient text signup link.",
    path: "/login/design8",
    colors: ["#1a1a2e", "#e64980"],
  },
];

const LoginIndex = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#fafafa",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        padding: "60px 24px",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "32px",
            fontWeight: 700,
            color: "#111",
            marginBottom: "8px",
            textAlign: "center",
          }}
        >
          Login Page Designs
        </h1>
        <p
          style={{
            fontSize: "16px",
            color: "#666",
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          Choose from 8 different login page designs for your e-commerce
          dashboard
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
            gap: "24px",
          }}
        >
          {designs.map((design) => (
            <a
              key={design.id}
              href={design.path}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
              }}
            >
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid #e5e7eb",
                  transition: "box-shadow 0.2s, transform 0.2s",
                  cursor: "pointer",
                }}
              >
                {/* Color preview bar */}
                <div
                  style={{
                    height: "120px",
                    background: `linear-gradient(135deg, ${design.colors[0]} 0%, ${design.colors[1]} 100%)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      color: "#ffffff",
                      fontSize: "18px",
                      fontWeight: 600,
                      textShadow: "0 1px 4px rgba(0,0,0,0.3)",
                    }}
                  >
                    Design {design.id}
                  </span>
                </div>
                <div style={{ padding: "20px 24px 24px" }}>
                  <h2
                    style={{
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "#111",
                      margin: "0 0 8px 0",
                    }}
                  >
                    {design.name}
                  </h2>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#6b7280",
                      margin: 0,
                      lineHeight: 1.6,
                    }}
                  >
                    {design.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginIndex;
