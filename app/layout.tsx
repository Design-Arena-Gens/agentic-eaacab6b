import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "VoltSense - Control your energy. Save every month.",
  description: "VoltSense learns your home's patterns to cut waste without cutting comfort. Smart home energy monitoring with real-time insights.",
  keywords: ["energy monitoring", "smart home", "home automation", "energy savings", "MQTT", "Home Assistant"],
  openGraph: {
    title: "VoltSense - Smart Home Energy Monitor",
    description: "Control your energy. Save every month.",
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
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
