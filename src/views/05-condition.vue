<script setup>
import {ref} from 'vue'
const weekday = ref(1)
</script>

<template>
    <h1>05-條件渲染</h1>
    <div>
        今天星期幾 :
        <input type="number" v-model="weekday" min="1" max="7" />
    </div>
    <h3 v-if="weekday>=1 &&weekday<=5">今天營業中</h3>
    <h3 v-else-if="weekday==6">今天只營業到中午</h3>
    <h3 v-else>本日休息</h3>
    <h4 v-show="weekday<=6">歡迎光臨~~~~</h4>
</template>