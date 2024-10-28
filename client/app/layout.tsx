// app/layout.tsx
import { Poppins } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: "Connect: Fostering Collaboration & Synergy.",
  description: "Building a community with the right tools, resources, and network needed to turn bold ideas into impactful realities.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/icon.png",
        href: "/icon.png"
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/icon.png",
        href: "/icon.png",
      },
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-poppins antialiased", poppins.variable)}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}