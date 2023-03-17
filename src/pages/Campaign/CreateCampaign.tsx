import InputComponent from '@components/InputComponent';
import {
  useGetCampaignMapped,
  useMutateCampaign,
} from '@hooks/api/useCampaign';
import { Button } from '@mui/material';
import generateCampaign from '@utils/generateCampaign';
import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

function CreateCampaign() {
  const [campaign, setCampaign] = useState('');
  const { mappedData: campaignData } = useGetCampaignMapped();
  const mutation = useMutateCampaign();

  function formSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!campaignData[campaign]) {
      // In here we should call the POST api call and get a new campaign then append it to the data
      // but the POST of api does not work, so I added some random campaigns manually
      const newCampaign = generateCampaign(campaign);
      mutation.mutate(newCampaign);
      toast.success('New Campaign Created', {
        position: 'bottom-right',
      });
    }
  }

  const hasError = !!campaignData[campaign];

  return (
    <form onSubmit={formSubmit}>
      <InputComponent
        onChange={e => setCampaign(e.target.value)}
        title="Name"
      />

      <Button
        type="submit"
        color="primary"
        variant="contained"
        className="!mt-3"
        disabled={hasError}
      >
        Submit
      </Button>
    </form>
  );
}
export default CreateCampaign;
