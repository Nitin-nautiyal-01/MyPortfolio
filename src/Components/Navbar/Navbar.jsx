import React, { useRef, useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
export default function Navbar() {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }
  return (
    <div className='navbar'>
        <h1>Nitin</h1>
        <img src = {menu_open} className='nav-mob-open' onClick={openMenu}/>
        <ul ref={menuRef} className="nav-menu">
          <img src={menu_close} alt="" className="nav-mob-close"  onClick={closeMenu}/>
            <li><AnchorLink className='anchorlink' href='#hero'>Home</AnchorLink></li>
            <li><AnchorLink className='anchorlink' offset={50} href='#about'>About me</AnchorLink></li>
            <li><AnchorLink className='anchorlink' offset={50} href='#educa'>Education</AnchorLink></li>
            <li><AnchorLink className='anchorlink' offset={50} href='#work'>Portfolio</AnchorLink></li>
            <li><AnchorLink className='anchorlink' offset={50} href='#contact'>Contact</AnchorLink></li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchorlink' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}
