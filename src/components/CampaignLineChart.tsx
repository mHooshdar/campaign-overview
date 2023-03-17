import { ChartItem } from '@types';
import {
  Line,
  LineChart,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

interface Props {
  data: {
    day: ChartItem['day'];
    value: ChartItem['value'];
  }[];
  xKey?: string;
  yKey?: string;
  className?: string;
  title: string;
}

function CampaignLineChart({
  data,
  className,
  title,
  xKey = 'day',
  yKey = 'value',
}: Props) {
  return (
    <div className={className}>
      <div className="font-bold md:mb-3 mb-3 md:text-xl text-md dark:text-white">
        {title}
      </div>
      <ResponsiveContainer width="90%" height={300}>
        <LineChart data={data}>
          <Line type="monotone" dataKey={yKey} stroke="#6666ff" />
          <CartesianGrid stroke="#cecece" strokeDasharray="8 8" />
          <XAxis dataKey={xKey} />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CampaignLineChart;
