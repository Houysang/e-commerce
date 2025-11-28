<template>
    <div class="promotionComponent" :style="{backgroundColor: color}">
        <div class="promotionComponent-text">
            <h2>{{ title }}</h2>
            <button-component :text="buttonText" :color="buttonColor" @click="shopNow"/>
        </div>
        <img :src="image" :alt="title" class="promotion-image"/>
    </div>
</template>

<script lang="ts">
import buttonComponent from './buttonComponent.vue';

export default {
    name: 'promotionComponent',
    components: {buttonComponent},
    props:{
        title: String,
        image: String,
        buttonText: String,
        buttonColor: String,
        color: String,
    },
    methods: {
        shopNow() {
            alert("Let's shop: " + this.title);
        }
    }
}
</script>

<style>
    .promotionComponent{
        width: 500px;
        height: 300px;
        /* background-color: #FFFCEB; */
        border-radius: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        box-sizing: border-box;
    }
    
    .promotionComponent-text {
        z-index: 1;
        max-width: 90%;
        text-align: left;
}


    .promotionComponent-text h2{
        margin: 0 0 15px 0;
        font-size: 24px;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
    }

    .promotion-image{
        width: 300px;
        height: auto;
        object-fit: contain;
        max-height: 250px; 
    }
</style>