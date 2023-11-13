import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {Providers} from './providers'
import { ConnectWallet } from '@/components/ConnectWallet';
import { NavBar } from '@/components/NavBar';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Final project',
  description: 'Chiliz bootcamp final project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
          <ConnectWallet />
        </Providers>
      </body>
    </html>
  )
}
