import { createContext, useState } from "react";

export const UserContext = createContext({
    userData: null,
    properties: null,
    setUserData: () => { },
    setProperties: () => { }
})

export const UserContextProvider = ({ children, initial = {} }) => {
    const [userData, setUserData] = useState(initial)
    const [properties, setProperties] = useState([])
    const token = sessionStorage.getItem('token')

    return (
        <UserContext.Provider value={{ userData, setUserData, token, properties, setProperties }}>
            {children}
        </UserContext.Provider>
    )
}