<template>
  <div id="app">
    <!-- Featured Categories Header + Tabs -->
    <menuComponent
      title="Featured Categories"
      @update:group="selectGroup = $event"
    />

    <!-- Category Cards -->
    <div class="category-list">
      <categoryComponent
        v-for="category in productStore.categories"
        :key="category.id"
        :image="getImageUrl(category.image)"
        :name="category.name"
        :productCount="category.productCount"
        :color="category.color"
      />
    </div>

    <!-- Promotion Banners -->
    <div class="promotion-list">
      <promotionComponent
        v-for="promotion in productStore.promotions"
        :key="promotion.id"
        :title="promotion.title"
        :image="getImageUrl(promotion.image)"
        :buttonText="promotion.buttonText"
        :buttonColor="promotion.buttonColor"
        :color="promotion.color"
      />
    </div>

    <!-- Popular Products Header + Tabs -->
    <menuComponent
      title="Popular Products"
      @update:group="selectGroup = $event"
    />

    <!-- 5. GROUPS SECTION -->
    <section class="groups">
      <div
        class="group-card"
        v-for="grp in productStore.groups"
        :key="grp.id"
      >
        <h3>{{ grp.name }}</h3>
      </div>
    </section>

    <!-- Product Grid -->
    <section class="products">
      <productComponent
        v-for="prod in productStore.products"
        :key="prod.id"
        :product="prod"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useProductStore } from './stores/productStore';

import menuComponent from './components/menuComponent.vue';
import categoryComponent from './components/categoryComponent.vue';
import promotionComponent from './components/promotionComponent.vue';
import productComponent from './components/productComponent.vue';

const productStore = useProductStore();
const selectGroup = ref('All');

const API_BASE_URL = 'http://localhost:3000';
const getImageUrl = (imagePath: string | undefined) => {
  if (!imagePath) {
    return 'https://via.placeholder.com/300x200?text=No+Image';
  }
  return imagePath.startsWith('http') ? imagePath : `${API_BASE_URL}/${imagePath}`;
};

// Load all data from store action
onMounted(async () => {
  await productStore.loadAllData();
});
</script>

<style>
#app {
  font-family: 'Times New Roman', Times, serif;
  text-align: center;
  padding: 20px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.category-list,
.promotion-list,
.products {
  display: flex;
  gap: 10px;
  justify-content: center;
  /* flex-wrap: wrap; */
  width: 200%;
  max-width: 1600px;
  margin: 20px 0 40px;
  padding: 0 20px;
}

.promotion-list {
  gap: 20px;
  margin-top: 30px;
}

.products {
  gap: 20px;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: wrap;
  margin-bottom: 60px;
}

</style>




