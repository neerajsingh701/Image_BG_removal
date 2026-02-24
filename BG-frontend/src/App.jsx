
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import NavBar from './components/NavBar.jsx'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Result from './pages/Result.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div className='container mx-auto '>
      <div className="w-full h-full ">
        <ToastContainer />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Result' element={<Result />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App
