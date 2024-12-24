import './globals.css'
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: 'BAAP Litepaper',
  description: 'Blockchain Agnostic Agent Protocol (BAAP) Litepaper',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <div className="relative min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}

