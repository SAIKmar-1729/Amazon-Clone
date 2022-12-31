import React from "react";
import Header from "./Header";
import Home from "./Home";
import { Routes, Route } from "react-router-dom"
import Checkout from "./Checkout";

function App() {
  return (
    <div className="App">
    <Header />
      <Routes>
        <Route path="/checkout"
          element={<div>
            <Checkout/>
          </div>}>
        </Route>
        <Route path="/"
          element={<div>
            <Home />
          </div>} >
        </Route>
      </Routes>
    </div>

  );
}

export default App;
