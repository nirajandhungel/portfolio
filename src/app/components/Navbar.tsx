'use client'
import React from 'react'

const Navbar = () => {
  const [isMobile, setIsMobile] = React.useState <boolean>(false)
  const toggleMobileMenu = () => {
    setIsMobile(!isMobile)
  }
  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ]
  return (
    <nav className=" fixed w-full  bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50">Navbar</nav>
  )
}

export default Navbar
