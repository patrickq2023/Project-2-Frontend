<script setup>
import { ref } from 'vue'
const {fetchData} = defineProps(['fetchData'])

const climb = ref ({
    image: '',
    name: '',
    about: '',
    location: '',
    elevation: '', 
    category: '',
    done: false   
})

function addClimb() {
    if (climb.value.image === '' || climb.value.name === ''|| climb.value.about === ''||
    climb.value.location === ''|| climb.value.elevation === ''||climb.value.category === '' ) {
        alert('All values are required')
        return
    }
    fetch(`${import.meta.env.VITE_API_URL}/climb/new`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(climb.value)
    })
    .then(res => {
        fetchData()
        climb.value ={
        image: '',
        name: '',
        about: '',
        location: '',
        elevation: '', 
        category: '',
        done: false  
        }
        console.log(res)
    })
    .catch( err => console.error(err))
}

</script>

<template>
    <h3>Add a New Climb</h3>
    <div class="climbForm">  
      <label for="image">Paste Image Link</label>   
      <input type="text" name="image" placeholder="Image" v-model="climb.image" required>
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
      <button @click="addClimb">Add Climb</button>
</div>

</template> 