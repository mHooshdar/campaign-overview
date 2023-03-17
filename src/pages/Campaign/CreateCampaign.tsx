import {
  useGetCampaignMapped,
  useMutateCampaign,
} from '@hooks/api/useCampaign';
import { Button, Input, InputLabel } from '@mui/material';
import generateCampaign from '@utils/generateCampaign';
import { FormEvent, useId, useState } from 'react';
import { toast } from 'react-toastify';

function CreateCampaign() {
  const [campaign, setCampaign] = useState('');
  const nameId = useId();
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
      <InputLabel htmlFor={nameId} className="!mb-2">
        Name
      </InputLabel>
      <Input
        type="text"
        id={nameId}
        className="block w-full"
        placeholder="Enter campaign name"
        onChange={e => setCampaign(e.target.value)}
        required
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
