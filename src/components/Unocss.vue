<script setup lang="ts">
import { ref } from 'vue';
import { useDark, useElementHover } from '@vueuse/core';

const isDark = useDark();
const isMenuOpen = ref(false);

const menuRef = ref<HTMLElement | null>(null);
const isHovered = useElementHover(menuRef);
</script>

<template>
  <nav
    id="navbar"
    flex
    items-center
    justify-between
    p-4
    bg-white
    dark:bg-gray-800
    rounded-lg
    shadow-lg
    dark:shadow-2xl
    dark:shadow-red
    border-50
  >
    <div class="flex items-center">
      <a href="" text-lg font-bold text-gray-800 dark:text-white>Logo</a>
    </div>
    <div class="flex items-center">
      <ul class="flex space-x-4">
        <li>
          <a
            href="#"
            class="text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
            >Home</a
          >
        </li>
        <li ref="menuRef" class="relative">
          <a
            href="#"
            class="text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 flex items-center"
            @click.prevent="isMenuOpen = !isMenuOpen"
            @blur="isMenuOpen = false"
          >
            Dropdown
            <svg
              class="ml-1 h-4 w-4 transition-transform"
              :class="{ 'rotate-180': isMenuOpen }"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <div
            v-show="isMenuOpen && isHovered"
            class="absolute z-10 bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700"
          >
            <ul class="text-sm text-gray-700 dark:text-gray-200">
              <li><a href="#"></a></li>
            </ul>
          </div>
        </li>
      </ul>
      <div class="ml-4">
        <button
          class="text-gray-500 dark:text-gray-400 hover:bg-purple-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
          @click="isDark = !isDark"
        >
          <a v-if="isDark" i-carbon-moon color-dark></a>
          <a v-else i-carbon-sun color-dark></a>
        </button>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
// #navbar {
//   border: 2px solid gray;
// }
</style>
