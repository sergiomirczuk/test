import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);


function doubleInteger(i) {
  Math.floor(i / 2)
  // i will be an integer. Double it and return it.
  return i;
}
console.log(doubleInteger(4));