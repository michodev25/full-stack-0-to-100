import React from 'react'
import { useState, useImperativeHandle, forwardRef } from 'react';

export const Toggle = forwardRef(({ children,buttonLabel }, ref) => {
    const [loginVisible, setLoginVisible] = useState(false);
    const hideWhenVisible = { display: loginVisible ? 'none' : '' };
    const showWhenVisible = { display: loginVisible ? '' : 'none' };

    const toggleVsibility = () => {
        setLoginVisible(!loginVisible);
    }

    useImperativeHandle(ref, () => {
        return {
           toggleVsibility
        }
    })
    

    return (
        <div>
            <div style={hideWhenVisible}> <button onClick={toggleVsibility}>{buttonLabel}</button></div>
            <div style={showWhenVisible}>
                {children}
                <button onClick={toggleVsibility}>Cancel</button>
            </div>
        </div>
    )
}
);