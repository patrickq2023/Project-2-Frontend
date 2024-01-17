<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const comment = ref({})

onMounted(() => {
    const route = useRoute()

    fetch(`${import.meta.env.VITE_API_URL}/user-comments/${route.params.id}`)
    .then(response => response.json())
    .then( result => {
        comment.value = result        
    })
    .catch(err => console.error(err))
})
</script>

<template>
  <h3>Your Comments</h3>
    <div class="commentForm">        
      <label for="name">Comments: *</label>
      <input type="text" name="name" placeholder="Name" v-model="climb.coments" required>
    </div>
    <NewClimb :fetchData="fetchData"/>
</template>