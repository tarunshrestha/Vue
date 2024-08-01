<template>
    <!-- <div>
      <h1 class="justify-center flex text-green-700 ">About Page</h1>
      <p>This is the about page of the Pokemon App.</p>
      <h3>{{ $route.params.slug }}</h3>
    </div> -->
  <div class="about">
    <div v-if="pokemon">
      <div v-if="pokemon" class="w-3/12 m-auto bg-purple-50 mt-4 shadow-2xl flex justify-center flex-col items-center">
        <h3 class=" text-2xl text-green-600 uppercase">{{pokemon.name}}</h3>

        <div class="flex justify-center">
          <img class="w-48" :src="pokemon.sprites.front_shiny" alt="Loading..."/>
          <img class="w-48" :src="pokemon.sprites.back_shiny" alt="Loading..."/>
        </div>

        <h3 class="text-green-400">Types</h3>

        <div v-for="(type, idx) in pokemon.types" :key="idx">
          <h5 class="text-green-900">{{ type.type.name }}</h5>
        </div>
      </div>

    </div>
  </div>
</template>
  
<script>
import { useRoute } from "vue-router";
import { reactive, toRefs } from "vue";

export default {
    setup(){
      const route = useRoute();
      const state = reactive({
        pokemon: null
    })

    fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.slug}/`)
    .then((res) => res.json())
    .then((data) => {
      state.pokemon = data
    })

    return {...toRefs(state)}

    }

  }


</script>
  