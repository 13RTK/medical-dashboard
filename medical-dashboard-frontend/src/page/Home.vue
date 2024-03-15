<template>
  <main class="grid xl:grid-cols-12 gap-2 m-1">
    <div class="xl:col-span-10">
      <!-- Ward info -->
      <WardTable
        class="lg:border-solid lg:border-[F1F1F1] lg:border-r-8 lg:border-b-8 h-fit"
      />

      <div class="grid-cols-2 grid">
        <!-- Overview info -->
        <div class="col-span-1 border-solid border-gray-200 border-r-4">
          <OverviewTable />
        </div>
        <!-- Options info -->
        <div
          class="col-span-1 border-solid border-gray-200 border-l-4 border-r-8"
        >
          <OptionList />
        </div>
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
import OptionList from '@/features/home/options/OptionList.vue';
</script>
