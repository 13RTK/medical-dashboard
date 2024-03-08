<template>
  <div class="grid grid-cols-12 gap-1/2">
    <ul
      class="menu w-fit menu-vertical rounded-box col-span-1 inline-block my-auto"
    >
      <WardItem :items="items" />
    </ul>

    <WardInfo class="col-span-11 inline-block" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import WardItem from "./WardItem.vue";
import WardInfo from "./WardInfo.vue";

const items = ref(["血压", "血糖", "雾化", "体温"]);
</script>
