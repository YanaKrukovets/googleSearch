import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import './global.css';
import App from './App';
import { ResultContextProvider } from './context/ResultContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResultContextProvider>
      <Router>
        <App className="bg-slate-900" />
      </Router>
    </ResultContextProvider>
  </React.StrictMode>
);