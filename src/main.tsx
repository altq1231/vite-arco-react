import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.tsx';
import Login from './pages/login';
import Layout from './layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@arco-design/web-react/dist/css/arco.css';
import '@/style/index.less';
import './mock';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
