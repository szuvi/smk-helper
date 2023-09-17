import App from './App';
import './index.scss';
import './samples/node-api';

import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

postMessage({ payload: 'removeLoading' }, '*');
