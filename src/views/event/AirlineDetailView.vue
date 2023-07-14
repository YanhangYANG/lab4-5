<script setup lang="ts">
  import type { PropType } from 'vue';
  import type {AirlineItem} from '@/type'
  
  defineProps({
    airline:{
      type: Object as PropType<AirlineItem>,
      required: true
    }
  })
  </script>

<template>
    <div v-if="airline" class="detail">
      <p>Airline Name:&nbsp;{{ airline.AirlineName }}</p>
    <p>Email:&nbsp;{{ airline.email }}</p>
    <p>Address:&nbsp;{{ airline.address }}</p>
    </div>
  </template>
  
  
  
  <style>
  .detail {
    padding: 20px;
    width: 400px;
    cursor: pointer;
    border: 1px solid #39495c;
    margin-bottom: 18px;
    text-align: left;
  }
  </style>
  