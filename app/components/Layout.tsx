'use client'

import { LayoutProps } from '@/types'
import React, { useEffect } from 'react'
import { Navbar } from './Navbar'
import { usePathname } from 'next/navigation'


function Layout({ lang, children, className }: LayoutProps) {
  const pathname = usePathname()
  const hiddenPaths = ['/login', '/register', '/resetPassword']

  useEffect(() => {
    if(typeof window !== 'undefined') {
      require('bootstrap/dist/js/bootstrap.min.js')
    }



  }, [])

  return (
    <html lang={lang}>
      <body className={className}>
        {hiddenPaths.includes(pathname) ? null : <Navbar />}
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}

export default Layout