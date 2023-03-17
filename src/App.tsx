import { Routes, Route } from 'react-router-dom';
import DefaultLayout from '@layout/default/Default';
import Campaign from '@pages/Capmaign';
import CreateCampaign from '@pages/Capmaign/CreateCampaign';
import NotFound from '@pages/NoMatch';
import Overview from '@pages/Overview';

function App() {
  // TODO: add routes and lazy load them
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Overview />} />
        <Route path="campaign" element={<Campaign />} />
        <Route path="campaign/create" element={<CreateCampaign />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
