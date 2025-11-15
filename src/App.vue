<template>
  <div id="app">
    <!-- CATEGORY LIST -->
    <div class="category-list">
      <categoryComponent
        v-for="(category, index) in productStore.categories"
        :key="index"
        :image="getImageUrl(category.image)"
        :name="category.name"
        :productCount="category.productCount"
        :color="category.color"
      />
    </div>

    <!-- PROMOTION LIST -->
    <div class="promotion-list">
      <promotionComponent
        v-for="(promotion, index) in productStore.promotions"
        :key="index"
        :title="promotion.title"
        :image="getImageUrl(promotion.image)"
        :buttonText="promotion.buttonText"
        :buttonColor="promotion.buttonColor"
        :color="promotion.color"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import categoryComponent from './components/categoryComponent.vue'
import promotionComponent from './components/promotionComponent.vue'
import { onMounted } from 'vue'
import { useProductStore } from './stores/productStore'

// Interfaces for type safety
interface categoryComponent {
  id?: number
  name: string
  group?: string
  productCount: number
  color: string
  image: string
}

interface promotionComponent {
  id: number
  title: string
  color: string
  image: string
  buttonText: string
  buttonColor: string
}

// Pinia store
const productStore = useProductStore()

// Image URL helper
const API_BASE_URL = 'http://localhost:3000'
const getImageUrl = (imagePath: string | undefined) => {
  if (!imagePath) return 'https://via.placeholder.com/300x200?text=No+Image'
  if (imagePath.startsWith('http')) return imagePath
  return `${API_BASE_URL}/${imagePath}`
}

// Load all data from store action
onMounted(async () => {
  await productStore.loadAllData()
})
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.category-list {
  display: flex;
  gap: 15px;
  margin-bottom: 40px;
}

.promotion-list {
  display: flex;
  gap: 20px;
  margin-top: 50px;
}
</style>
