import { Open_Sans, Prompt } from "@next/font/google"
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"]
})

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["400"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={prompt.className}>
      <head />
      <body>{children}</body>
    </html>
  )
}
