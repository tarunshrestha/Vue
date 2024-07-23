<template>
  <div>
    <ul>
      <li> <router-link :to="{name: 'home'}"> Home </router-link> </li>
      <li><router-link :to="{name: 'about'}"> About Us </router-link></li>
    </ul>
  </div>
  <router-view/>

</template>


<script setup>
import { RouterView } from 'vue-router';

</script>
