import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Developer Portfolio',
  description: 'Personal portfolio website showcasing my projects and skills',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-[#1A1B1E] text-gray-900 dark:text-white min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <nav className="fixed top-0 w-full bg-white/80 dark:bg-[#1A1B1E]/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-6xl mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <Link href="/" className="text-xl font-bold text-purple-600 dark:text-purple-400">.Portfolio</Link>
                <div className="flex items-center gap-6">
                  <Link href="/" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Home</Link>
                  <Link href="/projects" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Projects</Link>
                  <Link href="/skills" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Skills</Link>
                  <Link href="/about" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">About</Link>
                  <Link href="/contact" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Contact</Link>

                </div>
              </div>
            </div>
          </nav>
          <main className="pt-16">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}