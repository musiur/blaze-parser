import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.scss";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/navbar";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/layout/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Blaze Parser",
  description:
    "Blaze Parser is a resume/CV parser that predicts salary expectations",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Navbar />
        <main className="min-h-[85dvh]">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
