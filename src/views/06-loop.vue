<script setup>
import { reactive } from 'vue';
const datas = reactive(
    [
        { name: 'apple', price: 10 },
        { name: 'banana', price: 20 },
        { name: 'cherry', price: 30 },
        { name: 'orange', price: 40 },
        { name: 'grape', price: 50 },
    ]
)
</script>

<template>
    <h1>06-迴圈渲染</h1>
    <div>
        <h5 v-for="(item, index) in datas" 
        :key="index">水果名稱 : {{ item.name}}</h5>
        <h5 v-for="(item, index) in datas" 
        :key="index">價格 : {{ item.price}}</h5>
    </div>
    <hr/>
    <div v-for="(item,index) in datas"
        :key="index">
        <h5>水果名稱 : {{ item.name }}</h5>
        <h5>價格 : {{ item.price }}</h5>
    </div>
</template>