import { Route, Routes } from 'react-router-dom'
import './App.css'
import Auth  from './pages/Auth' 
import Cart from './pages/Cart'
import Home from './pages/Home'
import ProductView from './pages/ProductView'
import Header from './Components/Header'
import Footer from './Components/Footer'







function App() {

  return (
    <>
    <Routes>
     <Route path='/' element={<Auth/>}/>
     <Route path='/register' element={<Auth insideRegister={true}/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
       <Route path='/productview' element={<ProductView/>}/>


          

      </Routes>   
    </>
  )
}

export default App
