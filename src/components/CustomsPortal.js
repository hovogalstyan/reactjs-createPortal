import React from 'react';
import {createPortal} from "react-dom";

const CustomsPortal = ({children,close, ...props}) => {
    return (
        createPortal(
            <div  {...props}>
                {children}
            </div>,
            document.getElementById('root')
        )
    );
};

export default CustomsPortal;