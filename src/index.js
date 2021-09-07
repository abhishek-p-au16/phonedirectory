import React from 'react';
import ReactDOM from 'react-dom';
import AddSubscriber from './addSubscriber';
import App from './App';
import Header from './Header';
import "./common/common.css";


ReactDOM.render(
  <React.StrictMode>
    <AddSubscriber />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

