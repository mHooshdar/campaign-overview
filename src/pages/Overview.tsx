import CampaignLineChart from '@components/CampaignLineChart';
import Skeleton from '@components/Skeleton';
import { useGetOverview } from '@hooks/api/useOverview';

function Overview() {
  const getOverview = useGetOverview({});
  const installs = getOverview.data?.data.installs;
  const revenues = getOverview.data?.data.revenue;

  return (
    <div className="flex md:flex-row flex-col justify-between gap-5">
      {getOverview.isLoading ||
      installs === undefined ||
      revenues === undefined ? (
        <>
          <Skeleton width="100%" height="350px" />
          <Skeleton width="100%" height="350px" />
        </>
      ) : (
        <>
          <CampaignLineChart
            data={installs}
            className="flex-1"
            title="Installs"
          />
          <CampaignLineChart
            data={revenues}
            className="flex-1"
            title="Revenue"
          />
        </>
      )}
    </div>
  );
}

export default Overview;
