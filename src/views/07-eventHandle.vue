<script setup>
import { ref } from 'vue';
const num = ref(0)
const count = ref(0)
const msg = ref('你好')

function increment(){
    //num.value++
    num.value = num.value + 1
}
function decrement(){
    num.value = num.value - 1
}
function changeCount(){
    count.value = count.value + num.value
}
function onlyOnce(){
    alert("只能點一次喔!")
}
function onEnter(){
    alert("你按下了enter:"+msg.value)
}
function onEsc(){
    alert("你按下了esc:"+msg.value)
}

</script>

<template>
    <h1>07-事件綁定</h1>
    <div>
        現在數值 : {{ num }} <br></br>
        count數值 : {{count}}
    </div>
    <div>      
        <!-- v-on:click="" /  @click="" -->
        <button @click="increment()">點我+1</button>
        <button v-on:click="decrement()">點我-1</button>
    </div>
    <div>
        change事件
        <input type="number" v-model="count" 
        @change="changeCount()" />
    </div>
    <div>
        事件修飾符，click.once 只能執行一次
        <button @click.once="onlyOnce()">只能點一次</button>
    </div>
    <div>
        鍵盤修飾符，keyup.enter
        <input v-model="msg" @keyup.enter="onEnter()"/>
        <input v-model="msg" @keyup.esc="onEsc()"/>
    </div>
</template>