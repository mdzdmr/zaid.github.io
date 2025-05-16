import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
      <body className={inter.className}>
        {children}
        
        {/* Google Tag Manager - using next/script properly */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CJJBT43FX1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CJJBT43FX1');
          `}
        </Script>
      </body>
    </html>
  );
}
