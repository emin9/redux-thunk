import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';



const defaultState = [
  
   
]
const reducer = (state = defaultState,action) =>{
   switch(action.type){
    case 'load' : 
     return action.payload

     default:
      return state
   }
} 
console.log(defaultState);
const store = createStore(reducer,applyMiddleware(thunk))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <App />
  </Provider>
);
