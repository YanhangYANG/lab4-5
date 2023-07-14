<script setup lang="ts">
import { ref } from 'vue'
import  { type EventItem } from '@/type'
import EventService from '@/services/EventService'
import { useRouter } from 'vue-router'
const event = ref<EventItem | null>(null)


const props = defineProps({
  id: String
  
})
const router = useRouter()
EventService.getEventById(Number(props.id))
.then((response) => {
  event.value = response.data
}).catch((error) => {
  if (error.response && error.response.status === 404){
    router.push({name: '404-resource' , params: {resource: 'event'}})
  }else{
    router.push({name: 'NetworkError'})
  }
})
</script>
<template>
    <div v-if="event">
        <h1>
            Information
        </h1>
        
        <RouterView :event = "event" ></RouterView>
    </div>
</template>