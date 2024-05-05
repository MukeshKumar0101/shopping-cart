/** @format */
import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Cart from "./components/Cart";
import Navbar from "./components/navbar";
function App() {
  return (
    <>
      <Navbar />
      {/* <Cart /> */}
      {Cart()}
    </>
  );
}

export default App;
