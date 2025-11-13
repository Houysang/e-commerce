<template>
  <div id="app">
    <div class="category-list">
        <categoryComponent
          v-for="(category, index) in categories"
          :key="index"
          :image="getImageUrl(category.image)"
          :name="category.name"
          :productCount="category.productCount"
          :color="category.color"
        />
      </div>
  
      <div class="promotion-list">
        <promotionComponent
          v-for="(promotion, index) in promotions"
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
import categoryComponent from './components/categoryComponent.vue';
import promotionComponent from './components/promotionComponent.vue';

import axios from 'axios';
import {ref, onMounted} from 'vue';

// Interfaces
interface categoryComponent {
  id?: number
  name: string
  url: string
  productCount: number
  color: string
  image: string
}

interface promotionComponent {
  id: number
  title: string
  color: string
  image: string
  url: string
  buttonText: string
  buttonColor: string
}

// Reactive variables
const categories = ref<categoryComponent[]>([])
const promotions = ref<promotionComponent[]>([])

const API_BASE_URL = 'http://localhost:3000'

const getImageUrl = (imagePath: string | undefined) => {
  if (!imagePath) {
    return 'https://via.placeholder.com/300x200?text=No+Image'
  }
  if (imagePath.startsWith('http')) {
    return imagePath
  }
  return `${API_BASE_URL}${imagePath.startsWith('/') ? '' : '/'}${imagePath}`
}

const fetchProducts = async () => {
  try {
    const response = await axios.get<categoryComponent[]>('http://localhost:3000/api/categories')
    console.log('Categories API Response:', response.data)
    categories.value = response.data
  } catch (error) {
    console.error('Error fetching products:', error)
  }
}

const fetchPromotions = async () => {
  try {
    const response = await axios.get<promotionComponent[]>('http://localhost:3000/api/promotions')
    console.log('Promotions API Response:', response.data)
    promotions.value = response.data
  } catch (error) {
    console.error('Error fetching promotions:', error)
  }
}

onMounted(() => {
  fetchProducts()
  fetchPromotions()
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

/* .promotionComponent {
  width: 350px; 
  max-width: 90%;
  box-sizing: border-box;
} */
</style>