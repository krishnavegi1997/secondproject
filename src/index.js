
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './Components/login/Login';
import UserDetails from './Components/userdetails/UserDetails'
import User from './Components/users/User'
import About from "./Components/about/About"
const router =createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/userDetails',
        element:<UserDetails/>
      },
      {
        path:'/user',
        element:<User/>
      },
      {
        path:'/about',
        element:<About/>
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
