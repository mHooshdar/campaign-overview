import {
  useGetCampaignMapped,
  useMutateCampaign,
} from '@hooks/api/useCampaign';
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
      <label
        htmlFor={nameId}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Name
      </label>
      <input
        type="text"
        id={nameId}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter campaign name"
        onChange={e => setCampaign(e.target.value)}
        required
      />

      <button
        type="submit"
        className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 disabled:bg-gray-500 dark:disabled:bg-gray-700 disabled:cursor-not-allowed"
        disabled={hasError}
      >
        Submit
      </button>
    </form>
  );
}
export default CreateCampaign;
