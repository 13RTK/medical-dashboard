import { ref, type Ref } from 'vue';
import { defineStore } from 'pinia';
import type WardItem from '@/types/WardItem';

export const useBasicModalStore = defineStore('basicModal', () => {
  const title: Ref<string> = ref('Title');
  const wardItems: Ref<WardItem[]> = ref([]);

  function modifyModalTitle(newTitle: string): void {
    title.value = newTitle;
  }

  function modifyWardItems(newWardItems: WardItem[]): void {
    wardItems.value = newWardItems;
  }

  function openBasicModal(
    title: string = 'title',
    wardItems: WardItem[] = []
  ): void {
    console.log(title);
    console.log(wardItems);

    modifyModalTitle(title);
    modifyWardItems(wardItems);
  }

  return {
    title,
    wardItems,
    modifyModalTitle,
    modifyWardItems,
    openBasicModal,
  };
});
