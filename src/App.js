import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Registration from "./components/Registration/Registration";
import Home from "./components/Home/Home.jsx";

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={Registration} />
        <Route path="/home" component={Home} />
      </Router>
    </>
  );
}

export default App;
