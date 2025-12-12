<!-- App.vue -->
<template>
  <div id="app">
    <headerComponent/>
    <RouterView />
  </div>
</template>

<script lang="ts">
import headerComponent from './components/headerComponent.vue'; 
export default {
  name: 'App',
  components: {
    headerComponent,
  },
};
</script>


<style>
/* Global reset */
body {
  margin: 0;
  font-family: 'Times New Roman', Times, serif;
}
#app {
  padding-top: 0;
}
</style>