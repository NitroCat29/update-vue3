<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';
</script>

<template>
  <div class="bg-base-100 dark:bg-gray-7">
  <header>
    <Navbar />
  </header>

  <main>
    <Hero />
  </main>
</div>
</template>

<style lang="scss">
  main {
    margin-top: 20px;
  }
</style>
