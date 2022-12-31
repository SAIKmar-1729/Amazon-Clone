import React from "react";
import Header from "./Header";
import Home from "./Home";
import { Routes, Route } from "react-router-dom"
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
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
      </Routes>
    </div >

  );
}

export default App;
