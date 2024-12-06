import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MainLayout() {
  return (
    <div>
        <nav>
          <Navbar/>
        </nav>
        <main>
          <Outlet/>
        </main>
        <div>
          <Footer/>
        </div>
    </div>
  )
}
