import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from '@arco-design/web-react';

export default function BaseLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
