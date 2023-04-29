import './globals.css'

export const metadata = {
  title: 'Travel app',
  description: 'Travel app built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
