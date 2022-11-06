import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FpjsProvider } from '@fingerprintjs/fingerprintjs-pro-react';

ReactDOM.render(
  <FpjsProvider
    loadOptions={{
      apiKey: "u2KeZPAdoM4CmuWQdgQj",
      scriptUrlPattern: "https://suvajit.in/MocrOwIiRABIA9px/03ePBVe550jV0l4C?apiKey=<apiKey>&version=<version>&loaderVersion=<loaderVersion>",
      region: "ap",
      endpoint: "https://suvajit.in/MocrOwIiRABIA9px/MQCCyJJNYHxaadBY?region=ap"
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </FpjsProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();