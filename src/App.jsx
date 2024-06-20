import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './components/Logo'
import Card from './components/Card'
import { Counter } from './context/Counter.jsx'

function App() {

  return (
    <Counter>
      <Logo logo2={reactLogo} alt2="React logo" logo1={viteLogo} alt1="Vite Logo" />
      <Card />
    </Counter>
  )
}

export default App
