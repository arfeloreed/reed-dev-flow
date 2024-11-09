import type { Metadata } from "next";
import "@styles/globals.css";

export const metadata: Metadata = {
  title: "Reed DevFlow",
  description: "A better version of StackOverFlow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
