import { Routes, Route, Outlet } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import PizzaDetails from './pages/PizzaDetails';

import './scss/app.scss';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="pizza/:id" element={<PizzaDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
