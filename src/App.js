import React from 'react';
import './App.css';
import Header from './component/header/Header';
import Shop from './component/shop/Shop';
import Manage from './component/Manage/Manage';
import Review from './component/Review/Review';
import NotFound from './component/NotFound/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductDetails from './component/ProductDetails/ProductDetails';
import PlaceOrder from './component/PlaceOrder/PlaceOrder';
import Topic from './component/Topic/Topic';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/manage">
            <Manage></Manage>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetails></ProductDetails>
          </Route>
          <Route path="/place-order">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
