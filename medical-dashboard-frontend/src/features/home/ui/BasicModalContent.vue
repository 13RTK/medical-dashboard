<template>
  <div class="grid grid-cols-2 border-solid border-gray-400 border-t-2">
    <BasicModalList
      class="col-span-1 border-solid border-gray-400 border-r-2 h-80 overflow-auto"
      :wardItems="wardItems"
    />
    <BasicModalEdit :currentHead="currentHead" />
  </div>
</template>

<script setup lang="ts">
import type WardItem from '@/types/WardItem';
import BasicModalEdit from './BasicModalEdit.vue';
import BasicModalList from './BasicModalList.vue';

defineProps<{
  wardItems: WardItem[];
  currentHead: string;
}>();
</script>
