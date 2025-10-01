<script setup>
import {ref} from 'vue'
const data = ref('測試看看')
</script>
<template>
    <h1>04-資料綁定 v-bind / v-model</h1>
    <div>
        單向綁定 : {{ data }}
    </div>
    <div>
        單向綁定使用 v-bind:value
        <input v-bind:value="data" type="text" />
    </div>
    <div>
        單向綁定使用 :value
        <input :value="data" type="text" />
    </div>
    <div>
        雙向綁定 v-model
        <input v-model="data" type="text"></input>
    </div>
</template>