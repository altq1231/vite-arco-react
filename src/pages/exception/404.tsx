import React from 'react';
import { Result, Button } from '@arco-design/web-react';
import useLocale from '@/utils/useLocale';
import { Link } from 'react-router-dom';

const locale = {
  'en-US': {
    'menu.exception': 'Exception page',
    'menu.exception.404': '404',
    'exception.result.404.description': 'Whoops, this page is gone.',
    'exception.result.404.back': 'Back'
  },
  'zh-CN': {
    'menu.exception': '异常页',
    'menu.exception.404': '404',
    'exception.result.404.description': '抱歉，页面不见了～',
    'exception.result.404.back': '返回'
  }
};

function Exception404() {
  const t = useLocale(locale);

  return (
    <div className='not-found-page flex-row'>
      <Result
        className='result'
        status='404'
        subTitle={t['exception.result.404.description']}
        extra={[
          <Link to='/' key='home'>
            <Button key='back' type='primary'>
              {t['exception.result.404.back']}
            </Button>
          </Link>
        ]}
      />
    </div>
  );
}

export default Exception404;
