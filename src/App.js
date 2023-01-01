import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import { Routes, Route } from "react-router-dom"
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{},dispatch] = useStateValue();
  useEffect(()=>{
    //  will only run once when the app component loads..
    auth.onAuthStateChanged(authUser => {
      console.log('The User is >>> ',authUser);

      if(authUser){
        dispatch({
          type:"SET_USER",
          user:authUser
        })
      }else{
        dispatch({
          type:"SET_USER",
          user:null
        })

      }
    })

  },[])
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
