<template>
  <th class="col-span-1 text-green-500">{{ wardItem.head }}</th>
  <td class="col-span-1">
    总计:
    <span class="text-green-500">
      {{ wardItem.wards.length }}
    </span>
  </td>
  <td class="col-span-1" v-for="currentWard in currentWardItems">
    <span class="text-red-600">
      {{ currentWard.wardNum }}
    </span>
    <span> ({{ currentWard.firstName }}) </span>
  </td>

  <!-- place hold to maintain the table format -->
  <td v-for="_idx in 8 - currentWardItems.length"></td>

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
</template>

<script setup lang="ts">
import type BasicItem from '@/types/BasicItem';
import { useWardInfo } from './useWardInfo';

const props = defineProps<{
  wardItem: BasicItem;
}>();

const { page, pageCount, currentWardItems, handlePrevPage, handleNextPage } =
  useWardInfo(props.wardItem);
</script>
