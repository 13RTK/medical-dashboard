import { getFakeOverviewItems } from '@/utils/fakeHelper';
import { useQuery } from '@tanstack/vue-query';

export const useOverviewItems = () => {
  const { data: overviewItems, isLoading } = useQuery({
    queryKey: ['overviewInfo'],
    queryFn: () => getFakeOverviewItems(),
  });

  return { overviewItems, isLoading };
};
