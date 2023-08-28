import './globals.css'
import { Inter } from 'next/font/google'
import NavItem from './components/navItem'
import Nav from './components/nav'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Estevão Sipitali',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-950`}>
      
      <main className="flex flex-col   bg-zinc-950 h-screen w-full">
        {children}
      </main>
      </body>
    </html>
  )
}

