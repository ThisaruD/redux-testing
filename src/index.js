import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';

//should combine all reducers and put it to store
const myAppStore = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


//=======================================1st lesson=====================================================================
// //STORE  -> GLOBALIZED STATE
//
// //ACTION INCREMENT
// const increment = () =>{
//     return{
//         type:'INCREMENT'
//     }
// }
//
// const decrement = () =>{
//     return{
//         type:'DECREMENT'
//     }
// }
//
// //REDUCER -> BASED ON THE ACTION MODIFY THE STORE
// const counter = (state = 0, action ) =>{
//     switch (action.type){
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1 ;
//     }
// }
//
// let store = createStore(counter);
//
// //Display in the console
// store.subscribe(()=>console.log(store.getState()));
//
// //DISPATCH -> DISPATCH ACTION TO REDUCER
// store.dispatch(increment());
// store.dispatch(decrement());
//======================================================================================================================



ReactDOM.render(
  <Provider store={myAppStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

