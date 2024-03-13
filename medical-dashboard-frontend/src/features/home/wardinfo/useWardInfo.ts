import type BasicItem from '@/types/BasicItem';
import type WardItem from '@/types/WardItem';
import { getViteConfig } from '@/utils/configHelper';
import { ref, type Ref, computed } from 'vue';

const BASIC_PAGE_SIZE = Number(getViteConfig('BASIC_SIZE')) || 8;

export const useWardInfo = (wardItem: BasicItem) => {
  const page: Ref<number> = ref(1);
  const pageCount = computed<number>(() => {
    return Math.ceil(wardItem.wards.length / BASIC_PAGE_SIZE);
  });

  const currentWardItems = computed<WardItem[]>(() => {
    const wardItems: WardItem[] = wardItem.wards;

    return wardItems.slice(
      (page.value - 1) * BASIC_PAGE_SIZE,
      page.value * BASIC_PAGE_SIZE
    );
  });

  function handlePrevPage(event: Event) {
    event.stopPropagation();

    if (page.value > 1) {
      page.value--;
    }
  }

  function handleNextPage(event: Event) {
    event.stopPropagation();

    if (page.value < pageCount.value) {
      page.value++;
    }
  }

  return {
    page,
    pageCount,
    currentWardItems,
    handlePrevPage,
    handleNextPage,
    BASIC_PAGE_SIZE,
  };
};
