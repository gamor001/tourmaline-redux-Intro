import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//redux
import { createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import logger from 'redux-logger'

// old way | let [count, setCount] = useState(0) //local to component

//reducer //global for application
const count = (state = 0, action) => {
  console.log('Hey im a reducer' , state);

  if(action.type === 'INCREASE'){
    console.log('you clicked increase');
    // the nect value of 'reduxStore.count' will be 1 more than the previous value
    return state + 1
  } else if (action.type === 'DECREASE'){
    console.log(' you clicked decrease');
    return state -1
  }

  // if action.type is anything else, just return the last value of state
  return state
}


const elementList = (state = [], action) => {
  if(action.type === 'ADD_ELEMENT'){
    console.log(`The element wes ${action.payload}`);
    //[old array contents, new item]
   return[...state, action.payload]
    
  }
  return state
}

//store
const storeInstance = createStore(

  combineReducers(
    {
  count,
  elementList
    }
  ),
  applyMiddleware(
    logger
  )
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
