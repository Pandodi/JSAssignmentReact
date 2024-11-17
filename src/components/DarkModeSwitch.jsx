import React, { useEffect, useState } from 'react'



const DarkModeSwitch = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode)

        if (newMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('darkmode', 'on')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('darkmode', 'off')
        }
    }

    useEffect(() => {
        const savedMode = localStorage.getItem('darkmode')
        if (savedMode === 'on') {
            setIsDarkMode(true)
            document.documentElement.classList.add('dark');
        } else {
            setIsDarkMode(false)
            document.documentElement.classList.remove('dark');
        }
    }, []);

    return (
        <div className="dark-mode-switch">
            <h5 className="dark-mode-text">Dark Mode</h5>
            <label className="switch-button" htmlFor="darkmode-switch">
                <input checked={isDarkMode} onChange={toggleDarkMode}  id="darkmode-switch" type="checkbox" />
                <span className="slider round"></span>
            </label>
        </div>
  )
}

export default DarkModeSwitch