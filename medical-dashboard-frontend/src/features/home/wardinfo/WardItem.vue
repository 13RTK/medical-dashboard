<template>
  <li v-for="item in items">
    <a
      :class="`bg-base-200 m-2 rounded ${currentInfo === item ? 'active' : ''}`"
      @click="changeItem(item)"
    >
      <div :class="`${currentInfo === item ? 'text-white' : 'text-black '}`">
        {{ item }}
      </div>
    </a>
  </li>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

type WardItemProp = {
  items: string[];
};
const props = defineProps<WardItemProp>();

const route = useRoute();
const router = useRouter();

const currentInfo = computed<string>(() => {
  return (route.query.basicInfo as string) || props.items[0];
});

const changeItem = (item: string): void => {
  router.push({
    name: 'home',
    query: {
      basicInfo: item,
    },
  });
};
</script>
