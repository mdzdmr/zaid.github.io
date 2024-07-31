import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mdzdmr 🚀",
  description: "Welcome!",
  icons: {
    icon: "/pfp.jpg",
  },
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <head>
        <link rel="icon" href="/pfp.jpg" />
      </head>
      <body className={inter.className}>{children}</body>
      </html>
  );
}
