import { useGetOverview } from '@hooks/api/useOverview';

function Overview() {
  const getOverview = useGetOverview({});

  return (
    <div>
      {getOverview.isLoading ? (
        'loading'
      ) : (
        <>
          {getOverview.data?.data.installs[0].day}-
          {getOverview.data?.data.installs[0].value}
        </>
      )}
    </div>
  );
}

export default Overview;
