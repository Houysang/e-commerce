<template>
    <div class="category-card" :style="{backgroundColor: color}">
        <img :src="image" alt="title" class="category-image"/>
        <h4>{{name}}</h4>
        <p>{{productCount}} items</p>
    </div>
</template>

<script lang="ts">
export default {
    name: 'categoryComponent',
    props: {
        image: String,
        name: String,
        productCount: Number,
        color: String,
    },
}
</script>

<style>
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
        /* background: #FFFCEB; */
        /* border-style: solid; */
        /* border-color: #81B13D; */
        border-radius: 10px;
        border: 3px solid #81B13D;
    }

    .category-image{
        width: 100px;
        height: 100px;
    }

    .category-card h3{
        font-size: 16px;
        font-family:'Times New Roman', sans-serif;
        font-weight: bold;
        margin: 5px 0 5px 0;
    }

    .category-card p{
        margin: 0;
        font-size: 14px;
        font-family: 'Times New Roman', Courier, monospace;
        color: #939191;
    }
</style>      