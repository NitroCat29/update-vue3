<template>
  <div ref="video" class="test"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const video = ref<HTMLDivElement | null>(null);

onMounted(() => {
  if (video.value) {
    video.value.innerHTML = `
  
<iframe width="784" height="441" src="https://www.youtube-nocookie.com/embed/ubtMhzXLII8?si=ZOGdtwzkwyBOaKkt&amp;controls=0" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" class="video-player" allowfullscreen></iframe>

    `;
  }
});
</script>

<style lang="scss">
$phone-width: 425px;
$phone-height: 604px;

.test {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
}

.video-player {
  padding: 20px auto;
  border-radius: 15px;
  width: 784px;
  height: 441px;
}

@media (max-width: $phone-width), (max-height: phone-height) {
  .video-player {
    width: calc(784px - 50%);
    height: calc(441px - 20%);
  }
}
</style>

<!-- <video id="my-player" class="video-js" controls preload="auto" width="640" height="264"
        poster="https://vjs.zencdn.net/v/oceans.png" data-setup="{}">
        <source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
        <p class="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to a
          web browser that
          <a href="https://videojs.com/html5-video-support/" target="_blank">
            supports HTML5 video
          </a>
        </p>
      </video> -->

<!-- 
      <video controls preload="auto" width="640" height="300">
            <source src="https://youtube.com/embed/dQw4w9WgXcQ" type="video/youtube"></source>
            Your browser does not support the video tag.
            </video>

-->
