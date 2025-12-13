<template>
  <div
    class="category-card"
    :style="{ backgroundColor: color }"
    @click="goToCategory"
  >
    <img :src="image" alt="title" class="category-image"/>
    <h4>{{ name }}</h4>
    <p>{{ productCount }} items</p>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";

export default {
  name: 'categoryComponent',
  props: {
    id: Number,          // category id for navigation
    image: String,
    name: String,
    productCount: Number,
    color: String,
  },
  setup(props) {
    const router = useRouter();

    function goToCategory() {
      // Navigate to /categories/:id, fallback to 1 if id is missing
      router.push(`/categories/${props.id ?? 1}`);
    }

    return { goToCategory };
  }
}
</script>

<style scoped>
.category-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.category-card{
    width: 137px;
    height: 179px;
    text-align: center;
    font-family: 'Times New Roman', sans-serif;
    padding: 3px;
    border-radius: 10px;
    border: 3px solid #81B13D;
    cursor: pointer; /* show clickable */
    transition: transform 0.2s, box-shadow 0.2s;
}

.category-image{
    width: 100px;
    height: 100px;
}

.category-card h4{
    font-size: 16px;
    font-weight: bold;
    margin: 5px 0 5px 0;
}

.category-card p{
    margin: 0;
    font-size: 14px;
    color: #939191;
}
</style>
