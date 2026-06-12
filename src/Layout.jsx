import React from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import { SpeedInsights } from '@vercel/speed-insights/react'

function Layout() {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
        <SpeedInsights />
    </div>
  )
}

export default Layout