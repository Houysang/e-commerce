<template>
  <div id="app">
    <div class="category-list">
      <categoryComponent
        v-for="(category, index) in categories"
        :key="index"
        :image="category.image"
        :title="category.title"
        :item="category.itemCount"
      />
    </div>

    <div class="promotion-list">
      <promotionComponent
        v-for="(promotion, index) in promotions"
        :key="index"
        :title="promotion.title"
        :image="promotion.image"
        :buttonText="promotion.buttonText"
        :buttonColor="promotion.buttonColor"
        :backgroundColor="promotion.backgroundColor"
      />
    </div>
  </div>
</template>

<script lang="ts">
import categoryComponent from './components/categoryComponent.vue';
import promotionComponent from './components/promotionComponent.vue';

export default {
  name: 'App',
  components: {
    categoryComponent,
    promotionComponent,
  },
  data() {
    return {
      categories: [
        { image: 'public/images/burger.png', title: 'Cake & Milk', itemCount: 14 },
        { image: 'public/images/peach.png', title: 'Peach', itemCount: 17 },
        { image: 'public/images/kiwi.png', title: 'Oganic Kiwi', itemCount: 21 },
        { image: 'public/images/apple.png', title: 'Red Apple', itemCount: 68 },
        { image: 'public/images/snack.png', title: 'Snack', itemCount: 34 },
        { image: 'public/images/bluePlum.png', title: 'Black plum', itemCount: 25 },
        { image: 'public/images/vegetable.png', title: 'Vegetables', itemCount: 65 },
        { image: 'public/images/headphone.png', title: 'Headphone', itemCount: 33 },
        { image: 'public/images/cake.png', title: 'Cake & Milk', itemCount: 54 },
        { image: 'public/images/orange.png', title: 'Orange', itemCount: 63 },
      ],
      promotions: [
        {
          title: 'Everyday Fresh & Clean with Our Products',
          image: 'public/images/promotion1.png',
          buttonText: 'Shop Now ➜',
          buttonColor: '#3BB77E',
          backgroundColor: '#F0E8D5',
        },
        {
          title: 'Make your Breakfast Healthy and Easy',
          image: 'public/images/promotion2.png',
          buttonText: 'Shop Now ➜',
          buttonColor: '#3BB77E',
          backgroundColor: '#F3E8E8',
        },
        {
          title: 'The best Organic Products Online',
          image: 'public/images/promotion3.png',
          buttonText: 'Shop Now ➜',
          buttonColor: '#FDC040',
          backgroundColor: '#E7EAF3',
        },
      ],
    };
  },
};
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
  gap: 15px;
  margin-top: 40px;
}

/* .promotionComponent {
  width: 350px; 
  max-width: 90%;
  box-sizing: border-box;
} */
</style>