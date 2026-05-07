import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata = {
  title: "Syed Uzair Ali - MERN Stack Developer",
  description:
    "Professional portfolio showcasing full-stack development projects and skills in MongoDB, Express, React, and Node.js.",
  keywords: "MERN stack developer, react, node.js, mongodb, express, full-stack, web development, portfolio",
  authors: [{ name: "Syed Uzair Ali" }],
  openGraph: {
    title: "Syed Uzair Ali - MERN Stack Developer",
    description: "Professional portfolio showcasing full-stack development projects and skills.",
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const shouldBeDark = theme === 'dark' || (!theme && prefersDark);
                if (shouldBeDark) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
