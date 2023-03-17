import CampaignLineChart from '@components/CampaignLineChart';
import { useId, useState } from 'react';
import Skeleton from '@components/Skeleton';
import { useGetCampaignMapped } from '@hooks/api/useCampaign';

function Campaign() {
  const { data: getCampaign, mappedData: campaignData } =
    useGetCampaignMapped();
  const [campaign, setCampaign] = useState('');
  const selectId = useId();

  const installs = campaign ? campaignData[campaign].installs : [];

  return (
    <div className="flex md:flex-row flex-col justify-between gap-5">
      {getCampaign.isLoading ? (
        <Skeleton width="100%" height="350px" />
      ) : (
        <div className="flex-1">
          <label
            htmlFor={selectId}
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Campaign
          </label>
          <select
            onChange={e => setCampaign(e.target.value)}
            id={selectId}
            className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {Object.entries(campaignData).map(([k, campaign]) => (
              <option key={campaign.id} value={k}>
                {campaign.name}
              </option>
            ))}
          </select>
          {campaign ? (
            <CampaignLineChart
              data={installs}
              className="flex-1"
              title="Installs"
            />
          ) : (
            <span className="text-red-500 text-sm">Select a campaign</span>
          )}
        </div>
      )}
    </div>
  );
}
export default Campaign;
