import React from "react";
import "./App.css";
import { Provider } from "react-redux";

import TodoList from "./TodoList"
import store from "./store"

function App() {
  return (
    <Provider store={store}>
      <TodoList></TodoList>
    </Provider>
  );
}

export default App;
