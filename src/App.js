import React from 'react';
import './App.css';
import Header from './component/header/Header';
import Shop from './component/shop/Shop';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Review from './component/Review/Review';
import Manage from './component/Manage/Manage';
import NotFound from './component/NotFound/NotFound';
import ProductDetails from './component/ProductDetails/ProductDetails';
import Login from './component/Login/Login';
import { useState } from 'react';
import Register from './component/Register/Register';
import { AuthContextProvider, PrivateRoute } from './component/Login/useAuth';
import Shipment from './component/Shipment/Shipment';




function App() {
 
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <AuthContextProvider>
      <Router>
      <Header></Header>
        <Switch>

        {/* this is extra path for practice */}
          <Route path='/reg'>
            <Register></Register>
          </Route>

          <Route path="/shop">
            <Shop></Shop>
          </Route>

          <Route path="/review">
            <Review></Review>
          </Route>

          <Route path="/manage">
            <Manage></Manage>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path='/shipment'>
            <Shipment></Shipment>
          </PrivateRoute>

          <Route exact path="/">
            <Shop></Shop>
          </Route>

          <Route path="/product/:productKey">
            <ProductDetails></ProductDetails>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
