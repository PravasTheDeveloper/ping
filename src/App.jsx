import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Screens/Home'
import Cart from './Screens/Cart'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
