import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloWorld from './component/001_HelloWorld/HelloWorld';
import Counter from './component/002_Counter/Counter';
// import TodoArea from './component/003_TodoList/TodoArea';
import TodoArea from './component/003_TodoList/TodoArea_m';
import Timer from './component/004_Timer/Timer';
import Effect from './component/xxx_useeffect/Effect';
import Board from './component/sanmoku/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <HelloWorld/> */}
    {/* <Counter/> */}
    {/* <TodoArea/> */}
    {/* <Effect/> */}
    <Board/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
