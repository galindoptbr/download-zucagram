import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Download Zucagram",
  description: "Faca o download do zucagram na apple store ou na play store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0D0D0D] text-white">{children}</body>
    </html>
  );
}
