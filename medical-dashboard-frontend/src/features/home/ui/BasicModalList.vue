<template>
  <ul class="grid grid-cols-2">
    <li
      class="cols-span-1 border-solid border-green-400 border-b-2 border-l-2 rounded my-1 hover:bg-gray-300 cursor-pointer"
      v-for="wardItem in wardItems"
    >
      <span class="mr-2 bg-green-500">{{ wardItem.wardNum }}</span>
      <span>{{ wardItem.firstName }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type WardItem from '@/types/WardItem';

defineProps<{
  wardItems: WardItem[];
}>();
</script>
