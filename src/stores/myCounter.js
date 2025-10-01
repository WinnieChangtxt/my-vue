import {ref} from 'vue'
import { defineStore } from 'pinia'

export const useMyCounter = defineStore('myCounter',
    ()=>{
        const count = ref(100)
        function increment(val){
            count.value = count.value + val
        }
        return {count,increment}
})