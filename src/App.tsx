import React from "react";
import { Route } from "react-router-dom";
import "./App.scss";
import { Header } from "./layout/Header";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path="/" component={Home}/>
          <Route exact path="/cart" component={Cart} />
        </div>
      </div>
    </div>
  );
}

export default App;
