import {useState} from 'react'
import './App.css'
import ImportoInput from "./components/EuroInput.jsx";
import AmountInput from "./components/EuroInput.jsx";
import CurrencyFormatter from "./components/EuroInput.jsx";
import EuroInput from "./components/EuroInput.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>

            <EuroInput/>

        </>
    )
}

export default App
