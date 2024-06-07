<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';
import { useDark, useToggle } from '@vueuse/core';
import Box from './components/Box.vue';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div id="body" :class="{ 'dark-mode': isDark }" class="bg-base-100 dark:bg-gray-7">
    <header>
      <Navbar @toggle-dark="toggleDark" />
    </header>

    <main>
      <Hero />
      <Box />
    </main>
  </div>
</template>

<style lang="scss">
#body {
  width: 98%;
  height: 98%;
}

main {
  margin-top: 20px;
}
</style>
