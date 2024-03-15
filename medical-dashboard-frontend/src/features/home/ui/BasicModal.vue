<template>
  <dialog id="basic_modal" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
      <form method="dialog">
        <button
          class="btn btn-sl btn-circle btn-ghost absolute right-2 top-2"
          @click="closeModal"
        >
          ✕
        </button>
      </form>
      <!-- Title -->
      <h3 class="font-bold text-lg text-center text-green-500 my-auto">
        {{ currentHead }}
      </h3>
      <!-- Content -->
      <BasicModalContent :wardItems="wardItems" :currentHead="currentHead" />
    </div>
  </dialog>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router';

import { useBasicModalStore } from '@/stores/basicModal';
import BasicModalContent from './BasicModalContent.vue';

const basicModalStore = useBasicModalStore();
const { title, wardItems } = storeToRefs(basicModalStore);

const route = useRoute();
const router = useRouter();

const currentHead = computed(() => {
  const basicInfo = route.query.basicInfo as string;
  const overviewInfo = route.query.overviewInfo as string;

  if (overviewInfo) {
    return `${overviewInfo}`;
  }

  return `${basicInfo}(${title.value})`;
});

function closeModal() {
  router.push({
    name: route.name!,
    query: {
      basicInfo: route.query.basicInfo,
    },
  });
}
</script>
