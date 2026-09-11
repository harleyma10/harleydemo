import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harley Demo — E-commerce Dashboard",
  description:
    "The all-in-one e-commerce dashboard to manage orders, products, and analytics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
