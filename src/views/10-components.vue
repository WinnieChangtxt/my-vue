<script setup>
import { reactive } from 'vue';
import Product from '../components/productDetail.vue'

const products = reactive(
    [
    {id:1,name:'蘋果', p:50, d:''},
    {id:2,name:'草莓', p:200, d:'限時特價'},
    {id:3,name:'西瓜', p:70, d:'新鮮好吃'},
    ]
)

//子元件通知父元件事件
import Child from '../components/childItem.vue'
function handleChildAction1(message,val){
    alert("呼叫父元件action1:"+message+','+val)
}
function handleChildAction2(data){
    alert("呼叫父元件action2"+data.message+','+data.value)
}

import childSlot from '../components/childSlot.vue'

</script>

<template>
    <h1>10-元件</h1>
    <div>
        單獨使用子元件
        <Product title="新鮮的蘋果" price="50"/>
    </div>
    <div>
        搭配迴圈使用子元件
        <Product v-for="product in products" 
        :key="product.id"
        :title="product.name" 
        :price="product.p"
        :description="product.d"/>
    </div>
    <hr/>
    <div>
        子元件通知父元件事件
        <Child 
            @doAction1="handleChildAction1"
            @doAction2="handleChildAction2"
        >
        </Child>
    </div>
    <hr/>
    <div>
        子元件
        <childSlot>
            <template #header>
                <p>這是頁尾</p>
            </template>
            <template #content>
                <p>內容~~~~</p>
            </template>
        </childSlot>
    </div>
</template>