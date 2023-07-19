import { createContext, useContext, useState } from "react";

const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(null)

    return (
        <DataContext.Provider value={{ setAuthToken, authToken }}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext)