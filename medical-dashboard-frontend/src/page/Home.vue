<template>
  <main class="grid sm:grid-cols-12 gap-2 m-1">
    <div class="lg:col-span-10">
      <!-- Ward info -->
      <WardTable
        class="lg:border-solid lg:border-[F1F1F1] lg:border-r-8 lg:border-b-8 h-fit"
      />

      <!-- Overview info -->
      <div class="bg-red-400 grid-cols-2 grid">
        <div class="bg-purple-400 col-span-1">overview</div>
        <div class="bg-blue-400 col-span-1">options</div>
      </div>
    </div>

    <!-- Daily info -->
    <div class="lg:col-span-2">
      <DailyTable />
    </div>
  </main>
</template>

<script setup>
import WardTable from '@/features/home/wardinfo/WardTable.vue';
import DailyTable from '@/features/home/dailyinfo/DailyTable.vue';
</script>
