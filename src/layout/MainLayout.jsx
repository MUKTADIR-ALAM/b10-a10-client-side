import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Toaster } from 'react-hot-toast'

export default function MainLayout() {
  return (
    <div>
      <Toaster />
        <nav>
          <Navbar/>
        </nav>
        <main className="min-h-screen">
          <Outlet/>
        </main>
        <div>
          <Footer/>
        </div>
    </div>
  )
}
