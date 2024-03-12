<template>
  <li v-for="item in items">
    <a
      :class="`bg-base-200 m-2 rounded ${currentItem === item ? 'active' : ''}`"
      @click="onChangeItem(item)"
    >
      <div :class="`${currentItem === item ? 'text-white' : 'text-black '}`">
        {{ item }}
      </div>
    </a>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  items: string[];
  currentItem: string;
  onChangeItem: (item: string) => void;
}>();
</script>
