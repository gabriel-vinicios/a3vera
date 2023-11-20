import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header class="absolute top-0 left-0 right-0 z-20">
            <nav class="container mx-auto px-6 md:px-12 py-4" x-data="{ open: false }">
                <div class="md:flex justify-between items-center">
                    <div class="flex justify-between items-center">
                        <a href="#" class="text-white">
                        </a>
    
                        <div class="md:hidden">
                            <button class="text-white focus:outline-none">
                                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path x-show="open === false" d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path x-show="open === true" d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
    
                    <div class="hidden md:flex items-center">
                        <a href='/about-us' class="text-sm uppercase mx-3 text-red-400 cursor-pointer hover:text-indigo-600">About Us</a>
                        <a href='/content' class="text-sm uppercase mx-3 text-red-400 cursor-pointer hover:text-indigo-600">Content</a>
                        <a href='/tips' class="text-sm uppercase mx-3 text-red-400 cursor-pointer hover:text-indigo-600">Tips</a>
                    </div>
                </div>
    
                <div x-show="open === true" class="md:hidden flex flex-col w-full z-40 bg-indigo-600 rounded mt-4 py-2 overflow-hidden">
                    <a href='/about-us' class="font-mitr text-sm uppercase text-red-400 py-2 px-2 hover:bg-indigo-500">About Us</a>
                    <a href='/content' class="font-mitr text-sm uppercase text-red-400 py-2 px-2 hover:bg-indigo-500">Content</a>
                    <a href='/tips' class="font-mitr text-sm uppercase text-red-400 py-2 px-2 hover:bg-indigo-500">Tips</a>
                </div>
            </nav>
        </header>
        {children}</body>
    </html>
  )
}
