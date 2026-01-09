import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider, GradientBackground } from "@/components";
import SkipLink from "@/components/ui/SkipLink";

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
        <SkipLink />
        <ThemeProvider>
          <GradientBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
