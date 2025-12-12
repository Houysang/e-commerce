<template>
    <button class="shop-button" :style="{backgroundColor: color}"
    @click="handleClick">{{ text }}</button>
</template>

<script lang="ts">
export default {
    name: 'buttonComponent',
    props: {
        text: {
            type: String,
            default: 'Shop Now ➜',
        },
        color: {
            type: String,
            default: '#3BB77E',
        },
    },
    emits: ['click'], 
  methods: {
    handleClick() {
      this.$emit('click'); 
    },
  },
}
</script>


<style>
    .shop-button{
        /* background-color: #3BB77E; */
        color: white;
        border: none;
        padding: 15px 35px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 16px;
        font-weight: 600;
        margin-top: 20px;
    }

    .shop-button:hover{
        background-color: #4caf50;
        opacity: 0.9;
    }
</style>