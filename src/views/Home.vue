<template>
<div>
  <div class="home-titulo">
    <span  >All for Today:</span>
  </div>
  <Card v-for="tarea in tareas" :key="tarea.id" :tarea="tarea"/>
  <router-link to="/agregar" > <v-fab-transition>
                <v-btn
                  fab
                  dark
                  absolute
                  right
                  bottom
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-fab-transition></router-link>
</div>

</template>

<script>
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
  },
}
</script>
<style >
  .v-btn--fab.v-size--default.v-btn--absolute.v-btn--bottom{
    bottom: 35px !important;
  }
  .v-card__actions{
    justify-content: space-evenly;
  }
  .v-toolbar__title{
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
  }
  .home-titulo{
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    transform: translateX(29%);
    font-size: 1.3rem;
  }
  
</style>