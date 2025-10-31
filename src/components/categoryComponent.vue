<template>
    <div class="category-card">
        <img :src="image" alt="title" class="category-image"/>
        <h4>{{title}}</h4>
        <p>{{item}}items</p>
    </div>
</template>

<script lang="ts">
export default {
    name: 'categoryComponent',
    props: {
        image: String,
        title: String,
        item: Number,
    },
}
</script>

<style>
    .category-card{
        width: 137px;
        height: 179px;
        text-align: center;
        font-family: 'Times New Roman', sans-serif;
        padding: 3px;
        background: #FFFCEB;
        border-style: solid;
        border-color: #81B13D;
        border-radius: 10px;
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