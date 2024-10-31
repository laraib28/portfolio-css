"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "../style/header.css"
import { FaBars } from "react-icons/fa"

// Define the component type
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const onClickHandler = () => {
    setIsOpen(!isOpen) // This will toggle between true and false
  }

  return (
    <header className='left-side'>
      <button title='menu button' onClick={onClickHandler} className="button">
        <FaBars size={24} className="ml-3" />
      </button>
      <div className='logo'>
        <Image src="/logo.png" alt='logo' height={50} width={50} />
      </div>

      <nav className='right-side'>
        <ul className='links'>
          <li><Link className='link' href="/">Home</Link></li>
          <li><Link className='link' href="/about">About</Link></li>
          <li><Link className='link' href="/contact">Contact</Link></li>
        </ul>
      </nav>
      
      {isOpen && (
        <nav className="mobile-menu">
          <ul className="mobile-links">
            <li><Link href="/" onClick={onClickHandler}>Home</Link></li>
            <li><Link href="/about" onClick={onClickHandler}>About</Link></li>
            <li><Link href="/contact" onClick={onClickHandler}>Contact</Link></li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
