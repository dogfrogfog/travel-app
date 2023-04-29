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
          <Header />
          <main className='w-2/3 m-auto'>
            {children}
          </main>
          <Footer />
        </body>
      </ClerkProvider>
    </html>
  )
}
