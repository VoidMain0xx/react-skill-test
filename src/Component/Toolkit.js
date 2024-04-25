// Tooltip.js
import React, { useState } from 'react';
import './Tooltip.css'; // Styling for the tooltip

const Tooltip = ({ position, text, children }) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleMouseEnter = () => {
        setIsVisible(true);
    };

    const handleMouseLeave = () => {
        setIsVisible(false);
    };

    return (
        <div className="tooltip-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {children}
            {isVisible && (
                <div className={`tooltip ${position}`}>
                    <span>{text}</span>
                </div>
            )}
        </div>
    );
};

export default Tooltip;
