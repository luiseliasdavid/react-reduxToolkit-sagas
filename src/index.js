import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import './index.css';
// bootstrap
import "bootstrap/dist/css/bootstrap.css";
import AppContextReducer from './AppContextReducer';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <AppContextReducer/>
  </React.StrictMode>,
  document.getElementById('root')
);
