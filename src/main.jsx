import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home.jsx' 
import Categories from './Components/Categories.jsx'
import Blogs from './Components/Blogs.jsx'
import Contact from './Components/Contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
       <Route path='' element={<Home />}/>
       <Route path='/Categories' element={<Categories />}/>
       <Route path='/Blogs' element={<Blogs />}/>
       <Route path='/Contact' element={<Contact />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
