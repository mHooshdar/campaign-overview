import { useQuery } from '@tanstack/react-query';
import axios from '@utils/axios';
import type { OverviewDTO } from '@types';

interface GetOverviewInput {}

export async function getOverview(query: GetOverviewInput) {
  return axios.get<OverviewDTO>('/overview', { params: query });
}

export function useGetOverview(query: GetOverviewInput) {
  return useQuery({
    queryKey: ['overview'],
    queryFn: () => getOverview(query),
  });
}
