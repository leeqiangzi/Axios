import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import axios from "axios";

// axios默认配置
// axios.defaults.baseURL = 'https://xxxx';
// axios.defaults.timeout = 5000;
// ......

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
