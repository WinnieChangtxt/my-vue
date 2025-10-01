<script setup>
import axios from 'axios'
import { onMounted,ref } from 'vue';
const products = ref([])

onMounted(()=>{
    axios.get('https://localhost:7193/api/Test')
    .then(resp=>{
        console.log(resp)
        products.value=resp.data
    })
    .catch(error=>{
        console.error(error)
    })
})

function addProduct(){
    const data = {
        "name" : "高麗菜",
        "category" : "蔬菜",
        "price" : 49
    }
    axios.post('https://localhost:7193/api/Test',data)
    .then(resp=>{
        alert('新增成功')
        console.log(resp)
    })
}

function updateProduct(){
    
    axios.put('https://localhost:7193/api/Test/1', data)
    .then(resp=>{
        alert('資料修改成功')
        console.log(resp)
    })
}

function deleteProduct(id){

}

</script>

<template>
    <h1>13-axios後串接</h1>
    <h3>get 商品清單</h3>
    <div v-for="p in products">
        <div>名稱: {{ p.name}}</div>
        <div>分類: {{ p.category }}</div>
        <div>價錢: {{ p.price }}</div>
    </div>
    <hr/>
    <h3>post 商品</h3>
    <button @click="addProduct()">新增商品</button>
</template>