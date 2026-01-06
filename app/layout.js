import { Geist, Geist_Mono } from "next/font/google";
import { NavComponent } from "@/components";
import "./globals.css";
import { cn } from "@/lib";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ASTRAH OS",
  description: "ASTAH OS",
};

const getRootStyle = () => cn(`${geistSans.variable} ${geistMono.variable} antialiased h-screen`);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={getRootStyle()}
      >
        <NavComponent />
        {children}
      </body>
    </html>
  );
}
