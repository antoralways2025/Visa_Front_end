import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Global Visa Hub | Your Journey Starts Here",
  description: "Student visa guidance and study abroad consultancy for students from Bangladesh.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
