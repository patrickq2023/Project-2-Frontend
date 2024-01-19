<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'


const climb = ref({})

onMounted(() => {
    const route = useRoute()

    fetch(`${import.meta.env.VITE_API_URL}/climb/${route.params.id}`)
    .then(response => response.json())
    .then( result => {
        climb.value = result        
    })
    .catch(err => console.error(err))
})
</script>

<template>

    <h1>{{ climb.name }}</h1>
    <div>
        <!-- To make dynamic add climb.image   instead of single url -->
        <img :src="climb.image" alt="picture of the featured climb">
    </div>      
    <h3  v-if="climb.location"> Location: {{ climb.location }}</h3>
    <br>
    <h3 v-if="climb.elevation"> Elevation:{{ climb.elevation }}</h3>
    <br>
    <h3 v-if="climb.category"> Category: {{ climb.category }}</h3> 
    <br>
    <h3 style="max-width: 600px;" v-if="climb.about"> About:{{ climb.about }}</h3>      

</template>