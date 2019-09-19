import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Event from "./components/Event/Event";
import Shop from "./components/Shop/Shop";
import Contact from "./components/Contact/Contact";
import './components/scss/app.scss';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/event" component={Event} />
          <Route path="/shop" component={Shop} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default App;