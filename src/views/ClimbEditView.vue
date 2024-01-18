<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'


const route = useRoute()
const router = useRouter()
const climbId = route.params.id

const climb = ref ({
    image: '',
    name: '',
    about: '',
    location: '',
    elevation: '', 
    category: '',
    done: false   
})

const LoadClimbData = () => {
    fetch(`${import.meta.env.VITE_API_URL}/climb/${climbId}`)
    .then(res => res.json())
    .then(data => {
        climb.value = {
            image: data.image,
            name: data.name,
            about: data.about,
            location: data.loctation,
            elevation: data.elevation,
            category: data.category,
        }
    })
}

function updateClimb() {
    fetch(`${import.meta.env.VITE_API_URL}/climb/${climbId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(climb.value)
    })
    .then(() => {
        router.replace({name: 'climb'})
    })
    .catch(err => console.error(err))
}

onMounted(LoadClimbData)


</script>

<template>
    <h1>Edit Climb</h1>
<div class="climbForm">   
    <label for="image">Paste Image Link</label>   
      <input type="text" name="image" placeholder="Image" v-model="climb.name" required>
      <label for="name">Name: *</label>
      <input type="text" name="name" placeholder="Name" v-model="climb.name" required>
      <label for="about">About: *</label>
      <input type="text" name="about" placeholder="About" v-model="climb.about" required>
      <label for="location">Location: *</label>
      <input type="text" name="location" placeholder="Location" v-model="climb.location" required>
      <label for="elevation">Elavation: *</label>
      <input type="text" name="elavation" placeholder="Elevation" v-model="climb.elevation" required>
      <label for="category">Category: *</label>
      <input type="text" name="Category" placeholder="Category" v-model="climb.category" required>
    <button @click="updateClimb">Edit Climb</button>
</div>
</template>
