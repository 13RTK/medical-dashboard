<template>
  <ul class="grid grid-cols-2">
    <li
      class="cols-span-1 rounded my-1 hover:bg-gray-300 cursor-pointer h-8"
      v-for="wardItem in wardItems"
    >
      <span class="mr-2">{{ wardItem.wardNum }}</span>
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
