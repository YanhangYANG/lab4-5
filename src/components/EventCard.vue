<template>
  
    <div class="event-class">
      <div class="event-card">
        <span>Passenger id:{{ event?.id }}</span>
        <h4>Name:{{ event?.first_name }} {{ event?.last_name }} </h4>
        <h4>Gender:{{ event?.gender }}</h4>
        <h4>AirLineId:{{ event?.airlineId }}</h4>
        <h4>_____________________________</h4>
        <RouterLink class="event-link" :to="{name: 'event-detail', params:{id: event?.id}}">
          <button class="button-13">Passenger Information</button>
          <p>&nbsp;</p>
        </RouterLink>
        <RouterLink class="event-link" :to="{name: 'airline-detail', params:{id:event?.airlineId}}">
          <button class="button-13">Airline Information</button>
        </RouterLink>
      </div>
    </div>
 
</template>

<script setup lang="ts">
import type { EventItem } from '../type'
import type { PropType } from 'vue'
import type { AirlineItem } from '../type'
const props = defineProps({
  event: {
    type: Object as PropType<EventItem>,
    required: true
  },
  airlan:{
    type: Object as PropType<AirlineItem>,
    required: true
  }
})
</script>

<style scoped>
.event-card {
  padding: 20px;
  width: 255px;
  cursor: pointer;
  border: 1px solid #39495c;
  border-radius: 10px;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.2);
}
.event-link{
  color: #2c3e50;
  text-decoration: none;
}
.button-13 {
  background-color: #fff;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
  box-sizing: border-box;
  color: #0f1111;
  cursor: pointer;
  display: inline-block;
  font-family: "Amazon Ember",sans-serif;
  font-size: 13px;
  line-height: 29px;
  padding: 0 10px 0 11px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  width: 200px;
}

.button-13:hover {
  background-color: #f7fafa;
}

.button-13:focus {
  border-color: #008296;
  box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
  outline: 0;
}
</style>
