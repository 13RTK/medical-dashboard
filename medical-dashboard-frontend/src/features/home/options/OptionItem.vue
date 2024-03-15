<template>
  <OptionItemList
    class="grid grid-cols-10"
    :page="page"
    :pageCount="pageCount"
    :currentBasicItems="currentWardItems"
    :wardItem="optionsItem"
    :handlePrevPage="handlePrevPage"
    :handleNextPage="handleNextPage"
    :pageSize="BASIC_PAGE_SIZE"
  />
</template>

<script setup lang="ts">
import type BasicItem from '@/types/BasicItem';
import OptionItemList from './OptionItemList.vue';
import { useWardInfo } from '../wardinfo/useWardInfo';

const props = defineProps<{
  optionsItem: BasicItem;
}>();

const OPTION_PAGE_SIZE = 3;
const {
  page,
  pageCount,
  currentWardItems,
  handlePrevPage,
  handleNextPage,
  BASIC_PAGE_SIZE,
} = useWardInfo(props.optionsItem, OPTION_PAGE_SIZE);
</script>
