<template>
  <DailyInfo infoTitle="今日值班护士" :dailyInfoList="dailyNurse" />
</template>

<script setup>
import { ref } from "vue";
import DailyInfo from "./DailyInfo.vue";

const dailyNurse = ref(["张三", "李四", "王五", "赵六"]);
</script>
