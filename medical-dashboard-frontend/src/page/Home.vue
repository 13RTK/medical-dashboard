<template>
  <main class="grid xl:grid-cols-12 gap-2 m-1">
    <div class="xl:col-span-10">
      <!-- Ward info -->
      <WardTable
        class="lg:border-solid lg:border-[F1F1F1] lg:border-r-8 lg:border-b-8 h-fit"
      />

      <!-- Overview info -->
      <div class="bg-red-400 grid-cols-2 grid">
        <div class="bg-purple-400 col-span-1">
          <OverviewTable />
        </div>
        <div class="bg-blue-400 col-span-1">options</div>
      </div>
    </div>

    <!-- Daily info -->
    <DailyTable class="xl:col-span-2" />
  </main>

  <Teleport to="body">
    <BasicModal />
  </Teleport>
</template>

<script setup lang="ts">
import WardTable from '@/features/home/wardinfo/WardTable.vue';
import DailyTable from '@/features/home/dailyinfo/DailyTable.vue';
import OverviewTable from '@/features/home/overview/OverviewTable.vue';
import BasicModal from '@/features/home/ui/BasicModal.vue';
</script>
