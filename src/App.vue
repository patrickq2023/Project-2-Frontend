<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <header>    

    <div class="wrapper">  
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <br>
        <RouterLink to="/climb">Climbs List</RouterLink>
        <br>
        <RouterLink to="/login">Login</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
