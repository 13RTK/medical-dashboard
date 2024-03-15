<template>
  <tr
    onclick="basic_modal.showModal()"
    class="hover:bg-gray-200 cursor-pointer col-span-full grid grid-cols-9 border-gray-200 border-solid border-b-2"
    @click="handleClickModal"
  >
    <th class="col-span-2 text-green-500">{{ wardItem.head }}</th>
    <td class="col-span-2 w-fit">
      总计:
      <span class="text-green-500 w-fit">
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
    <td
      class="col-span-1"
      v-for="_idx in 9 - currentBasicItems.length"
      v-if="currentBasicItems.length < pageSize"
    ></td>

    <!-- Pagination button -->
    <td
      class="join inline-block col-span-2 my-auto ml-6"
      v-show="wardItem.wards.length > 8"
    >
      <button
        class="join-item btn xl:btn-sm btn-xs"
        @click="handlePrevPage"
        :disabled="page === 1"
      >
        <
      </button>
      <button class="join-item btn xl:btn-sm btn-xs w-2" disabled>
        {{ page }}
      </button>
      <button
        class="join-item btn xl:btn-sm btn-xs"
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
import { useRoute, useRouter } from 'vue-router';

const { openBasicModal } = useBasicModalStore();

const props = defineProps<BasicItemListProps>();

type BasicItemListProps = {
  page: number;
  pageCount: number;
  currentBasicItems: WardItem[];
  wardItem: BasicItem;
  handlePrevPage: (event: Event) => void;
  handleNextPage: (event: Event) => void;

  pageSize: number;
};

const router = useRouter();
const route = useRoute();

function handleClickModal() {
  router.push({
    name: 'home',
    query: { ...route.query, options: props.wardItem.head },
  });

  openBasicModal(props.wardItem.head, props.wardItem.wards);
}
</script>
