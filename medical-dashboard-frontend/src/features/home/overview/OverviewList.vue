<template>
  <Spinner v-if="isLoading" />
  <table v-else>
    <OverviewItem
      v-for="overviewItem in overviewItems"
      :key="overviewItem.head"
      :overviewItem="overviewItem"
    />
  </table>
</template>

<script setup>
import Spinner from '@/ui/Spinner.vue';
import OverviewItem from './OverviewItem.vue';
import { useOverviewItems } from './useOverviewItems';

const { overviewItems, isLoading } = useOverviewItems();
</script>
