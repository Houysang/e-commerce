<template>
    <div class="promotionComponent" :style="{backgroundColor: backgroundColor}">
        <div class="promotionComponent-text">
            <h2>{{ title }}</h2>
            <button-component :text="buttonText" :color="buttonColor" />
        </div>
        <img :src="image" alt="title" class="promotion-image"/>
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
        backgroundColor: {
            type: String,
            default: '#FFFCEB',
        }
    },

}
</script>

<style>
    .promotionComponent{
        width: 512px;
        height: 300px;
        background: #FFFCEB;
        border-radius: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        box-sizing: border-box;
    }
    
    .promotionComponent-text {
        z-index: 1;
        max-width: 50%;
        text-align: left;
}


    .promotionComponent-text h2{
        margin: 0 0 15px 0;
        font-size: 22px;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
    }

    .promotion-image{
        width: 220px;
        height: auto;
        object-fit: contain;
        max-height: 180px; /* Prevents tall images from stretching card */
    }
</style>