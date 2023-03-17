import CampaignLineChart from '@components/CampaignLineChart';
import { useState } from 'react';
import Skeleton from '@components/Skeleton';
import SelectComponent from '@components/SelectComponent';
import { useGetCampaignMapped } from '@hooks/api/useCampaign';

function Campaign() {
  const { data: getCampaign, mappedData: campaignData } =
    useGetCampaignMapped();
  const [campaign, setCampaign] = useState('');
  const installs = campaign ? campaignData[campaign].installs : [];
  const menuItems = Object.values(campaignData).map(campaign => ({
    id: campaign.id,
    title: campaign.name,
    value: campaign.name,
  }));

  return (
    <div className="flex md:flex-row flex-col justify-between gap-5">
      {getCampaign.isLoading ? (
        <Skeleton width="100%" height="350px" />
      ) : (
        <div className="flex-1">
          <SelectComponent
            title="Campaign"
            onChange={e => setCampaign(e.target.value)}
            value={campaign}
            items={menuItems}
          />
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
