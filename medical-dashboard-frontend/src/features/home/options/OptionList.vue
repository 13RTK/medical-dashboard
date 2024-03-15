<template>
  <Spinner v-if="isLoading" />
  <table v-else>
    <OptionItem
      v-for="optionsItem in optionsItems"
      :key="optionsItem.head"
      :optionsItem="optionsItem"
    />
  </table>
</template>

<script setup lang="ts">
import Spinner from '@/ui/Spinner.vue';
import OptionItem from './OptionItem.vue';
import { useOptionsItems } from './useOptionsItems';

const { optionsItems, isLoading } = useOptionsItems();
</script>
