import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import CartPage from './Pages/CartPage';
import { Navigate, Route, Routes, redirect } from 'react-router-dom';

function App() {

  const user = true;

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/register' element={<Registration />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/login' element={<Login /> } />
      </Routes>
    </>
  );
}

export default App;
