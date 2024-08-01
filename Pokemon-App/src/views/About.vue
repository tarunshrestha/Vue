<template>
    <div>
      <h1>About Page</h1>
      <p>This is the about page of the Pokemon App.</p>
      <h3>{{ $route.params.slug }}</h3>
    </div>
  </template>
  
  <script>
  export default {
    name: 'About'
  }
  </script>
  
  <style scoped>
  h1 {
    color: #42b983;
  }
  </style>
  