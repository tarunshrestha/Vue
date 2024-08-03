<template>
    <div id="app">
    <Navbar />

    <router-view/>

  </div>
  
</template>

<script setup>
import Navbar from "./views/Navbar.vue";
import { RouterView } from 'vue-router'

</script>