import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Books from './Components/books/Books'
import Counter from './Components/counter/Counter';

const router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/books',
                element:<Books/>
            },
            {
                path:'/counter',
                element:<Counter/>
            },
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={router}/>


);


