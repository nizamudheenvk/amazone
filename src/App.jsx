import { Route, Routes } from 'react-router-dom'
import './App.css'
import Auth  from './pages/Auth' 
import Cart from './pages/Cart'
import Home from './pages/Home'
import Dashbord from './Dashbord'





function App() {

  return (
    <>
    <Routes>
     <Route path='/' element={<Auth/>}/>
     <Route path='/register' element={<Auth insideRegister={true}/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>


          

      </Routes>   
    </>
  )
}

export default App
