import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MESTRIA - Knowledge Retention",
  description: "Transform tacit knowledge into strategic assets",
  icons: {
    icon: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
