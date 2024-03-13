<template>
  <tr
    onclick="basic_modal.showModal()"
    class="hover:bg-gray-200 cursor-pointer"
    @click="openBasicModal(wardItem.head, wardItem.wards)"
  >
    <th class="col-span-1 text-green-500">{{ wardItem.head }}</th>
    <td class="col-span-1">
      总计:
      <span class="text-green-500">
        {{ wardItem.wards.length }}
      </span>
    </td>
    <td class="col-span-1" v-for="currentBasicItem in currentBasicItems">
      <span class="text-red-600">
        {{ currentBasicItem.wardNum }}
      </span>
      <span> ({{ currentBasicItem.firstName }}) </span>
    </td>

    <!-- place hold to maintain the table format -->
    <td v-for="_idx in pageSize - currentBasicItems.length"></td>

    <!-- Pagination button -->
    <td class="join inline-block col-end-2" v-show="wardItem.wards.length > 8">
      <button
        class="join-item btn btn-sm"
        @click="handlePrevPage"
        :disabled="page === 1"
      >
        <
      </button>
      <button class="join-item btn btn-sm" disabled>{{ page }}</button>
      <button
        class="join-item btn btn-sm"
        @click="handleNextPage"
        :disabled="page === pageCount"
      >
        >
      </button>
    </td>
  </tr>
</template>

<script setup lang="ts">
import type BasicItem from '@/types/BasicItem';
import type WardItem from '@/types/WardItem';

import { useBasicModalStore } from '@/stores/basicModal';

const { openBasicModal } = useBasicModalStore();

type BasicItemListProps = {
  page: number;
  pageCount: number;
  currentBasicItems: WardItem[];
  wardItem: BasicItem;
  handlePrevPage: () => void;
  handleNextPage: () => void;

  pageSize: number;
};

defineProps<BasicItemListProps>();
</script>
