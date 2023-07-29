import './App.css'
import { Route,Routes } from 'react-router-dom'
import Navbar from './Components/Layouts/Navbar'
import Footer from './Components/Layouts/Footer'
import Contact from './Components/Pages/Contact/Contact'
import { Fragment } from 'react'
import Basket from './Components/Pages/userGetActions/Basket'
import Home from './Components/Pages/HomePage/Home'

function App() {

  return (
    <>
     <div className='bg-slate-200'>
    <Fragment>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/basket' element={<Basket/>}/>
        </Routes>
      <Footer/>
      </Fragment>
     </div>
    </>
  )
}

export default App
