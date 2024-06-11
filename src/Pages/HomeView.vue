<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';
import { useDark, useToggle } from '@vueuse/core';
import Box from '@/components/Box.vue';
import Jumbotron from '@/components/Jumbotron.vue';

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
      <Jumbotron />
    </main>
  </div>
</template>

<style lang="scss"></style>
