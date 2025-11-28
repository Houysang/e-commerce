
<template>
  <div class="product-card">
    <!-- BADGE -->
    <div v-if="badgeText" class="badge" :class="badgeColor">
      {{ badgeText }}
    </div>

    <!-- IMAGE -->
    <img :src="image" class="product-img" />

    <div class="info">
      <p class="brand">{{ product.group }}</p>
      <h3 class="title">{{ product.name }}</h3>

      <!-- RATING -->
      <div class="rating">
        <i
          v-for="n in 5"
          :key="n"
          :class="['star', n <= product.rating ? 'filled' : 'empty']"
        ></i>
        <span class="rating-number">{{ product.rating }}</span>
      </div>

      <p class="size">{{ product.size }}</p>

      <!-- PRICE + QTY -->
      <div class="price-row">
        <span class="new-price">${{ product.price }}</span>

        <span v-if="finalOldPrice" class="old-price">
          ${{ finalOldPrice }}
        </span>

        <button class="btn-add" v-if="qty === 0" @click="increase">
          Add +
        </button>

        <button class="btn-add" v-else>
          <div class="qty-inline">
            <span class="qty-icon" @click.stop="decrease">▾</span>
            <span class="qty-value">{{ qty }}</span>
            <span class="qty-icon" @click.stop="increase">▴</span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps({
  product: Object,
});

const API_BASE_URL = "http://localhost:3000";

/* --------------------------
   IMAGE FIXER
--------------------------- */
function normalizeImagePath(img) {
  if (!img) return null;
  try {
    const arr = JSON.parse(img);
    return arr[0].replace(/\\/g, "/");
  } catch {
    return img.replace(/\\/g, "/");
  }
}

const image = computed(() => {
  const clean = normalizeImagePath(props.product.image);
  if (!clean) return "https://via.placeholder.com/300x200?text=No+Image";
  if (clean.startsWith("http")) return clean;
  return `${API_BASE_URL}/${clean}`;
});

/* --------------------------
   BADGE LOGIC
--------------------------- */
const isHot = computed(() => {
  return props.product.countSold > 10 || props.product.rating >= 5;
});

const isSale = computed(() => {
  // Rule: product is on Sale if countSold = 0 OR promotion percentage > 0
  return props.product.countSold === 0 ||
         (!!props.product.promotionAsPercentage && Number(props.product.promotionAsPercentage) > 0);

});

const badgeText = computed(() => {
  if (props.product.promotionAsPercentage)
    return `-${props.product.promotionAsPercentage}%`;
  if (isHot.value) return "Hot";
  if (isSale.value) return "Sale";
  return null;
});

const badgeColor = computed(() => {
  if (props.product.promotionAsPercentage) return "green";
  if (isHot.value) return "red";
  if (isSale.value) return "yellow";
  return "";
});

/* --------------------------
   OLD PRICE FROM API OR AUTO-CALCULATE
--------------------------- */
// const finalOldPrice = computed(() => {
//   if (props.product.oldPrice) return props.product.oldPrice;

//   if (props.product.promotionAsPercentage) {
//     const discount = props.product.promotionAsPercentage;
//     const price = props.product.price;

//     const calculated = (price / (1 - discount / 100)).toFixed(2);
//     return calculated;
//   }

//   return null;
// });

const finalOldPrice = computed(() => {
  // Prefer backend oldPrice if available
  if (props.product.oldPrice !== undefined && props.product.oldPrice !== null) {
    return props.product.oldPrice;
  }

  // Always generate an old price (example: +20%)
  const price = props.product.price;
  return (price * 1.116).toFixed(2);
});

/* --------------------------
   QUANTITY CONTROL
--------------------------- */
const qty = ref(0);
const increase = () => qty.value++;
const decrease = () => { if (qty.value > 0) qty.value--; };
</script>

<style scoped>
.product-card {
  width: 298px;
  height: 402px;
  background-color: #ffffff;
  border: 1px solid #BCE3C9;
  border-radius: 10px;
  padding: 10px;
  position: relative;
  box-sizing: border-box;
  flex: 0 0 calc(20% - 16px);
  
}

/* BADGE */
.badge {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 4px 8px;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  border-radius: 4px;
  
}
.badge.green { background-color: #3BB77E; }
.badge.red { background-color: red; }
.badge.yellow { background-color: #FDC040; }

/* IMAGE */
.product-img {
  width: 230px;
  height: auto;
  position: absolute;
  top: 50px;
  left: 37.11px;
  object-fit: cover;
  border-radius: 8px;
}

/* INFO */
.info {
  position: absolute;
  top: 210px;
  left: 12px;
  right: 9px;
  bottom: 10px;
  display: flex;
  flex-direction: column;
  text-align: left;
}

/* FONT STYLING */
.brand {
  font-family: 'Times New Roman', Times, serif;
  font-size: 15px;
  /* margin: 0; */
  color: #767676;
}

.title {
  font-family: 'Times New Roman', Times, serif;
  font-size: 20px;
  font-weight: bold;
  margin: 2px 0 5px 0;
}

/* RATING */
.rating {
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 16px;
  color: #767676;
}

.rating-number {
  margin-left: 4px;
}

/* STAR ICONS */
.star {
  display: inline-block;
  width: 14px;
  height: 14px;
  background-size: contain;
  background-repeat: no-repeat;
}

.star.filled {
  background-image: url('data:image/svg+xml;utf8,<svg fill="gold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.423l-6 5.84L19.335 24 12 20.201 4.665 24 6 15.263 0 9.423l8.332-1.268z"/></svg>');
}

.star.empty {
  background-image: url('data:image/svg+xml;utf8,<svg fill="lightgray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.423l-6 5.84L19.335 24 12 20.201 4.665 24 6 15.263 0 9.423l8.332-1.268z"/></svg>');
}

/* SIZE */
.size {
  font-size: 16px;
  margin: 4px 0;
  color: #767676;
}

/* PRICE + QTY */
.price-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
}

.new-price {
  font-weight: bold;
  font-size: 22px;
  color: #3BB77E;
}

.old-price {
  text-decoration: line-through;
  font-size: 13px;
  color: #767676;
}

.btn-add {
  background-color: #DEF9EC;
  border: none;
  padding: 6px 9px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  color: #3BB77E;
}

.qty-inline {
  display: flex;
  align-items: center;
  gap: 4px;
}

.qty-icon {
  cursor: pointer;
  font-size: 17px;
}

.qty-value {
  font-size: 17px;
}
</style>

