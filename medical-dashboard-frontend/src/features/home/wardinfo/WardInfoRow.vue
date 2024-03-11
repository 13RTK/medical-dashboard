<template>
  <WardInfoList
    v-for="wardInfo in wardInfos.data"
    :key="wardInfo.head"
    :wardInfo="wardInfo"
  />
</template>

<script setup>
import WardInfoList from "./WardInfoList.vue";

defineProps({
  wardInfos: Object,
});
</script>
