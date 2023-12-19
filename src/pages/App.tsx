/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import reactLogo from '@/assets/svg/react.svg';
import viteLogo from '/vite.svg';
import { Button } from '@arco-design/web-react';

function App(props: any) {
  const [count, setCount] = useState(0);
  console.log('props----------', props);

  return (
    <div className='app-page'>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <Button type='primary' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
