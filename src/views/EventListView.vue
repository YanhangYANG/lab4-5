<script setup lang="ts">
import EventCard from '../components/EventCard.vue'

import type { EventItem } from '@/type'

import { computed, ref} from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
import type { Ref } from 'vue'
import axios, { type AxiosResponse } from 'axios'
import EventService from '@/services/EventService'
import NProgress from 'nprogress'
import { useRouter } from 'vue-router'
const events = ref<EventItem[]>([])

const totalEvents = ref<number>(0)

const router = useRouter()

const props = defineProps({
  page: {
    type: Number,
    required: true
  },
  size: {
    type: Number,
    required: false,
    default: 4
  }
})

EventService.getEvent(props.size, props.page).then((response: AxiosResponse<EventItem[]>) => {
  events.value = response.data
})

EventService.getEvent(4,props.page).then((response: AxiosResponse<EventItem[]>) => {
  events.value = response.data
  totalEvents.value = response.headers['x-total-count']
}).catch((error) => {
  router.push({ name: 'NetworkError' })

})

onBeforeRouteUpdate((to, from, next) => {
  const topage = Number(to.query.page)
  
  EventService.getEvent(4, topage).then((response: AxiosResponse<EventItem[]>) => {
    events.value = response.data
    totalEvents.value = response.headers['x-total-count']
    next()
  }).catch(() => {
    next({ name: 'NetworkError' })
  
    
  })
})

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / props.size)
  return props.page.valueOf() < totalPages
})
</script>

<template>

  <main class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
    <div class="pagination">
      <RouterLink
        :to="{ name: 'EventList', query: { page: props.page - 1, size: props.size } }"
        rel="prev"
        v-if="page != 1"
        id="page-prev"
      >
        prev page
      </RouterLink>
      <RouterLink
        :to="{ name: 'EventList', query: { page: props.page + 1, size: props.size } }"
        rel="next"
        v-if="hasNextPage"
        id="page-next"
      >
        Next page
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;

  text-align: right;
}
h4 {
  font-size: 20px;
}
.pagination {
  display: flex;
  width: 290px;
}

.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}
#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
