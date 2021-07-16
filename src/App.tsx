import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import "./App.scss";
import { PizzaInterface } from "./interfaces/PizzaProps";
import { Header } from "./layout/Header";
import { Cart, Home } from "./pages";

function App() {

  const [pizzas, setPizzas] = useState<PizzaInterface[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/db.json').then((date)=> date.json()).then(json => {
      setPizzas(json.pizzas)
    });
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path="/" render={() => <Home items={pizzas} />} />
          <Route exact path="/cart" component={Cart} />
        </div>
      </div>
    </div>
  );
}

export default App;
