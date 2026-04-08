import { useState } from 'react';
import MainLayout from './layouts/MainLayout';
import './App.css';

import Home from './pages/Home';
import OrderForm from './pages/OrderForm';
import Success from './pages/Success';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [order, setOrder] = useState(null);

  return (
    <MainLayout>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/pizza'>
          <OrderForm setOrder={setOrder} />
        </Route>
        <Route path='/success'>
          <Success order={order} />
        </Route>
      </Switch>
    </MainLayout>
  )
}

export default App
