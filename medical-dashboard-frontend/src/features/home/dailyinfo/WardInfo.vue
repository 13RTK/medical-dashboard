<template>
  <DailyInfo infoTitle="换床信息" :dailyInfoList="wardInfo" />
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import DailyInfo from './DailyInfo.vue';

const wardInfo: Ref<string[]> = ref([
  '14 -> 03',
  '12 -> 18',
  '16 -> 09',
  '14 -> 03',
]);
</script>
