import React from 'react';
import './App.css';
import Header from './component/header/Header';
import Shop from './component/shop/Shop';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './component/Review/Review';
import Manage from './component/Manage/Manage';
import NotFound from './component/NotFound/NotFound';
import ProductDetails from './component/ProductDetails/ProductDetails';
import Login from './component/Login/Login';
import Shipment from './component/Shipment/Shipment';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './component/PrivateRoute/PrivateRoute'
import Register from './component/Register/Register';



export const UserContext = createContext();

function App() {
 
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} className="App">
      <h3>Emial: {loggedInUser.email}</h3>
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

          <PrivateRoute path="/manage">
            <Manage></Manage>
          </PrivateRoute>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/shipment">
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
    </UserContext.Provider>
  );
}

export default App;
