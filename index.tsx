import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// اون خطی که دنبال index.css می‌گشت، از اینجا حذف شد!

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

