import React from 'react';
import { FaAdjust } from 'react-icons/fa';
import './toggletheme.css';

const ToggleTheme = () => {

    const handleClick = () => {
            document.body.classList.toggle("light-mode");
    }

    return (
        <>
            <div className="theme-btn" onClick={handleClick}>
                <i><FaAdjust /></i>
            </div>
        </>
    )
}

export default ToggleTheme
