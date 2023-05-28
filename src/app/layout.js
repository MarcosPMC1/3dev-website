import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '3DEV',
  description: '3DEV',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className='scroll-smooth'>
      <head>
        <link rel='shortcut icon' href='/p.png' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
