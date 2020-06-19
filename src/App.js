import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {dogsReducer} from "./reducers/dogsReducer";
import thunk from "redux-thunk";
import DogsStadistics from "./components/DogsStadistics";

const store = createStore(dogsReducer, applyMiddleware(thunk));

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <DogsStadistics/>
      </div>
    </Provider>
  );
}

export default App;
