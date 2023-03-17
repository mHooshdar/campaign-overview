import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';
import { useCallback, useEffect, useId, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { storeSetLight, storeSetDark } from '@store/rootSlice';
import { RootState } from '@store/index';
import { Button, Container } from '@mui/material';
import { Menu, NightsStay, WbSunny } from '@mui/icons-material';

function Header() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.root.theme);
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(true);
  const mobileId = useId();
  const isDark = theme === 'dark';

  // TODO: add routes
  const headerItems = [
    {
      title: 'Overview',
      to: '/',
    },
    {
      title: 'Campaigns',
      to: '/campaign',
    },
    {
      title: 'Create',
      to: '/campaign/create',
    },
  ];

  const setDark = useCallback(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    dispatch(storeSetDark());
  }, [dispatch]);

  function setLight() {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    dispatch(storeSetLight());
  }

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (localStorage.theme !== 'light' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDark();
    }
  }, [setDark]);

  return (
    <header className="border-b dark:border-slate-600 dark:bg-gray-800 bg-white">
      <Container className="border-gray-200 md:px-0 px-4 py-3 container mx-auto">
        <div className="flex flex-wrap justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Applike Frontend Test
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            <Button
              type="button"
              onClick={isDark ? setLight : setDark}
              className="!text-gray-500 !dark:text-gray-400"
            >
              {isDark ? <WbSunny /> : <NightsStay />}
            </Button>
            <Button
              type="button"
              className="!text-gray-500 !dark:text-gray-400 lg:hidden"
              aria-controls={mobileId}
              aria-expanded={showHeader}
              onClick={() => setShowHeader(!showHeader)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu />
            </Button>
          </div>

          <div
            className={cn(
              'justify-between items-center w-full lg:flex lg:w-auto lg:order-1',
              [showHeader ? 'hidden' : 'block']
            )}
            id={mobileId}
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {headerItems.map(item => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={cn('block py-2 pr-4 pl-3 lg:p-0', [
                      location.pathname === item.to
                        ? 'text-blue-900 dark:text-white'
                        : 'text-gray-700 hover:text-blue-900 dark:text-gray-400 dark:hover:text-white',
                    ])}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
