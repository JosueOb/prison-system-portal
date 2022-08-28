import React, { useState } from 'react';
import { AlertContext } from './AlertContext';

export const AlertProvider = ({ children }) => {
    const [message, setMessage] = useState(undefined);
    const [type, setType] = useState(undefined);

    const showAlert = (message, type) => {
        setMessage(message);
        setType(type)
    }
    const removeAlert = () => {
        setMessage(undefined);
        setType(undefined);
    }

    return (
        <AlertContext.Provider value={{
            message,
            type,
            showAlert: showAlert,
            removeAlert: removeAlert
        }}>
            {children}
        </AlertContext.Provider>
    );
}
