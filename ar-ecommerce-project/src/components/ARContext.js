// src/components/ARContext.js
import React, { createContext, useState, useContext } from 'react';

const ARContext = createContext();

export const ARProvider = ({ children }) => {
    const [objectType, setObjectType] = useState('box');

    return (
        <ARContext.Provider value={{ objectType, setObjectType }}>
            {children}
        </ARContext.Provider>
    );
};

export const useAR = () => useContext(ARContext);
