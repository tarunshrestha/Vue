<script setup>
 import {ref, onMounted, computed, watch} from 'vue'

 const todos= ref([])
 const name= ref('')

const input_content = ref('')
const input_catrgory = ref(null)

const todos_asc = computed(()=> todos.value.sort((a, b)=>{
  return a.createdAt - b.createdAt
}))

watch(name, (newVal) =>{
  localStorage.setItem('name', newVal)
})

onMounted(() =>{
  name.value = localStorage.getItem("name") || 'Annoumous' 
})

</script>


<template>
<main class="#app">
  <section class="greeting">
      <h2 class="title">
        What's up, <input type="text" placeholder="Name here"
        v-model="name"/>
      </h2>
  </section>

  <section class="create-todo">
    <h3><b>Let's create a TODO </b></h3>
  </section>
</main>
</template>

