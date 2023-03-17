import { ChartItem } from '@types';

function generateCampaign(name: string) {
  const days = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'staruday',
    'sunday',
  ] as ChartItem['day'][];
  return {
    name,
    id: String(Math.floor(Math.random() * 10000)),
    installs: days.map(day => ({
      day: day,
      value: Math.floor(Math.random() * 100),
    })),
  };
}

export default generateCampaign;
