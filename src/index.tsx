import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartContext } from './context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <CartContext>
      <App />
    </CartContext>
  </React.StrictMode>,
  document.getElementById('root')
);


