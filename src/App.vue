<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';
import { useDark, useToggle } from '@vueuse/core';

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
    </main>
  </div>
</template>

<style lang="scss">
#body {
  max-width: 100vw;
  max-height: 100vh;
  width: 100%;
  height: 100vh;
}

main {
  margin-top: 20px;
}
</style>
