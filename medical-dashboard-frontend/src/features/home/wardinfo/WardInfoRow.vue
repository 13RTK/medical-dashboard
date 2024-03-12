<template>
  <WardInfoList
    v-for="wardInfo in wardInfos.basicItems"
    :key="wardInfo.head"
    :wardInfo="wardInfo"
  />
</template>

<script setup lang="ts">
import WardInfoList from './WardInfoList.vue';
import BasicInfo from '@/types/BasicInfo';

defineProps<{
  wardInfos: BasicInfo;
}>();
</script>
