import React from 'react'
import { useState } from 'react';

export const Toggle = ({ children,buttonLabel }) => {
    const [loginVisible, setLoginVisible] = useState(false);
    const hideWhenVisible = { display: loginVisible ? 'none' : '' };
    const showWhenVisible = { display: loginVisible ? '' : 'none' };
    return (
        <div>
            <div style={hideWhenVisible}> <button onClick={() => setLoginVisible(true)}>{buttonLabel}</button></div>
            <div style={showWhenVisible}>
                {children}
                <button onClick={() => setLoginVisible(false)}>Cancel</button>
            </div>
        </div>
    )
}
