import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/home/Landing";
import Movie from "./components/home/Movie";
import { HashRouter as Router, Route } from "react-router-dom";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/movie/:id" component={Movie} />
            <Footer />
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
