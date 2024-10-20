import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app.jsx';
import reportWebVitals from './reportWebVitals';
// import Intro from './intro.jsx';
import UsestateCounter from './usestate-counter.jsx';
import Ex1 from './components/ex1.js';
import RandomName from './components/randomex2.js'
import Die from './components/dieex1.js'
import Table from './components/table.js';
import DieGame from './components/dieGame.js'
import Props from './components/propsEx1.js'
import Props2 from './components/propsEx2.js'
import FormEx1 from './components/formEx1.js'

// const Fun1=()=>{
//   return(
//     <>
//     <h1>Hello World</h1>
//     </>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    {/* <Fun1/> */}
    {/* <App/> */}
    {/* <Intro/>, */}
    <UsestateCounter/>
    <Ex1/>
    <RandomName/>
    <Die/>
    <Table/>
    <DieGame/>
    <Props/>
    {/* <Props2 name={"Mohan"} city={"banglore"}/>
    <Props2 name={"Venaktesh"} city={"hyderabad"}/>
    <Props2 name={"Ravi" }city={"hyderabad"}/> */}
    <Props2/>
    <FormEx1/>



  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
