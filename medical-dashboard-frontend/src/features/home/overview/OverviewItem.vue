<template>
  <table class="grid grid-cols-10">
    <OverviewItemList
      :page="page"
      :pageCount="pageCount"
      :currentBasicItems="currentWardItems"
      :wardItem="overviewItem"
      :handlePrevPage="handlePrevPage"
      :handleNextPage="handleNextPage"
      :pageSize="BASIC_PAGE_SIZE"
    />
  </table>
</template>

<script setup lang="ts">
import type BasicItem from '@/types/BasicItem';
import OverviewItemList from './OverviewItemList.vue';
import { useWardInfo } from '../wardinfo/useWardInfo';

const props = defineProps<{
  overviewItem: BasicItem;
}>();

const OVERVIEW_PAGE_SIZE = 3;
const {
  page,
  pageCount,
  currentWardItems,
  handlePrevPage,
  handleNextPage,
  BASIC_PAGE_SIZE,
} = useWardInfo(props.overviewItem, OVERVIEW_PAGE_SIZE);
</script>
