import './globals.css'
import React from 'react'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { Header } from '@/component'
import { cx } from '@/helper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ruong Nguyen Trong',
  description: 'Hi, I am Ruong',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/favicon-light.ico'
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/favicon-dark.ico'
      }
    ]
  }
}

type RootLayoutProps = React.PropsWithChildren

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              'function initTheme(){"dark"===(localStorage.getItem("app-theme")||"light")?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}initTheme();'
          }}
        />
      </head>
      <body className={cx(inter.className, 'bg-slate-50 text-neutral-950 dark:bg-neutral-900 dark:text-white')}>
        <Header />
        <main className='pt-[68px]'>{children}</main>
      </body>
    </html>
  )
}
