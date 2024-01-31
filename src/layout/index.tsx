import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from '@arco-design/web-react';
import styles from './index.module.less';
import NavBar from '@/components/NavBar';

export default function BaseLayout() {
  return (
    <Layout className={styles['basic-layout']}>
      <NavBar />
      <Outlet />
    </Layout>
  );
}
