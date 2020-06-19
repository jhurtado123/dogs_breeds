import React from 'react';
import './App.css';
import {Provider} from "react-redux";

const store = {};

function App() {
  return (
    <Provider store={store}>
      <div className="App">

      </div>
    </Provider>
  );
}

export default App;
