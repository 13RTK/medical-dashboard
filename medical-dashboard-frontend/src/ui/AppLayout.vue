<template>
  <Navbar class="fixed top-0 z-10" />
  <main class="my-16">
    <router-view></router-view>
  </main>
</template>

<script setup lang="ts">
import Navbar from '@/ui/Navbar.vue';
</script>
