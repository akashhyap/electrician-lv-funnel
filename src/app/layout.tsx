import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";

export const metadata: Metadata = {
  title: "Special Offer - Professional EV Charger Installation & Maintenance Service",
  description: "Get your electric vehicle charger installed and maintained by certified professionals. Special subscription service with 24-48 hour response time.",
  keywords: "EV charger installation, electric vehicle, home charging, EV maintenance, professional installation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
