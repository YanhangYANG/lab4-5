<script setup lang="ts">
import EventService from '@/services/EventService'
import { type EventItem } from '@/type'
import type { PropType } from 'vue';

defineProps({
  event: {
    type: Object as PropType<EventItem>,
    required: true
  }
})
</script>

<template>
  <div v-if="event" class="detail">
    <p>Name:&nbsp;&nbsp;&nbsp;&nbsp;{{ event.first_name }}  {{ event.last_name }}</p>
    <p>&nbsp;</p>
    <p>Email:&nbsp;&nbsp;&nbsp;&nbsp;{{ event.email }}</p>
    <p>&nbsp;</p>
    <p>Gender:&nbsp;&nbsp;&nbsp;&nbsp;{{ event.gender }}</p>
    <p>&nbsp;</p>
    <p>Ip Address:&nbsp;&nbsp;&nbsp;&nbsp;{{ event.ip_address }}</p>
    <p>&nbsp;</p>
    <p>Source:&nbsp;&nbsp;&nbsp;&nbsp;{{ event.Source }}</p>
    <p>&nbsp;</p>
    <p>Destination: &nbsp;&nbsp;&nbsp;&nbsp;{{ event.Destination }}</p>
    <p>&nbsp;</p>
    <p>Travel Date: &nbsp;&nbsp;&nbsp;&nbsp;{{ event.travelDate }}</p>
    <p>&nbsp;</p>
    <p>AirLineId: &nbsp;&nbsp;&nbsp;&nbsp;{{ event.airlineId }}</p>
    <p>&nbsp;</p>
  </div>
  
</template>

<style>
.detail {
  padding: 20px;
  width: 280px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  text-align: left;
}
</style>
