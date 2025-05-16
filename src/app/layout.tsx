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
        {/* Google Tag Manager */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-CJJBT43FX1"></script>
          <script
              dangerouslySetInnerHTML={{
                  __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CJJBT43FX1');
            `,
              }}
          />
          {/* End Google Tag Manager */}
      </head>
      <body className={inter.className}>{children}</body>
      </html>
  );
}
