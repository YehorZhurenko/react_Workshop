import { useEffect } from 'react';
import { Home } from './components/Home';
import { Outlet, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  useEffect(() => {
    console.log('app rendered');
    console.log('location: ', location);
  });

  return (
    <div>
      <Home />
      <Outlet />
    </div>
  );
}

export default App;
