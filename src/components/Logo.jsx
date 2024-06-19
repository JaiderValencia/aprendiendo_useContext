import PropTypes from 'prop-types'
import { useCounter } from '../context/counter'

function Logo({ logo1, alt1, logo2, alt2 }) {
    const { counter } = useCounter()

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={logo1} className="logo" alt={alt1} />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={logo2} className="logo react" alt={alt2} />
                </a>
            </div>
            <h1>Counter: {counter}</h1>
        </>
    )
}

Logo.propTypes = {
    logo1: PropTypes.any,
    alt1: PropTypes.string,
    logo2: PropTypes.any,
    alt2: PropTypes.string
}

export default Logo