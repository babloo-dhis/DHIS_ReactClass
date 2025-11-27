import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DayOneCom from './components/DayOne';
import CssMethods from './components/CSS/CssMethods';
import CssInternal from './components/CSS/CSSInternal';
import CssExternal from './components/CSS/CssExternal';
import CssModules from './components/CSS/CssModules';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />
    <DayOneCom /> */}
    <CssMethods />
    <CssInternal />
    <CssExternal />
    <CssModules />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
