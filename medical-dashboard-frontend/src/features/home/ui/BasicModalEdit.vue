<template>
  <div>
    <h3 class="h-fit">DEMO</h3>
    <!-- Items -->
    <ul class="grid grid-cols-3">
      <li class="col-span-1 w-fit" v-for="idx in 4">{{ idx }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
