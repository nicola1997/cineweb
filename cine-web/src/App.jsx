import {useState} from 'react'
import './App.css'
import EuroInput from "./components/EuroInput.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarCine from "./components/NavBarCine.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <NavBarCine></NavBarCine>
            <EuroInput></EuroInput>

        </>
    )
}

export default App
