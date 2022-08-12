import React from 'react';
//import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);
