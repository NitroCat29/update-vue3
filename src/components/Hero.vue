<script setup lang="ts">
import { ref } from 'vue';

const altTitle = 'Text has been changed!';
const iniTitle = 'Welcome to our website!';

const title = ref(iniTitle);
const description = ref(
  'This is a hero component built with Vue, UnoCSS, and VueUse.'
);
const imageSrc = ref(new URL('../assets/bg.jpeg', import.meta.url).href);
const buttonText = ref('Get Started');

const linkTo = (link: string) => {
  window.location.href = link;
}

const titleChanger = () => {
  title.value = title.value === altTitle ? iniTitle : altTitle;
}
</script>

<template>
  <div class="h-sm relative flex justify-center">
    <div
      id="hero-component"
      class="relative text-center p-4 bg-transparent z-99"
    >
      <h1 class="text-4xl font-bold z-2" @click="titleChanger()">{{ title }}</h1>
      <p class="text-lg">{{ description }}</p>
      <button
        class="mt-4 px-8 py-2 outline-none border-primary bg-blue-500 text-white rounded hover:bg-blue-2 active:scale-95"
        type="button"
        @click="linkTo('https://google.com')"
      >
        {{ buttonText }}
      </button>
    </div>
    <img
      id="cover"
      :src="imageSrc"
      alt="Cover Image"
      class="absolute inset-0 w-full h-full object-tc object-cover op-70"
    />
   
  </div>                                                
</template>

<style scoped lang="scss">
@import url('https://fonts.cdnfonts.com/css/sofia-sans');

* {
  font-family: 'Sofia Sans', sans-serif;
}

  #cover {
    object-fit: cover;
    object-position: 100% 15%;
  }

  @media (min-width: 768px) {
    #hero {
      height: 100vh;
    }
  }

</style>
