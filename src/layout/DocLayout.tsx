import React from 'react';
import { Layout } from '@arco-design/web-react';
import { Outlet } from 'react-router-dom';

export default function DocLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
