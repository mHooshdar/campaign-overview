import { Outlet } from 'react-router-dom';
import Header from './Header';

function DefaultLayout() {
  return (
    <>
      <Header />
      <main className="container mx-auto md:pt-3 pt-2 md:px-0 px-2">
        <Outlet />
      </main>
    </>
  );
}

export default DefaultLayout;
