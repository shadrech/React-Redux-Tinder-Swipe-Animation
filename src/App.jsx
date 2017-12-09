import React, { Component } from 'react';
import { Provider } from "react-redux";

import Container from "./components/container";
import store from "./store";

import './sass/index.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

export default App;
