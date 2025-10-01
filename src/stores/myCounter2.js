import {ref} from 'vue'
import { defineStore } from 'pinia'

export const useMyCounter2 = defineStore('myCounter2',
    ()=>{
        const count = ref(100)
        function increment(val){
            count.value = count.value + val
        }
        return {count,increment}
},
    {persist:true}
)