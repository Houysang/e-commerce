<template>
  <div class="page-container">
    <BannerTitle title="Coke & Milk" />
  </div>
</template>

<script lang="ts" setup>
import BannerTitle from '../components/Header/BannerTitle.vue'
</script>

<style scoped>
.page-container {
  width: 100%;
  display: flex;
  justify-self: start;
  flex-direction: column;
  height: 235px;
}
</style>