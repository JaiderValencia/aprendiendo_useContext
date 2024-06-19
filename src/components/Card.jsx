import { useCounter } from '../context/counter'

function Card() {
    const { increment, subtract, reset } = useCounter()

    return (
        <>
            <div className="card">
                <button onClick={increment}>
                    Incrementar
                </button>
                <button onClick={subtract}>
                    Decrementar
                </button>
                <button onClick={reset}>
                    Resetear
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default Card