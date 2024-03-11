<template>
  <div>
    <table class="table table-pin-rows">
      <Spinner v-if="isLoading" />
      <tbody v-else="!isLoading">
        <WardInfoRow :wardInfos="basicItemData" />
      </tbody>
    </table>
  </div>
</template>

<script setup>
import WardInfoRow from "./WardInfoRow.vue";

import Spinner from "@/ui/Spinner.vue";
import { useBasicItem } from "./useBasicItem";

const props = defineProps({
  currentItem: String,
});

const { basicItemData, isLoading, error } = useBasicItem();
</script>
