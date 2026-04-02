import { ReactNode } from "react";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
  title: "E-commerce Dashboard",
  description: "Customer login and dashboard",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
