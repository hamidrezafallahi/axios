import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios';
/////////////DEFAULT GLOBAL ////////////////////////////////////////////
axios.defaults.baseURL="https://jsonplaceholder.typicode.com";
axios.defaults.headers["content-type"]="application/json";
axios.defaults.method="GET";


axios.interceptors.request.use( req=>{console.log(req.method);return req})
axios.interceptors.response.use(res=>{console.log(res.data);return res.data})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

