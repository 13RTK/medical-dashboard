<template>
  <div>没有找到{{ resourceName }}</div>
</template>

<script setup lang="ts">
type EmptyProps = {
  resourceName: string;
};

defineProps<EmptyProps>();
</script>
