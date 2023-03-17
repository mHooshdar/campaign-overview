import { Outlet } from 'react-router-dom';
import Header from './Header';

function DefaultLayout() {
  return (
    <>
      <Header />
      <main className="container mx-auto pt-4 md:px-0 px-4 dark:bg-slate-900 bg-gray-50">
        <Outlet />
      </main>
    </>
  );
}

export default DefaultLayout;
