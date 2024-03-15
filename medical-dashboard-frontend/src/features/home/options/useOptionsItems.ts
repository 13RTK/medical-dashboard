import { getFakeOptionItems } from '@/utils/fakeHelper';
import { useQuery } from '@tanstack/vue-query';

export const useOptionsItems = () => {
  const { data: optionsItems, isLoading } = useQuery({
    queryKey: ['overviewInfo'],
    queryFn: () => getFakeOptionItems(),
  });

  return { optionsItems, isLoading };
};
