<template>
  <div class="navbar bg-[#63C7B3]">
    <div class="navbar-start w-fit">
      <!-- dropdown when the width less then the lg -->
      <div class="dropdown">
        <div
          tabindex="0"
          role="button"
          class="btn btn-ghost lg:hidden text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <div class="text-white">责任医师</div>
          </li>
          <li>
            <a class="text-white">护士交班</a>
          </li>
          <li>
            <a class="text-white">病区排班</a>
          </li>
          <li>
            <a class="text-white">输液管理</a>
          </li>
          <li>
            <a class="text-white">病区一览</a>
          </li>
          <li>
            <a class="text-white">今日概况</a>
          </li>
        </ul>
      </div>
      <a class="btn btn-ghost text-xl text-white">福康护理白板</a>
    </div>
    <div class="navbar-center hidden lg:flex mx-auto">
      <ul class="menu menu-horizontal px-1">
        <li>
          <router-link
            :to="{ name: 'home' }"
            :class="`text-white ${currentRoute === 'home' ? 'active' : ''}`"
            @click="handleChangeRoute('home')"
          >
            责任医师</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'nurse' }"
            :class="`text-white ${currentRoute === 'nurse' ? 'active' : ''}`"
            @click="handleChangeRoute('nurse')"
            >护士交班</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'schedule' }"
            :class="`text-white ${currentRoute === 'schedule' ? 'active' : ''}`"
            @click="handleChangeRoute('schedule')"
            >病区排班</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'transfuse' }"
            :class="`text-white ${
              currentRoute === 'transfuse' ? 'active' : ''
            }`"
            @click="handleChangeRoute('transfuse')"
            >输液管理</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'ward' }"
            :class="`text-white ${currentRoute === 'ward' ? 'active' : ''}`"
            @click="handleChangeRoute('ward')"
            >病区一览</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'overview' }"
            :class="`text-white ${currentRoute === 'overview' ? 'active' : ''}`"
            @click="handleChangeRoute('overview')"
            >今日概况</router-link
          >
        </li>
      </ul>
    </div>

    <div class="navbar-end sm:inline-block hidden text-white w-fit ml-auto">
      {{ currentDateTime }}
    </div>
    <div class="navbar-end w-fit inline-block ml-auto">
      <a class="btn bg-[#63C7B3]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getCurrentLocaleString } from '@/utils/timeHelper';
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const currentDateTime = ref(getCurrentLocaleString());
const currentRoute = ref(route.name);

const handleChangeRoute = (value: string) => {
  currentRoute.value = value;
};

let timeInterval: NodeJS.Timeout;
onMounted(() => {
  timeInterval = setInterval(() => {
    currentDateTime.value = getCurrentLocaleString();
  }, 1000);
});

onUnmounted(() => {
  if (timeInterval) {
    clearInterval(timeInterval);
  }
});
</script>
