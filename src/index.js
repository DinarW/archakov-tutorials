import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
// import App from './tutorial-2/App';
// import App from './tutorial-4/App';
// import App from './tutorial-5/App';
// import App from './tutorial-6/App';
import App from './tutorial-7/App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
