
<template>
  <div class="p-14">
    <ul>
      <li><router-link class="flex justify-center text-4xl text-green-700" to="/"> 
        Pokemon Picker
      </router-link></li>
    </ul>
  </div>

<router-view/>
</template>


<script setup>
import { RouterView } from 'vue-router';


</script>
