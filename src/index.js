import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import Example from './StateHook/vidu';
import cach2 from './StateHook/cach2';
import Color from './StateHook/Color';
import Car from './StateHook/Car';
import Form from './BT Form/Form';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <App />
      {/* <Example></Example> */}
      {/* <cach2></cach2> */}
      {/* <Color></Color> */}
      {/* <Car></Car> */}
      {/* <Form></Form> */}
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
