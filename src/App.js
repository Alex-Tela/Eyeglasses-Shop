import React from 'react'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/products/cat/:category">
          <ProductList />
        </Route>
        <Route path="/products/:id" exact>
          <Product />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;


