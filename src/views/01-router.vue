<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()
</script>

<template>
<h1>路由參數傳遞-查詢參數(Query)</h1>
<p>路由參數:{{ route.query.id }}</p>
<p>路由參數:{{ route.query.keyword }}</p>
</template>

<style scoped>

</style>