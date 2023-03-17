export interface ChartItem {
  day:
    | 'monday'
    | 'tuesday'
    | 'wednesday'
    | 'thursday'
    | 'friday'
    | 'saturday'
    | 'sunday';
  value: number;
}

export interface OverviewDTO {
  installs: ChartItem[];
  revenue: ChartItem[];
}

export interface CampaignItemDTO {
  id: string;
  name: string;
  installs: ChartItem[];
}
