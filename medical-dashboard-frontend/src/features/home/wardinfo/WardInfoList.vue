<template>
  <tr>
    <th class="col-span-1 text-green-500">{{ wardInfo.head }}</th>
    <td class="col-span-1">
      总计:
      <span class="text-green-500">
        {{ wardInfo.wards.length }}
      </span>
    </td>
    <td class="col-span-1" v-for="currentWard in currentWardInfo">
      <span class="text-red-600">
        {{ currentWard.wardNum }}
      </span>
      <span> ({{ currentWard.firstName }}) </span>
    </td>

    <!-- place hold to maintain the table format -->
    <td v-for="_idx in 8 - currentWardInfo.length"></td>

    <!-- Pagination button -->
    <td class="join inline-block col-end-2" v-show="wardInfo.wards.length > 8">
      <button
        class="join-item btn btn-sm"
        @click="handlePrevPage"
        :disabled="page === 1"
      >
        <
      </button>
      <button class="join-item btn btn-sm" disabled>{{ page }}</button>
      <button
        class="join-item btn btn-sm"
        @click="handleNextPage"
        :disabled="page === pageCount"
      >
        >
      </button>
    </td>
  </tr>
</template>

<script setup>
import { useWardInfo } from "./useWardInfo";

const props = defineProps({
  wardInfo: {
    type: Object,
  },
});

const { page, pageCount, currentWardInfo, handlePrevPage, handleNextPage } =
  useWardInfo(props.wardInfo);

// const page = ref(1);
// const pageCount = computed(() => {
//   return Math.ceil(props.wardInfo.wards.length / 8);
// });

// const currentWardInfo = computed(() => {
//   return props.wardInfo.wards.slice((page.value - 1) * 8, page.value * 8);
// });

// function handlePrevPage() {
//   if (page.value > 1) {
//     page.value--;
//   }
// }

// function handleNextPage() {
//   if (page.value < pageCount.value) {
//     page.value++;
//   }
// }
</script>
