/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.tsx';
import Login from './pages/login';
import BaseLayout from './layout';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ConfigProvider } from '@arco-design/web-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalContext } from './context';
import rootReducer from './store';
import '@arco-design/web-react/dist/css/arco.css';
import '@/style/index.less';
import './mock';

const store = createStore(rootReducer);

function Index() {
  return (
    <BrowserRouter>
      <ConfigProvider
        componentConfig={{
          Card: {
            bordered: false
          },
          List: {
            bordered: false
          },
          Table: {
            border: false
          }
        }}>
        <Provider store={store}>
          <GlobalContext.Provider value={{}}>
            <Routes>
              <Route path='/' element={<BaseLayout />}>
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<App />} />
              </Route>
            </Routes>
          </GlobalContext.Provider>
        </Provider>
      </ConfigProvider>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Index />);
