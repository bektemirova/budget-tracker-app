import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import GeneralContext from './context/GeneralContext'


ReactDOM.render(
  <React.StrictMode>
    <GeneralContext>
      <App />
    </GeneralContext>





  </React.StrictMode>,
  document.getElementById('root')
);

