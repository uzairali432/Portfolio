import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata = {
  title: "Syed Uzair Ali - Front-End Developer",
  description:
    "Professional portfolio showcasing front-end development projects and skills in React, Next.js, and modern web technologies.",
  keywords: "front-end developer, react, next.js, web development, portfolio",
  authors: [{ name: "Syed Uzair Ali" }],
  openGraph: {
    title: "Syed Uzair Ali - Front-End Developer",
    description: "Professional portfolio showcasing front-end development projects and skills.",
    type: "website",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6366f1",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
