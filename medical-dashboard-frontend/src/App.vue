<template>
  <AppLayout />
</template>

<script setup>
import { onMounted } from "vue";
import AppLayout from "@/ui/AppLayout.vue";

onMounted(() => {
  const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
  const dataTheme = darkTheme.addListener((event) => {
    // if (event.matches) {
    //   document.documentElement.setAttribute("data-theme", "dark");
    // } else {
    //   document.documentElement.setAttribute("data-theme", "light");
    // }
  });
});
</script>
