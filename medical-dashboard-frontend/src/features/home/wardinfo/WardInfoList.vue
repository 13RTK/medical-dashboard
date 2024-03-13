<template>
  <BasicItemList
    :page="page"
    :pageCount="pageCount"
    :wardItem="wardItem"
    :currentBasicItems="currentWardItems"
    :handlePrevPage="handlePrevPage"
    :handleNextPage="handleNextPage"
    :pageSize="BASIC_PAGE_SIZE"
  />
</template>

<script setup lang="ts">
import { useWardInfo } from './useWardInfo';
import BasicItemList from '../ui/BasicItemList.vue';

import type BasicItem from '@/types/BasicItem';

const props = defineProps<{
  wardItem: BasicItem;
}>();

const {
  page,
  pageCount,
  currentWardItems,
  handlePrevPage,
  handleNextPage,
  BASIC_PAGE_SIZE,
} = useWardInfo(props.wardItem);
</script>
../ui/BasicItemList.vue
