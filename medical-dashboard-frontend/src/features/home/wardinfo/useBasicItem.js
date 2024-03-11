import { getFakeBasicItem } from "@/utils/fakeHelper";
import { useQuery } from "@tanstack/vue-query";
import { useRoute } from "vue-router";
import { computed } from "vue";

export const useBasicItem = (item) => {
  const route = useRoute();
  const basicItem = computed(() => {
    return route.query.basicItem;
  });

  const {
    data: basicItemData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["basicItem", basicItem],
    queryFn: () => getFakeBasicItem(basicItem),
  });

  return { basicItemData, error, isLoading };
};
