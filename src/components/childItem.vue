<script setup>
import {defineEmits} from 'vue'
const emit = defineEmits(['doAction1','doAction2'])

function handleAction1(){
    emit('doAction1','來自子元件的資料',123)
}
function handleAction2(){
    //emit('doAction2')
    emit('doAction2', {message:'按鈕2按下了',value:2})
}
</script>
<template>
    <div>我是child元件</div>
    <button @click="handleAction1()">點擊1</button>
    <button @click="handleAction2()">點擊2</button>
</template>