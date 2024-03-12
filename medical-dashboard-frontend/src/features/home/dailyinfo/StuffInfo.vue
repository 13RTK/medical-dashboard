<template>
  <DailyInfo infoTitle="物品借出管理" :dailyInfoList="staffInfo" />
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import DailyInfo from './DailyInfo.vue';

const staffInfo: Ref<string[]> = ref([
  '11床 借出 体温计',
  '12 借入 被子',
  '08床 借入 水壶',
  '12床 借入 轮椅',
]);
</script>
