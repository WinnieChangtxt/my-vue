<script setup>
import { useMyCounter } from '../stores/myCounter';
const myCounter = useMyCounter()
//useMyCounter myCounter = new useMyCounter()

function decrement(){
    myCounter.increment(-1)
}
import { useMyCounter2 } from '../stores/myCounter2';
const myCounter2 = useMyCounter2()

</script>

<template>
    <h1>12-pinia狀態管理</h1>
    <div>
        <h3>當前count={{ myCounter.count }}</h3>
        <button @click="myCounter.increment(1)">+1</button>
        <button @click="decrement()">-1</button>
    </div>
    <div>
        <h3>pinia加入持久化，當前count={{ myCounter2.count }}</h3>
        <button @click="myCounter2.increment(1)">+1</button>
        <button @click="myCounter2.increment(-1)">-1</button>
    </div>
</template>