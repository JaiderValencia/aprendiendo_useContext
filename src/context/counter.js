import { createContext, useContext } from "react"

export const createCounterContext = createContext()
export const useCounter = () => {
    return useContext(createCounterContext)
}
