import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.tsx';
import '@arco-design/web-react/dist/css/arco.css';
import '@/style/index.less';
import './mock';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
