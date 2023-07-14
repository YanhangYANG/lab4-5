<script setup lang="ts">
import { ref } from 'vue'
import  { type AirlineItem} from '@/type'
import AirlineService from '@/services/AirlineService';
import { useRouter } from 'vue-router'
const airline = ref<AirlineItem | null>(null)  // 修改变量名

const props = defineProps({
  id: String
})
const router = useRouter()
AirlineService.getAirlineById(Number(props.id))
.then((response) => {
  airline.value = response.data   // 修改变量名
}).catch((error) => {
  if (error.response && error.response.status === 404){
    router.push({name: '404-resource' , params: {resource: 'event'}})
  }else{
    router.push({name: 'NetworkError'})
  }
})
</script>
<template>
    <div v-if="airline"> 
        <h1>
            Information
        </h1>
        
        <RouterView :airline = "airline" ></RouterView>  
    </div>
</template>
