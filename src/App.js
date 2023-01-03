import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import { Routes, Route } from "react-router-dom"
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Orders from "./Orders";

const promise = loadStripe('pk_test_51MLncxSHIXt2RMkcPzI0ybLV2jvplReiHZAPxoI6y6jlmqheWC8xAB9Ka4UkDzab1flEqeRsqNNP4C5NV6VYFM7y00BlzLSqup');

function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    //  will only run once when the app component loads..
    auth.onAuthStateChanged(authUser => {
      console.log('The User is >>> ', authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })

      }
    })

  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path="/login"
          element={<Login />}>
        </Route>
        <Route path="/checkout"
          element={<div>
            <Header />
            <Checkout />
          </div>}>
        </Route>
        <Route path="/"
          element={<div>
            <Header />
            <Home />
          </div>} >
        </Route>
        <Route path="/payment"
          element={
            <div>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </div>} >
        </Route>
        <Route path="/orders"
          element={<div>
            <Header />
            <Orders/>
          </div>} >
        </Route>
      </Routes>
    </div>

  );
}

export default App;
