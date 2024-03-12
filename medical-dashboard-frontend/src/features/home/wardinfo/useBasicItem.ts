import { getFakeBasicItem } from '@/utils/fakeHelper';
import { useQuery } from '@tanstack/vue-query';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export const useBasicItem = () => {
  const route = useRoute();
  const basicItemParam = computed<string>(
    () => route.query.basicItem as string
  );

  const { data: basicItemData, isLoading } = useQuery({
    queryKey: ['basicItem', basicItemParam],
    queryFn: () => getFakeBasicItem(basicItemParam.value),
  });

  return { basicItemData, isLoading };
};
