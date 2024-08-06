"use client"
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Preload from "@/components/preload";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import "@fontsource/bebas-neue";
import { Urbanist } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { useEffect, useState } from "react";
import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });

// No incluir aquí la exportación de metadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="es">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={urbanist.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader
            color="#2299DD"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          />
          {loading ? (
            <Preload />
          ) : (
            <>
              <Navbar />
              {children}
              <Toaster />
              <Footer />
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
