<template>
  <div>
    <h3 class="h-fit">{{ currentHead }}</h3>
    <!-- Items -->
    <ul class="grid grid-cols-3">
      <li class="col-span-1 w-fit m-2" v-for="idx in 4">
        <div class="flex">
          <span class="m-1"> {{ idx }} </span>
          <button class="btn bg-red-400 btn-sm">删除</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  currentHead: string;
}>();
</script>

<style scoped></style>
