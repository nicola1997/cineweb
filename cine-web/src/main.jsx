import * as React from 'react'
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux";
import store from "./store/store.js";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import User from "./components/User.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/user",
        element: <User/>,
    },


]);

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <StrictMode>
            <RouterProvider router={router}/>
        </StrictMode>
    </Provider>
)