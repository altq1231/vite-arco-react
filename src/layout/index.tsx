import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from '@arco-design/web-react';
import styles from './index.module.less';

export default function BaseLayout() {
  return (
    <Layout className={styles['basic-layout']}>
      <Outlet />
    </Layout>
  );
}
