"use client"

import { createContext, useContext, useState, useEffect } from "react"

const GlobalContext = createContext({
    userId: "",
    setUserId: () => {},
    markerData: ["", ""],
    setMarkerData: () => {}
})

export const GlobalContextProvider = ({ children }) => {
    const [userId, setUserId] = useState("")
    const [markerData, setMarkerData] = useState(["", ""])
    const [hydrated, setHydrated] = useState(false)

    useEffect(() => {
        const stored = localStorage.getItem("userId")
        if (stored) {
            setUserId(stored)
        }
        setHydrated(true)
    }, [])

    useEffect(() => {
        if (hydrated) {
            localStorage.setItem("userId", userId)
        }
    }, [userId, hydrated])

    const logout = () => {
        setUserId("")
        localStorage.removeItem("userId")
    }

    return (
        <GlobalContext.Provider
            value={{ userId, setUserId, markerData, setMarkerData, logout }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)
