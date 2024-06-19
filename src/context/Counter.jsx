import { useState } from 'react'
import PropTypes from 'prop-types'
import { createCounterContext as createContext } from './counter'

export function Counter({ children }) {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }

    const subtract = () => {
        setCounter(counter - 1)
    }

    const reset = () => {
        setCounter(0)
    }

    return (
        <createContext.Provider value={{ increment, subtract, reset, counter }}>
            {children}
        </createContext.Provider>
    )
}

Counter.propTypes = {
    children: PropTypes.node.isRequired
}