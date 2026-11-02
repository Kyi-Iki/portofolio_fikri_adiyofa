import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fikri Adiyofa — UI/UX Designer & Developer",
  description:
    "Portfolio of Fikri Adiyofa, a UI/UX Designer and Developer crafting clean, user-centric digital experiences with modern technologies.",
  keywords: ["UI/UX Designer", "Developer", "Portfolio", "Fikri Adiyofa", "Web Design"],
  authors: [{ name: "Fikri Adiyofa" }],
  openGraph: {
    title: "Fikri Adiyofa — UI/UX Designer & Developer",
    description:
      "Portfolio of Fikri Adiyofa, crafting clean, user-centric digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
