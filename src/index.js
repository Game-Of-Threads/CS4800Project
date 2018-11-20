import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import AppContext from './AppProvider.jsx'

// //this needs a better variable name
// var userInfo = {
//   name : "Billy Bronco",
//   schoolName : "Cal Poly Pomona",
//   major: "Computer Science",
//   reputation: 1990,
//   noteArray: [
//     {
//       title: "Midterm Review",
//       data: "## Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in officia deserunt mollit anim id est laborum."
//     }, {
//       title: "djksahdfkjdlsf",
//       data: "Test 2"
//     }, {
//       title: "Im very stressed",
//       data: "Heh, nothing personell kid"
//     }
//     , {
//       title : "Success",
//       data  : "It worked!"
//     }
//   ]
// }

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  ,document.getElementById('root'));
registerServiceWorker();
