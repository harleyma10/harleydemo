import { ReactNode } from "react";
import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "eCommerce Dashboard",
  description: "Admin dashboard for ecommerce management",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        <main className="ml-64 min-h-screen p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
