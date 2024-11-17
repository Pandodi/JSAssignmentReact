import React, { useEffect, useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'

const MobileNavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef(null);
    const burgerRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (e) => {
        if (
            menuRef.current && !menuRef.current.contains(e.target) &&
            burgerRef.current && !burgerRef.current.contains(e.target)
        ) {
            setIsOpen(false)
        }
      }

      document.addEventListener('mousedown', handleClickOutside);
    
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [])
    
    
    const toggleMenu = (e) => {
        setIsOpen((open) => !open);
    }

    return (
        <>
        

        <div className={"navbar-mobile"}>
            <nav ref={burgerRef} onClick={toggleMenu} className="btn-burger-menu"><img src='./src/assets/images/Button - Toggle navigation.svg' alt="" /></nav>
            <ul ref={menuRef} className={`burger-menu-drop ${isOpen ? "is-open" : ""}`}>
                <li>
                    <NavLink onClick={toggleMenu} to="/#"><nav>Home</nav></NavLink>
                </li>
                <li>
                    <NavLink to="/contact"><nav>Contact</nav></NavLink>    
                </li>
            </ul>
        </div>
        </>
        
  )
}

export default MobileNavBar