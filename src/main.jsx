import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router"

import MainLayout from './layout/MainLayout'
import Books from './pages/books/Books'
import { router } from './routes/Routes'
import BookProvider from './context/BookContext'
import { ToastContainer } from 'react-toastify'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </BookProvider>
  </StrictMode>,
)
