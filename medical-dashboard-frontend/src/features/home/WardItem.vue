<template>
  <li v-for="item in items">
    <a class="bg-base-200 m-2 rounded">
      <div class="text-stone-50">
        {{ item }}
      </div>
    </a>
  </li>
</template>

<script setup>
const props = defineProps({
  items: Array,
});
</script>
