import { createContext, useEffect, useState } from "react";


export const MyContext = createContext()

const urlBase = "https://fakestoreapi.com/products";
export const MyProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [user, setUser] = useState(null)


    const login = () => {
        setUser({
            id: 123,
            name: "Juan"
        })
    }

    const logout = () => {
        setUser(null)
    }


const getProduct = async () => {
    const response = await fetch(urlBase);
    const data = await response.json();
    setProducts(data);
    }
    
    useEffect(() => {
        getProduct()
    }, [])



   
    return (
        <MyContext.Provider value={{products, user, login, logout}}>
            {children}
        </MyContext.Provider>
    )
}