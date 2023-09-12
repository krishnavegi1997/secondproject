import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider}  from "react-router-dom"
import Counter from './Components/Counter';
import TodoList from './Components/TodoList';
import Aboutus from "./Components/Aboutus"
import Profile from './Components/Profile';
  const router =   createBrowserRouter([
        {
          path:"/",
          element:<App/>,
          children:[
            
              {
                path:"/counter",
                element:<Counter/>
              },
              {
                path:"/todolist",
                element:<TodoList/>
              },
              {
                path:"/aboutus",
                element:<Aboutus/>,
              },
              {
                path:"/profile",
                element:<Profile/>
              }
            
          ]
        }
       
      ])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
