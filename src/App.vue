<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { withKeys } from 'vue';
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="d^^b!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/router01">測試</RouterLink>
        <RouterLink :to="{path:'/router01'}">測試path</RouterLink>
        <RouterLink :to="{name:'router-01-name',query:{id:123,keyword:'hello vue'}}">01-路由參數傳遞(query)</RouterLink>
        <RouterLink :to="{
          name:'routerParams-01-name',
          params:{id:222,keyword:'hiiiiii'}
          }">01-路由參數傳遞(params)
        </RouterLink>
        <RouterLink to="/lv2/nested">01-巢狀路由</RouterLink>
        <RouterLink to="/lv2/home">01-巢狀路由2</RouterLink>
        <RouterLink to="/lifeCircle">02-生命週期</RouterLink>
        <RouterLink to="/variable">03-響應式變數</RouterLink>
        <RouterLink to="/dataBinding">04-資料綁定</RouterLink>
        <RouterLink to="/condition">05-條件炫染</RouterLink>
        <RouterLink to="/loop">06-迴圈渲染</RouterLink>
        <RouterLink to="/eventHandle">07-事件綁定</RouterLink>
        <RouterLink to="/computed">08-計算屬性</RouterLink>
        <RouterLink to="/watch">09-監聽</RouterLink>
        <RouterLink to="/components">10-元件</RouterLink>
        <RouterLink to="/env">11-全域變數</RouterLink>
        <RouterLink to="/pinia">12-pinia狀態管理</RouterLink>
        <RouterLink to="/axios">13-axios後串接</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
