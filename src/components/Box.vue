<template>
  <div class="features-section">
    <div class="features-box" v-for="(feature, index) in features" :key="index">
      <h3 :class="feature.class">{{ feature.title }}</h3>
      <p>{{ feature.description }}</p>
      <svg :class="feature.icon"></svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const features = ref([
  {
    title: 'Faster',
    description:
      'Experience lightning-fast performance with our cutting-edge technology.',
    icon: 'i-ic-sharp-bolt text-xl dark:text-white text-slate',
    class: 'dark:text-white text-xl text-center',
  },
  {
    title: 'Light',
    description:
      'Enjoy seamless integration with our lightweight and user-friendly interface.',
    icon: 'i-ic-sharp-bolt dark:text-white text-xl text-slate',
    class: 'dark:text-white text-xl text-center',
  },
  {
    title: 'Robust',
    description:
      'Built to last, our robust infrastructure ensures reliability and scalability.',
    icon: 'i-ic-sharp-bolt dark:text-white text-xl text-slate',
    class: 'dark:text-white text-xl text-center',
  },
]);
</script>

<style lang="scss">

.features-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.features-box {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 300px;
}

.features-box h3 {
  font-weight: bold;
  margin-bottom: 10px;
}

.features-box p {
  font-size: 16px;
  color: #666;
}

.features-box i {
  font-size: 24px;
  margin-top: 10px;
  color: #d71616;
}
</style>
