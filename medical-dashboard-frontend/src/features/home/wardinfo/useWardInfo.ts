import type BasicItem from '@/types/BasicItem';
import type WardItem from '@/types/WardItem';
import { getViteConfig } from '@/utils/configHelper';
import { ref, type Ref, computed } from 'vue';

const PAGE_SIZE = Number(getViteConfig('PAGE_SIZE'));

export const useWardInfo = (wardInfo: BasicItem) => {
  const page: Ref<number> = ref(1);
  const pageCount = computed<number>(() => {
    return Math.ceil(wardInfo.wards.length / PAGE_SIZE);
  });

  const currentWardInfo = computed<WardItem[]>(() => {
    const wardItems: WardItem[] = wardInfo.wards;

    return wardItems.slice(
      (page.value - 1) * PAGE_SIZE,
      page.value * PAGE_SIZE
    );
  });

  function handlePrevPage() {
    if (page.value > 1) {
      page.value--;
    }
  }

  function handleNextPage() {
    if (page.value < pageCount.value) {
      page.value++;
    }
  }

  return {
    page,
    pageCount,
    currentWardInfo,
    handlePrevPage,
    handleNextPage,
  };
};
