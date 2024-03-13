import { getFakeBasicInfo } from '@/utils/fakeHelper';
import { useQuery } from '@tanstack/vue-query';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export const useBasicInfo = () => {
  const route = useRoute();
  const basicInfoParam = computed<string>(
    () => route.query.basicInfo as string
  );

  const { data: basicInfo, isLoading } = useQuery({
    queryKey: ['basicInfo', basicInfoParam],
    queryFn: () => getFakeBasicInfo(basicInfoParam.value),
    // queryFn: () => {
    //   setTimeout(() => getFakeBasicItem(basicInfoParam.value), 500);
    // },
  });

  return { basicInfo, isLoading };
};
