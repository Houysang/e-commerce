<template>
    <button class="shop-button" :style="{backgroundColor: color}">{{ text }}</button>
</template>

<script lang="ts">
export default {
    name: 'buttonComponent',
    props: {
        text: {
            type: String,
            default: 'Shop Now',
        },
        color: {
            type: String,
            default: '#3BB77E',
        },
    },
}
</script>


<style>
    .shop-button{
        /* background-color: #3BB77E; */
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 16px;
    }

    .shop-button:hover{
        background-color: #4caf50;
    }
</style>
