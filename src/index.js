import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import PureComponent from './components/PureComponent';
// import ShouldComponentUpdate from './components/ShouldComponentUpdate';
import Memo from './components/Memo';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Memo />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
