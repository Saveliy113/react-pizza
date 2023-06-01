import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
// import NotFound from './pages/NotFound';
// import PizzaDetails from './pages/PizzaDetails';

import './scss/app.scss';
import MainLayout from './layouts/MainLayout';

const Cart = React.lazy(
  () => import(/*webpackChunkName: "Cart" */ './pages/Cart')
);
const NotFound = React.lazy(
  () => import(/*webpackChunkName: "NotFound" */ './pages/NotFound')
);
const PizzaDetails = React.lazy(
  () => import(/*webpackChunkName: "PizzaDetails" */ './pages/PizzaDetails')
);
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Загрузка...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="pizza/:id"
          element={
            <Suspense>
              <PizzaDetails />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Загрузка...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
