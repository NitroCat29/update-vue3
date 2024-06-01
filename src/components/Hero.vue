<script setup lang="ts">
import { ref } from 'vue';

const title = ref('Welcome to our website!');
const description = ref(
  'This is a hero component built with Vue, UnoCSS, and VueUse.'
);
const imageSrc = ref(new URL('../assets/bg.jpeg', import.meta.url).href);
const buttonText = ref('Get Started');
</script>

<template>
  <div class="hero relative">
    <div
      id="hero-component"
      class="text-center p-4 bg-transparent bg-opacity-50 z-10"
    >
      <h1 class="text-4xl font-bold">{{ title }}</h1>
      <p class="text-lg">{{ description }}</p>
      <button
        class="mt-4 px-8 py-2 outline-none border-primary bg-blue-500 text-white rounded"
      >
        {{ buttonText }}
      </button>
    </div>
    <img
      id="cover"
      :src="imageSrc"
      alt="Cover Image"
      class="absolute inset-0 w-full h-full object-cover op-100"
    />
  </div>
</template>

<style scoped></style>
