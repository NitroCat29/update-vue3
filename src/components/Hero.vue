<script setup lang="ts">
import { ref } from 'vue';

const altTitle = 'Text has been changed!';
const iniTitle = 'Welcome to our website!';

const title = ref(iniTitle);
const description = ref(
  'This is a hero component built with Vue, UnoCSS, and VueUse.',
);
const imageSrc = ref(new URL('../assets/bg.jpeg', import.meta.url).href);
const buttonTexts = ref({
  1: 'Get Started',
  2: 'Learn More',
  3: 'Help us!',
});

const getText = (num: any) => buttonTexts.value[num] || 'Default';

const linkTo = (link: string) => {
  window.location.href = link;
};

const titleChanger = () => {
  title.value = title.value === altTitle ? iniTitle : altTitle;
};
</script>

<template #hero>
  <div class="relative flex justify-center">
    <img
      id="cover"
      :src="imageSrc"
      alt="Cover Image"
      class="absolute inset-0 w-full h-full op-70"
    />
    <div id="hero-component" class="relative text-center p-5 bg-transparent z-99">
      <div class="flex flex-col flex-wrap justify-center items-center">
        <h1 class="text-4xl font-bold" @click="titleChanger()">{{ title }}</h1>
        <p class="text-lg">{{ description }}</p>
      </div>
      <div class="flex gap-2 justify-center">
        <button
          class="mt-2 px-8 py-2 outline-none border-primary bg-blue-500 text-white rounded hover:bg-blue-2 active:scale-95"
          type="button"
          @click="linkTo('https://google.com')"
        >
          {{ getText(1) }}
        </button>
        <button
          class="mt-2 px-8 py-2 outline-none border-info bg-sky-200"
          type="button"
          @click="linkTo('#about')"
        >
          {{ getText(2) }}
        </button>
      </div>

      <div class="flex flex-row justify-center items-center gap-2 mt-4">
        <i
          class="block i-hugeicons-new-twitter text-2xl"
          @click="linkTo('https://x.com/bencikeramaian')"
        ></i>
        <i
          id="ig"
          class="block i-hugeicons-instagram text-2xl"
          @click="linkTo('https://instagram.com/miiu4u')"
        ></i>
        <i
          id="mail"
          class="block i-hugeicons-mail-01 color-white border-1 rounded-lg text-2xl"
          @click="linkTo('mailto:ebriluye1@gmail.com')"
        ></i>
      </div>
    </div>
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

#ig {
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  background: -webkit-radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
}

@media (min-width: 768px) {
  #hero {
    height: 100vh;
  }
}
</style>
