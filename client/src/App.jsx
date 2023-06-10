import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Screens/Home'
import Cart from './Screens/Cart'
import SignUp from './Screens/SignUp'
import Login from './Screens/Login'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
