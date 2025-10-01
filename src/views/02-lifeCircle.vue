<script setup>
import { 
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
    onErrorCaptured
    } from 'vue'

    onBeforeMount(()=>{
        console.log('onBeforeMount:組件掛載前執行')
    })
    onMounted(()=>{
        console.log('onMounted:初始載入時執行')
    })
    onBeforeUpdate(()=>{
        console.log('onBeforeUpdate:組件更新前執行')
    })
    onUpdated(()=>{
        console.log('onUpdated:組件更新後執行')
    })
    onBeforeUnmount(()=>{
        console.log('onBeforeUnmount:組件卸載前執行')
    })
    onUnmounted(()=>{
        console.log('onUnmounted:組件卸載後執行')
    })
    onErrorCaptured(()=>{
        console.log('onErrorCaptured:錯誤捕捉')
    })
    
</script>
<template>
    <h1>02-生命週期</h1>
</template>