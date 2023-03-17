import CampaignLineChart from '@components/CampaignLineChart';
import { useId, useState } from 'react';
import Skeleton from '@components/Skeleton';
import { useGetCampaignMapped } from '@hooks/api/useCampaign';
import { InputLabel, MenuItem, Select } from '@mui/material';

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
          <InputLabel className="!mb-2" id={selectId}>
            Campaign
          </InputLabel>
          <Select
            onChange={(e: any) => setCampaign(e.target.value)}
            labelId={selectId}
            value={campaign}
            className="w-full block !mb-4"
          >
            {Object.entries(campaignData).map(([k, campaign]) => (
              <MenuItem key={campaign.id} value={k}>
                {campaign.name}
              </MenuItem>
            ))}
          </Select>
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
