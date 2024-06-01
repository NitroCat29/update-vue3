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
    b-black
    style="transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out"
  >
    <div flex items-center>
      <a
        href="#"
        relative
        left-10
        decoration-none
        text-lg
        font-bold
        text-gray-800
        dark:text-white
        ><span block i-uil-home-alt color-black dark:color-white w-10 h-10></span
      ></a>
    </div>
    <div class="flex items-center">
      <ul class="flex space-x-4">
        <li>
          <a
            href="#"
            text-gray-800
            hover:text-gray-600
            dark:text-white
            dark:hover:text-gray-300
            decoration-none
            >Home</a
          >
        </li>
        <li ref="menuRef" class="relative">
          <a
            href="#"
            text-gray-800
            hover:text-gray-600
            dark:text-white
            dark:hover:text-gray-300
            flex
            items-center
            decoration-none
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
          id="btn-theme"
          type="button"
          text-gray-500
          dark:text-gray-400
          hover:bg-slate-500
          dark:hover:bg-gray-4
          dark:bg-gray-7
          ring
          rounded-lg
          text-sm
          outline-none
          appearance-none
          cursor-pointer
          p-2.5
          inline-flex
          items-center
          transition-all
          duration-200
          hover:ring-cyan
          @click="isDark = !isDark"
        >
          <a v-if="isDark" i-carbon-moon color-white></a>
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
#btn-theme {
  border: none;

  cursor: pointer; /* Maintain button functionality */
}
</style>
