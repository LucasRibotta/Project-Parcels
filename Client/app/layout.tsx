import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar/Navbar"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div lang="en">
      <Navbar />
      <body className={inter.className}>{children}</body>
    </div>
  )
}
