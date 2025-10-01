<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    title:String,
    price:Number,
    description:{type:String,required:false}
})
</script>
<template>
    <div class="box">
        <p>商品名稱 : {{ props.title }}</p>
        <p>商品價格 : {{ props.price }}</p>
        <p v-if="props.description!=''">商品描述 : {{ props.description }}</p>
    </div>
</template>

<style scoped>
    .box{border: 1px gray solid;}
</style>