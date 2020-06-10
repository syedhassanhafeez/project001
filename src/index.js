import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App dishName = "Chicken Karahi" sweetDish = "Kheer"> </App>
    <hr />
    <App dishName = "Chicken Biryani" sweetDish = "Custard"> </App>
    <hr />
    <App dishName = "Chicken Koorma" sweetDish = "Jaleebi"> </App>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
