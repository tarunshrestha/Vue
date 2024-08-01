

<template>
    <div class="w-full flex justify-center">
        <input type="text" placeholder="Enter Pokemon here" class="mt-10 p-2 border-black-700 border-2" />
    </div> 
    <div class="home">
<h1>Welcome to home page</h1>
{{pokemons}}
</div>
</template>


<script>
import { reactive, toRefs } from 'vue';

export default{
    name:"Home",
    setup(){

        const state = reactive({
            pokemons:[], 
            urlIdLookup: {}
        })

        fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then((res)=> res.json())
        .then((data)=> {
            console.log(data)
            state.pokemons = data.results;
            state.urlIdLookup = data.results.reduce((acc, cur, idx) =>
            acc = {...acc, [cur.name]:idx+1}
            , {})
        })
        return {...toRefs(state)}
    }
}

</script>

