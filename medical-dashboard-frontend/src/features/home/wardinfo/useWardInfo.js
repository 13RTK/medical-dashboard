import { getViteConfig } from '@/utils/configHelper';
import { ref, computed } from 'vue';

const PAGE_SIZE = Number(getViteConfig('PAGE_SIZE'));

export const useWardInfo = (wardInfo) => {
  const page = ref(1);
  const pageCount = computed(() => {
    return Math.ceil(wardInfo.wards.length / PAGE_SIZE);
  });

  const currentWardInfo = computed(() => {
    return wardInfo.wards.slice(
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
