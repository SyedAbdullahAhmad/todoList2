
import React from 'react'
import { createContext } from 'react'
import { useEffect, useRef } from 'react';
export const creatingContext = createContext();
export const CreatingContextProvider = ({ children }) => {

    const handleFocus = useRef();
    useEffect(() => {
        handleFocus.current.focus();
    });


    return (
        <creatingContext.Provider value={{ handleFocus }}>
            {children}
        </creatingContext.Provider>
    );
}



