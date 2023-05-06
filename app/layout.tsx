import { ClerkProvider } from '@clerk/nextjs/app-beta'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
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
      <ClerkProvider>
        <body>
          {/* @ts-expect-error Async Server Component */}
          <Header />
          <main className='container m-auto'>
            {children}
          </main>
          <Footer />
        </body>
      </ClerkProvider>
    </html>
  )
}
