import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux";
import store from "./store/store.js";
import EuroInput from "./components/EuroInput.jsx";
import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";
import NavBarCine from "./components/NavBarCine.jsx";
import About from "./components/About.jsx";
import * as React from "react";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/about",
        element: <About/>,
    }
]);

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <StrictMode>
            <RouterProvider router={router}/>
        </StrictMode>
    </Provider>
)