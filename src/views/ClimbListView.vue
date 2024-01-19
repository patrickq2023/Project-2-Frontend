<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useCookies } from 'vue3-cookies'
import { decodeCredential } from 'vue3-google-login'
import NewClimb from '@/components/NewClimb.vue'

const { cookies } = useCookies()

const climbsBe = ref([])
const isLoggedIn = ref(false)
const userName = ref('')


const fetchData = () => {
    fetch(`${import.meta.env.VITE_API_URL}/climb`)
    .then( response => response.json() )
    .then ( result => {
        climbsBe.value = result
    })
}

function deleteClimb(climbId) {
    fetch(`${import.meta.env.VITE_API_URL}/climb/${climbId}`, {
        method: "DELETE"
    })
    .then(() => {
        alert('Climb deleted')
        fetchData()
    })
    .catch(err => console.error(err) )
}
const checkSession = () => {
    if( cookies.isKey('user_session')) {
        isLoggedIn.value = true
        const userData = decodeCredential(cookies.get('user_session'))    
        userName.value = userData.given_name
    }
}



onMounted(() => {
    fetchData()
    checkSession()
})
</script>

<template>
    <h1>Climb List</h1>
    <ul>
        <li class="climblist" v-for="climb in climbsBe" :key="climb._id">
            <RouterLink class="climblist1" :to="'/climb/' + climb._id">{{ climb.name }}</RouterLink> &nbsp;
            <button v-if="isLoggedIn" @click="deleteClimb(climb._id)">Delete Climb</button> &nbsp;
            <RouterLink v-if="isLoggedIn" :to="'/climb/update/' + climb._id">Edit Climb</RouterLink>
        </li>
    </ul>
    <hr>
     <NewClimb v-if="isLoggedIn" :fetchData="fetchData"/>        
    </template>