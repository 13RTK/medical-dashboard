<template>
  <DailyInfo infoTitle="今日值班医生" :dailyInfoList="dailyDoctor" />
</template>

<script setup>
import { ref } from "vue";
import DailyInfo from "./DailyInfo.vue";

const dailyDoctor = ref(["张三", "李四", "王五", "赵六"]);
</script>
