import { useEffect } from "react";
import DarkModeSwitch from "./DarkModeSwitch"
import { NavLink, useLocation } from "react-router-dom"
import MobileNavBar from "./MobileNavBar";

const Header = ({onFeaturesClick}) => {

    const location = useLocation();

    useEffect(() => {
        const header = document.querySelector('header')
        
        if (location.pathname === '/contact') {
            header.classList.add('contact-header')
        } else {
            header.classList.remove('contact-page');
        }

        return () => {
            header.classList.remove('contact-page');
        };
      }, [location]);

    const returnMessage = () => {
        alert('This function is currently not available.')
    }

    return (
        <header>
        <div className="header-container">
            <div className="left-side-header">
                <a className="header-logo" href="/"><img src='./src/assets/images/Link.svg' alt="NavLogo"/></a>
                <a className="header-logo dark-mode" href="/"><img src='./src/assets/images/logo-dark-mode.svg' alt="Logo-Dark-Mode"/></a>
                <NavLink to="/contact"><nav className="header-features">Contact</nav></NavLink>
                <NavLink to="/"><nav className="header-features" onClick={onFeaturesClick}>Features</nav></NavLink>
            </div>
            
            <div className="right-side-header">
                <DarkModeSwitch />
                <div className="sign-in-button">
                    <a href="#">
                        <i className="fa-regular fa-user"></i>
                        <span onClick={returnMessage}>Sign in / up</span>
                    </a>
                </div>
                <MobileNavBar/>
            </div>
            
        </div>
    </header>
    )
}

export default Header