<template>
  <DailyInfo infoTitle="今日值班医生" :dailyInfoList="dailyDoctor" />
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import DailyInfo from './DailyInfo.vue';

const dailyDoctor: Ref<string[]> = ref(['张三', '李四', '王五', '赵六']);
</script>
