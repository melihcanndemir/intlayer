<script setup lang="ts">
import { useIntlayer } from 'vue-intlayer';
import HelloWorld from '~/components/helloWorld/HelloWorld.vue';

const { nuxtLogo, intlayerLogo, title } = useIntlayer('root');
</script>

<template>
  <div>
    <a href="https://nuxt.com" target="_blank">
      <img :src="`/nuxt.svg`" class="logo" :alt="nuxtLogo" />
    </a>
    <a href="https://intlayer.org/" target="_blank">
      <img :src="`/intlayer.svg`" class="logo intlayer" :alt="intlayerLogo" />
    </a>
  </div>
  <HelloWorld :msg="title" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
