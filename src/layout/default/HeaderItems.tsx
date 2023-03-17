import cn from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import routes from '../../routes';

interface Props {
  elId: string;
  showHeader: boolean;
}

function HeaderItems({ elId, showHeader }: Props) {
  const headerItems = routes.filter(route => route.title);
  const location = useLocation();

  return (
    <div
      className={cn(
        'justify-between items-center w-full lg:flex lg:w-auto lg:order-1',
        [showHeader ? 'hidden' : 'block']
      )}
      id={elId}
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
  );
}

export default HeaderItems;
