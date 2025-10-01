<script setup>
import {ref,watch, watchEffect} from 'vue'
const keyword = ref('')
const msg = ref('')

watch(keyword, (newValue) =>{
    msg.value = "keyword發生改變=" + newValue
})

const num1 = ref(0)
const msg1 = ref('')
watch(num1,(newV,oldV) =>{
    if(newV < 0){
        msg1.value ='值太小了，' + newV + '，原本值是' + oldV 
    }else{
        msg1.value = '太大了，'+ newV + '，原本是=' + oldV
    }
})

const num2 = ref(0)
const msg2 = ref('hello')
watchEffect(()=>{
    msg2.value = 'num2發生改變了=' + num2.value
})

</script>

<template>
    <h1>09-監聽</h1>
    <div>
        監聽keyword變數 : {{ msg }}
        <input type="text" v-model="keyword"/>
    </div>
    <div>
        監聽num1
        <input type="number" v-model="num1"></input>
        <br/>
        {{ msg1 }}
    </div>
    <div>
        監聽num2
    <input type="number" v-model="num2"></input>
    <br/>
    {{ msg2 }}
    </div>
</template>