import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/index.css';
import App from './app/App';

import './app/providers/LangProvider/i18n';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
