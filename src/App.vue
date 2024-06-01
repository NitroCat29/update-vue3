<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';
</script>

<template>
  <header>
    <Navbar />
  </header>

  <main>
    <Hero />
  </main>
</template>

<style lang="scss" scoped>
  main {
    margin-top: 20px;
  }
</style>
