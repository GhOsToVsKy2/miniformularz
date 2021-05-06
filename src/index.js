import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import {atom, RecoilRoot} from 'recoil'

export const odpowiedzi = atom({
  key: 'odpowiedzi',
  default: []
})

ReactDOM.render(
  <React.StrictMode>
   <RecoilRoot>
   <Router>
   <App />
   </Router>
   </RecoilRoot>
  </React.StrictMode>,
 document.getElementById('root')
);

