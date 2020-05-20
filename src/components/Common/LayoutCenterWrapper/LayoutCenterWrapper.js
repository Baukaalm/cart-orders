import React from 'react';
import './styles.css'
const LayoutCenterWrapper = ({children}) => {
    return (
        <div className="layout-center-wrapper">
            {children}
        </div>
    );
}

export default LayoutCenterWrapper;