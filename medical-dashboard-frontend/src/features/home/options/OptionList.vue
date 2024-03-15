<template>
  <Spinner v-if="isLoading" />
  <ul v-else>
    <OverviewItem
      v-for="optionsItem in optionsItems"
      :key="optionsItem.head"
      :optionsItem="optionsItem"
    />
  </ul>
</template>

<script setup lang="ts">
import { useOptionsItems } from './useOptionsItems';

const { optionsItems, isLoading } = useOptionsItems();
</script>
