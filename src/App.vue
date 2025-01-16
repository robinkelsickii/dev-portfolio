<script>
import DarkMode from './components/DarkMode.vue'

export default {
  name: 'App',
  components: { DarkMode },
}
</script>

<template>
  <div class="home flex items-center justify-center h-screen">
    <DarkMode />
  </div>
</template>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
