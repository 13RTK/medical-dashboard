<template>
  <main class="grid sm:grid-cols-12 gap-2 m-1">
    <!-- Ward info -->
    <div
      class="lg:col-span-10 lg:border-solid lg:border-[F1F1F1] lg:border-r-8 lg:border-b-8 h-fit"
    >
      <WardTable />
    </div>

    <!-- Daily info -->
    <div class="lg:col-span-2">
      <DailyTable />
    </div>
  </main>
</template>

<script setup>
import WardTable from "@/features/home/wardinfo/WardTable.vue";
import DailyTable from "@/features/home/dailyinfo/DailyTable.vue";
</script>
