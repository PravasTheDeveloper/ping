import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Screens/Home'
import Cart from './Screens/Cart'
import SignUp from './Screens/SignUp'
import Login from './Screens/Login'
import ProductPage from './Screens/ProductPage'
import ProductDetails from './Screens/ProductDetails'


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products/:name' element={<ProductPage />} />
        <Route path='/product/:pcode' element={<ProductDetails />} />
      </Routes>
    </>
  )
}

export default App
