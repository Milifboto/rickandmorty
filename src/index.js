import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import App from './App'
import store from "./redux/store";
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
  </Provider>
);


// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )
