<template>
  <div class="grid grid-cols-12 gap-1/2">
    <ul
      class="menu w-fit menu-vertical rounded-box col-span-1 inline-block my-auto"
    >
      <WardItem :items="items" />
    </ul>

    <!-- <WardInfo class="col-span-11 inline-block" /> -->
    <WardInfo class="col-span-11 grid grid-cols-3" />
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import WardItem from './WardItem.vue';
import WardInfo from './WardInfo.vue';

const route = useRoute();
const items: Ref<string[]> = ref(['血压', '血糖', '雾化', '体温']);

const router = useRouter();

onMounted(() => {
  if (route.query.basicInfo) {
    return;
  }

  router.push({
    name: 'home',
    query: {
      basicInfo: items.value[0],
    },
  });
});
</script>
