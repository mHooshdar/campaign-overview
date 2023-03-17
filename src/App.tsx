import { Routes, Route } from 'react-router-dom';
import DefaultLayout from '@layout/default/Default';
import Campaign from '@pages/Campaign';
import CreateCampaign from '@pages/Campaign/CreateCampaign';
import NotFound from '@pages/NoMatch';
import Overview from '@pages/Overview';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store';

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

  // TODO: add routes and lazy load them
  // TODO: add airbnb styles to eslint
  return (
    <ThemeProvider theme={themeMUI}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Overview />} />
          <Route path="campaign" element={<Campaign />} />
          <Route path="campaign/create" element={<CreateCampaign />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
