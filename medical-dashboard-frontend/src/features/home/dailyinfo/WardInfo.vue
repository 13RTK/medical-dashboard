<template>
  <DailyInfo infoTitle="换床信息" :dailyInfoList="wardInfo" />
</template>

<script setup>
import { ref } from "vue";
import DailyInfo from "./DailyInfo.vue";

const wardInfo = ref(["14 -> 03", "12 -> 18", "16 -> 09", "14 -> 03"]);
</script>
