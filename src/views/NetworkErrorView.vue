<script setup lang="ts">
import {  useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
<div class = "network-error">
    <h1>Uh-oh!</h1>
    <h3>
        network error,please take a breath and <a href="#" @click= "router.back()">click here</a> try again.
    </h3>
    <p>Sorry,we can't get the data from the server.</p>

</div>
</template>
