import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./pages/Products";
const Home = () => <h2>Home</h2>;

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
      </Switch>
    </Router>
  );
}

export default App;