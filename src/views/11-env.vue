<script setup>
import {ref} from 'vue'
const appTitle = ref('')

//javascript
appTitle.value = window.appTitle

//env
const viteAppTitle = ref('')
viteAppTitle.value = import.meta.env.VITE_APP_TITLE 

//全域屬性
import { getCurrentInstance } from 'vue'
const globalAppName = ref('')
const { proxy } = getCurrentInstance()
globalAppName.value = proxy.$appName


//provide & inject
import { inject } from 'vue'
const provideValue = ref('')
provideValue.value = inject('provideName')

</script>

<template>
    <h1>11-全域變數</h1>
    <div>
        取得javascript全域變數:{{ appTitle }}
    </div>
    <div>
        取得env環境變數:{{ viteAppTitle }}
    </div>
    <div>
        取得全域屬性變數:{{ globalAppName }}
    </div>
    <div>
        取得prodive變數 :{{ provideValue }}
    </div>
</template>