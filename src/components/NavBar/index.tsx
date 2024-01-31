import React from 'react';
import { GlobalState } from '@/store';
import { useSelector } from 'react-redux';

function NavBar() {
  const settings = useSelector((state: GlobalState) => state.settings);
  const userInfo = useSelector((state: GlobalState) => state.userInfo);

  console.log('userInfo', settings);
  console.log('userInfo', userInfo);

  return <div>nav bar</div>;
}

export default NavBar;
