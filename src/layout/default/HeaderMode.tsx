import { NightsStay, WbSunny, Menu } from '@mui/icons-material';
import { Button } from '@mui/material';
import { RootState } from '@store/index';
import { storeSetDark, storeSetLight } from '@store/rootSlice';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface Props {
  showHeader: boolean;
  setShowHeader: (value: boolean) => void;
  elId: string;
}
function HeaderMode({ showHeader, elId, setShowHeader }: Props) {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.root.theme);
  const isDark = theme === 'dark';

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
        className="!text-gray-500 !dark:text-gray-400 lg:!hidden"
        aria-controls={elId}
        aria-expanded={showHeader}
        onClick={() => setShowHeader(!showHeader)}
      >
        <span className="sr-only">Open main menu</span>
        <Menu />
      </Button>
    </div>
  );
}

export default HeaderMode;
