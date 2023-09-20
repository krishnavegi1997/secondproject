
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Countries from './features/countries/Countries';
import Todolist from './features/todolist/Todolist';
import Counter from './features/counter/Counter';
import CountryDetails from './features/countries/CountryDetails';
import Books from './features/books/Books';
import Addbook from './features/books/Addbook';
import UpdateBook from './features/books/UpdateBook';
 const router =createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/countries',
        element:<Countries/>,
        children:[
          {
            path:'/countries/:cname',
            element:<CountryDetails></CountryDetails>
          }
        ]
      },
      {
        path:'/todolist',
        element:<Todolist/>
      },
      {
        path:'/counter',
        element:<Counter/>,
      },
      {
        path:'/books',
        element:<Books/>,
        children:[
          {
            path:'/books/addbook',
            element:<Addbook/>
          },
          {
            path:'/books/updatebook',
            element:<UpdateBook/>
          }
        ]
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
