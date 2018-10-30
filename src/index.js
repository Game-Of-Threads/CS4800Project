import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import AppContext from './AppProvider.jsx'

//this needs a better variable name
var userInfo = {
  name : "Billy Bronco",
  schoolName : "Cal Poly Pomona",
  major: "Computer Science",
  reputation: 1990
}

ReactDOM.render(
    <BrowserRouter>
      <AppContext.Provider value={userInfo}>
        <App/>
      </AppContext.Provider>
    </BrowserRouter>
  ,document.getElementById('root'));
registerServiceWorker();
