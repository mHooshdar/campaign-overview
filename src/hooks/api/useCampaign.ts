import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from '@utils/axios';
import type { CampaignItemDTO } from '@types';
import { useMemo } from 'react';

interface GetCampaignInput {}

export async function getCampaign(query: GetCampaignInput) {
  return axios.get<CampaignItemDTO[]>('/campaigns', { params: query });
}

// not used
export async function createCampaign(data: Omit<CampaignItemDTO, 'id'>) {
  return axios.post<CampaignItemDTO[]>('/campaigns', data);
}

export function useGetCampaign(query: GetCampaignInput) {
  return useQuery({
    queryKey: ['campaign'],
    queryFn: () => getCampaign(query),
  });
}

export function useGetCampaignMapped() {
  const getCampaign = useGetCampaign({});

  const campaignData = useMemo<Record<string, CampaignItemDTO>>(() => {
    return (getCampaign.data?.data || []).reduce(
      (prev, curr) => ({ ...prev, [curr.name]: curr }),
      {}
    );
  }, [getCampaign.data]);

  return { data: getCampaign, mappedData: campaignData };
}

export function useMutateCampaign() {
  const queryClient = useQueryClient();
  return useMutation({
    // @ts-ignore
    mutationFn: (data: CampaignItemDTO) => data,
    onSuccess: (newData: CampaignItemDTO) => {
      queryClient.setQueryData(['campaign'], (prevData: any) => {
        return prevData
          ? {
              ...prevData,
              data: [...prevData.data, newData],
            }
          : { data: [newData] };
      });
    },
  });
}
