<template>
  <!-- Clickable Promotion Card -->
  <div
    class="promotionComponent"
    :style="{ backgroundColor: color }"
    @click="goToProduct"
  >
    <div class="promotionComponent-text">
      <h2>{{ title }}</h2>

      <!-- Button: stops card click -->
      <button-component
        :text="buttonText"
        :color="buttonColor"
        @click.stop="shopNow"
      />
    </div>

    <!-- Promotion Image -->
    <img
      :src="fixedImage"
      :alt="title"
      class="promotion-image"
    />
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import buttonComponent from './buttonComponent.vue'

const API_BASE_URL = 'http://localhost:3000'

export default {
  name: 'promotionComponent',
  components: { buttonComponent },
  props: {
    id: Number,          // promotion/product id
    title: String,
    image: String,
    buttonText: String,
    buttonColor: String,
    color: String,
  },
  setup(props) {
    const router = useRouter()

    // Button click → go to products/1
    function shopNow() {
      router.push(`/products/${props.id ?? 1}`)
    }

    // Card click → go to products/1
    function goToProduct() {
      router.push(`/products/${props.id ?? 1}`)
    }

    // Normalize image path
    function normalizeImagePath(img?: string) {
      if (!img) return null
      try {
        const arr = JSON.parse(img)
        return arr[0].replace(/\\/g, '/')
      } catch {
        return img.replace(/\\/g, '/')
      }
    }

    const fixedImage = computed(() => {
      const clean = normalizeImagePath(props.image)
      if (!clean)
        return 'https://via.placeholder.com/300x200?text=No+Image'
      if (clean.startsWith('http')) return clean
      return `${API_BASE_URL}/${clean}`
    })

    return {
      shopNow,
      goToProduct,
      fixedImage,
    }
  },
}
</script>

<style scoped>
.promotionComponent {
  width: 512px;
  height: 300px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  cursor: pointer; /* show clickable */
  transition: transform 0.2s;
}

.promotionComponent:hover {
  transform: scale(1.02);
}

.promotionComponent-text {
  z-index: 1;
  max-width: 90%;
  text-align: left;
}

.promotionComponent-text h2 {
  margin: 0 0 15px 0;
  font-size: 24px;
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;
}

.promotion-image {
  width: 300px;
  height: auto;
  object-fit: contain;
  max-height: 250px;
}
</style>
