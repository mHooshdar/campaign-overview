import { Link } from 'react-router-dom';
import { useId, useState } from 'react';
import HeaderItems from './HeaderItems';
import HeaderMode from './HeaderMode';
import { Container } from '@mui/material';

function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const mobileId = useId();

  return (
    <header className="border-b dark:border-slate-600 dark:bg-gray-800 bg-white">
      <Container className="border-gray-200 md:px-0 px-4 py-3 container mx-auto">
        <div className="flex flex-wrap justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Applike Frontend Test
            </span>
          </Link>
          <HeaderMode
            elId={mobileId}
            showHeader={showHeader}
            setShowHeader={setShowHeader}
          />
          <HeaderItems elId={mobileId} showHeader={showHeader} />
        </div>
      </Container>
    </header>
  );
}

export default Header;
