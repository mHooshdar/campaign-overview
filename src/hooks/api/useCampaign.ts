import { useQuery } from '@tanstack/react-query';
import axios from '@utils/axios';
import type { CampaignDTO } from '@types';

interface GetCampaignInput {}

export async function getCampaign(query: GetCampaignInput) {
  return axios.get<CampaignDTO>('/campaign', { params: query });
}

export function useGetCampaign(query: GetCampaignInput) {
  return useQuery({
    queryKey: ['campaign'],
    queryFn: () => getCampaign(query),
  });
}
