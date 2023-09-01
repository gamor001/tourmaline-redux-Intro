import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//redux
import { createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux'

// old way | let [count, setCount] = useState(0) //local to component

//reducer //global for application
const count = (state = 0, action) => {
  console.log('Hey im a reducer' , state);
  return state
}


const elementList = (state = [], action) => {
  return state
}

//store
const storeInstance = createStore(

  combineReducers(
    {
  count,
  elementList
    }
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
