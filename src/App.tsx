import { Routes, Route } from 'react-router-dom';
import DefaultLayout from '@layout/default/Default';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import routes from './routes';

function App() {
  const themRedux = useSelector((state: RootState) => state.root.theme);

  const themeMUI = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themRedux,
        },
      }),
    [themRedux]
  );

  // TODO: add airbnb styles to eslint
  return (
    <ThemeProvider theme={themeMUI}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          {routes.map(route => (
            <Route
              key={route.to}
              index={route.to === '/'}
              element={
                <Suspense fallback={<div />}>
                  <route.component />
                </Suspense>
              }
              path={route.to}
            />
          ))}
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
