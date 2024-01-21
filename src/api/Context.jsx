import { createContext, useState } from 'react';

export const ResponseDataContext = createContext(null);

export const ResponseDataProvider = ({ children }) => {
    const [open, setOpen] = useState(true)

    return (
        <ResponseDataContext.Provider value={{ open, setOpen }}>
            {children}
        </ResponseDataContext.Provider>
    );
};