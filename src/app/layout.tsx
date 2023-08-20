import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { AuthProvider } from "@/context/auth-provider";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";
import { Navbar } from "@/components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextAuth Starter TS",
  description: "NextAuth Starter app with TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <Navbar />
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
