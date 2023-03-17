import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';
import { useEffect, useId, useState } from 'react';
import HamIcon from '@icons/HamIcon';
import Sun from '@icons/SunIcon';
import Moon from '@icons/MoonIcon';

function Header() {
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const mobileId = useId();

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

  function setDark() {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    setIsDark(true);
  }

  function setLight() {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    setIsDark(false);
  }

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (localStorage.theme !== 'light' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDark();
    }
  }, []);

  return (
    <header className="border-b dark:border-slate-600 dark:bg-gray-800 bg-white">
      <nav className="border-gray-200 md:px-0 px-4 py-3 container mx-auto">
        <div className="flex flex-wrap justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Applike Frontend Test
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            <button
              id="theme-toggle"
              type="button"
              onClick={isDark ? setLight : setDark}
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
            >
              {isDark ? <Sun /> : <Moon />}
            </button>
            <button
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
              aria-controls={mobileId}
              aria-expanded={showHeader}
              onClick={() => setShowHeader(!showHeader)}
            >
              <span className="sr-only">Open main menu</span>
              <HamIcon />
            </button>
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
      </nav>
    </header>
  );
}

export default Header;
