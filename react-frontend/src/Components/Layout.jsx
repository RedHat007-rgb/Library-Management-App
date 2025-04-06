import React from 'react'
import Header from './Header'
import { Link, Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <div >
      <Header />
        <Outlet/>
      <Footer/> 
    </div>
  )
}

export default Layout
