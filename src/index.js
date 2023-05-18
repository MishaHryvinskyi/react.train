import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import './index.css';

// REACT
// const root = ReactDOM.createRoot(document.querySelector("#root"));
// const h1 = React.createElement('h1', {id:"1"}, "Катерина");
// root.render(h1);
// console.log(h1);

// JS
// const root = document.querySelector("#root");
// const h1 = document.createElement("h1");
// h1.textContent = "Привіт Кулюрина!!!"
// console.dir(h1);
// root.prepend(h1);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


