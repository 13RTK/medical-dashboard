<template>
  <div v-if="isLoading || !basicInfo">
    <div class="cols-span-1"></div>
    <Spinner class="cols-span-1" />
    <div class="cols-span-1"></div>
  </div>
  <div v-else>
    <table class="table table-pin-rows col-span-full">
      <tbody>
        <WardInfoList
          v-for="wardItem in basicInfo.basicItems"
          :key="wardItem.head"
          :wardItem="wardItem"
        />
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import Spinner from '@/ui/Spinner.vue';
import WardInfoList from './WardInfoList.vue';

import { useBasicInfo } from './useBasicInfo';

const { basicInfo, isLoading } = useBasicInfo();
</script>
