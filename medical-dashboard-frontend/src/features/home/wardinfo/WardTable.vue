<template>
  <div class="grid grid-cols-12 gap-1/2">
    <ul
      class="menu w-fit menu-vertical rounded-box col-span-1 inline-block my-auto"
    >
      <WardItem
        :items="items"
        :currentItem="currentItem"
        :onChangeItem="handleChangeItem"
      />
    </ul>

    <WardInfo class="col-span-11 inline-block" :currentItem="currentItem" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

import WardItem from "./WardItem.vue";
import WardInfo from "./WardInfo.vue";

const route = useRoute();
const items = ref(["血压", "血糖", "雾化", "体温"]);
const currentItem = ref(route.query.basicItem || items.value[0]);
const router = useRouter();

function handleChangeItem(newItem) {
  currentItem.value = newItem;

  router.push({
    name: "home",
    query: {
      basicItem: newItem,
    },
  });
}

onMounted(() => {
  router.push({
    name: "home",
    query: {
      basicItem: items.value[0],
    },
  });
});
</script>
