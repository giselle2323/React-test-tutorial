import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let urlAddress = "https://randomuser.me/api/?results=6";
ReactDOM.render(
  <React.StrictMode>
    <App url = {urlAddress} />
  </React.StrictMode>,
  document.getElementById('root')
);

