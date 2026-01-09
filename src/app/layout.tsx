import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abu Hasan Al Mobarak | Senior Frontend Developer",
  description: "Senior Frontend Developer with 7+ years of experience building scalable web applications using React, TypeScript, and modern JavaScript. Proven track record of optimizing performance and creating design systems.",
  keywords: ["Frontend Developer", "React", "TypeScript", "Next.js", "Web Developer", "JavaScript"],
  authors: [{ name: "Abu Hasan Al Mobarak" }],
  openGraph: {
    title: "Abu Hasan Al Mobarak | Senior Frontend Developer",
    description: "Senior Frontend Developer with 7+ years of experience building scalable web applications.",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="gradient-bg">
            <div className="gradient-orb gradient-orb-1"></div>
            <div className="gradient-orb gradient-orb-2"></div>
            <div className="gradient-orb gradient-orb-3"></div>
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
