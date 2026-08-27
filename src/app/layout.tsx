import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARCHITECT.IO - Principal Engineer",
  description: "Principal Systems Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="text-on-surface antialiased flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
