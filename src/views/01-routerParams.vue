<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()
console.log(route.params.id)
console.log(route.params.keyword)
</script>

<template>
<h1>路由參數傳遞-動態參數(params)</h1>
<p>路由參數id : {{ route.params.id }}</p>
<p>路由參數keyword : {{ route.params.keyword }}</p>
</template>

<style scoped>

</style>
