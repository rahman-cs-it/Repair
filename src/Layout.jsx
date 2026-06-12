import React, { Suspense } from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function Layout() {
  return (
    <div>
      <Header />
      <Suspense fallback={
        <div className="flex items-center justify-center h-screen text-blue-600 text-lg font-semibold">
          Loading...
        </div>
      }>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <Footer />
    </div>
  )
}

export default Layout