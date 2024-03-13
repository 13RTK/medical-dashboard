<template>
  <div class="grid grid-cols-2">
    <BasicModalList
      class="col-span-1 border-solid border-gray-400 border-r-2"
    />
    <BasicModalEdit class="col-span-1" />
  </div>
</template>

<script setup lang="ts">
import BasicModalEdit from './BasicModalEdit.vue';
import BasicModalList from './BasicModalList.vue';
</script>
