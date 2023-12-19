/* eslint-disable react-refresh/only-export-components */
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.tsx';
import Login from './pages/login';
import BaseLayout from './layout';
import Exception404 from './pages/exception/404';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ConfigProvider } from '@arco-design/web-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalContext } from './context';
import useStorage from './utils/useStorage';
import rootReducer from './store';
import zhCN from '@arco-design/web-react/es/locale/zh-CN';
import enUS from '@arco-design/web-react/es/locale/en-US';
import changeTheme from './utils/changeTheme';
import '@arco-design/web-react/dist/css/arco.css';
import '@/style/index.less';
import './mock';

const store = createStore(rootReducer);

function Index() {
  const [lang, setLang] = useStorage('arco-lang', 'zh-CN');
  const [theme, setTheme] = useStorage('arco-theme', 'light');

  function getArcoLocale() {
    switch (lang) {
      case 'zh-CN':
        return zhCN;
      case 'en-US':
        return enUS;
      default:
        return zhCN;
    }
  }

  // useEffect(() => {
  //   if (checkLogin()) {
  //     fetchUserInfo();
  //   } else if (window.location.pathname.replace(/\//g, '') !== 'login') {
  //     window.location.pathname = '/login';
  //   }
  // }, []);

  useEffect(() => {
    changeTheme(theme);
  }, [theme]);

  const contextValue = {
    lang,
    setLang,
    theme,
    setTheme
  };

  return (
    <BrowserRouter>
      <ConfigProvider
        locale={getArcoLocale()}
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
          <GlobalContext.Provider value={contextValue}>
            <Routes>
              <Route path='/' element={<BaseLayout />}>
                <Route path='/' element={<App />} />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<Exception404 />} />
              </Route>
            </Routes>
          </GlobalContext.Provider>
        </Provider>
      </ConfigProvider>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Index />);
