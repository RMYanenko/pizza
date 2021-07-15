import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import "./App.scss";
import { Header } from "./layout/Header";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import PizzaInterface from "./interfaces/PizzaProps"
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
