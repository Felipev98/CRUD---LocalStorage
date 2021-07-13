<template>
<div>
  <Card v-for="tarea in tareas" :key="tarea.id" :tarea="tarea"/>
  <router-link to="/agregar" >Agregar</router-link>
</div>
</template>

<script>
// @ is an alias to /src
import Card from '../components/Card.vue'
export default {
  name: 'Home',
  components: {
    Card
  },
  computed:{
    tareas(){
      return this.$store.getters.getTareas
    }
  }
}
</script>
