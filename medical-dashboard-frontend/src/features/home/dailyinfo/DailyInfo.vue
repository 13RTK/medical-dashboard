<template>
  <div class="collapse bg-base-200 w-3/4 mx-auto my-4 collapse-plus">
    <input type="checkbox" class="peer" />
    <div
      class="collapse-title text-sm font-medium peer-checked:text-secondary-content peer-checked:bg-blue-500"
    >
      {{ infoTitle }}
    </div>
    <div
      class="collapse-content peer-checked:text-secondary-content text-center"
    >
      <span class="text-black" v-for="dailyInfo in dailyInfoList">
        {{ dailyInfo }}
        <br />
      </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  infoTitle: String,
  dailyInfoList: Array,
});
</script>
