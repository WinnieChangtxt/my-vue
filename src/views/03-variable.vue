<script setup>
import { ref,reactive } from 'vue';

//原始型別的ref響應式變數
const message = ref('welcome')
message.value = 'welcom vue~~~~'
const num = ref(123)
num.value = 456
alert(message.value +','+num.value)

//物件型別的reactive響應式變數
const data = reactive({
    title:'vue3基礎教學',
    note:'響應式變數',
    day:2
})
alert(data.title)
data.title='vue3響應式變數實作'
alert(data.title)
</script>

<template>
    <h1>03-響應式變數</h1>
    <div>
        ref文字:{{ message }}
    </div>
    <div>
        ref數字:{{ num }}
    </div>
    <div>
        reactive物件:{{ data.title }}<br></br>
        {{ data.note }}，今天是第{{data.day}}天。
    </div>
</template>