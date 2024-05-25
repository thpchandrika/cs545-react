import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import productstore from './store/productstore';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={productstore}>
      <App />
    </Provider>
  </React.StrictMode>
);

