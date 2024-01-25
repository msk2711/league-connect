import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from "react";
import {ComingEvents} from "./components/ComingEvents.js";
import ErrorPage from "./components/ErrorPage.js";
import './index.css';
import MatchDetails from "./components/MatchDetails.jsx";

const router = createBrowserRouter( [
    {
        path: "/",
        element: <ComingEvents/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/matchDetails/:id",
        element: <MatchDetails/>
    },
] );

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
)
