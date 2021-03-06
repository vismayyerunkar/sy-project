import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import allReducers from './Redux/Reducers/allReducers'
import {BrowserRouter} from "react-router-dom";
import {Switch,Route,Link,NavLink} from "react-router-dom";
import {createStore } from 'redux';
import {Provider} from 'react-redux'


const store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  
  <React.StrictMode>

  <Provider store = {store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
  </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
