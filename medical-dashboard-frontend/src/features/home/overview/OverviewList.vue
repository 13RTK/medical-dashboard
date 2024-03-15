<template>
  <Spinner v-if="isLoading" />
  <ul v-else>
    <OverviewItem
      v-for="overviewItem in overviewItems"
      :key="overviewItem.head"
      :overviewItem="overviewItem"
    />
  </ul>
</template>

<script setup>
import Spinner from '@/ui/Spinner.vue';
import OverviewItem from './OverviewItem.vue';
import { useOverviewItems } from './useOverviewItems';

const { overviewItems, isLoading } = useOverviewItems();
</script>
