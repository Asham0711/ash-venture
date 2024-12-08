import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster"
import AuthProvider from "@/context/AuthProvider";
import MobileNavbar from "@/components/MobileNavbar";
import Footer from "@/components/Footer";
import MobileFooter from "@/components/MobileFooter";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ashventure",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <AuthProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className='hidden md:block'>
            <Navbar />
          </div>
          <div className='block md:hidden'>
            <MobileNavbar />
          </div>
          {children}
          <div className='hidden md:block'>
            <Footer />
          </div>
          <div className='block md:hidden'>
            <MobileFooter />
          </div>
          <Toaster/>
        </body>
      </AuthProvider>
      
    </html>
  );
}
