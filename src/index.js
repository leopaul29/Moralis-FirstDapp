import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from "react-moralis";


const { REACT_APP_APPID, REACT_APP_SERVERURL } = process.env;


ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={REACT_APP_APPID} serverUrl={REACT_APP_SERVERURL}>
          <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
