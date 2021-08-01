<template>
<div>
  <v-container>
  <div class="home-titulo">
    <span  >Mis tareas:</span>
     <div>
    <v-text-field label="Buscar" v-model="task"
    ></v-text-field>
  </div>

  </div>
  <div v-if="filteredCards.length !== 0">
  <Card v-for="tarea in filteredCards" :key="tarea.id" :tarea="tarea"/>
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
<div v-else>
  <div class="texto-tarea">
  <p>No se ha encontrado esa tarea</p>

  </div>
</div>
  </v-container>

</div>
</template>
<script>
import Card from '../components/Card.vue'
export default {
  data() {
    return {
      task:'',      
    }
  },
  name: 'Home',
  components: {
    Card
  },
  computed:{
    tareas(){
      return this.$store.getters.getTareas
    },    
    filteredCards(){
      return this.tareas.filter((tarea)=>{
        return tarea.title.match(this.task)
      })

    }
  },
}
</script>
<style >
  .v-btn--fab.v-size--default.v-btn--absolute.v-btn--bottom{
    
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
    font-size: 1.3rem;
    text-align: center;

  }
  .texto-tarea{
  text-align: center;
  margin-top: 2rem;
  color: #C81F1F;
  }
  @media screen and (max-width:1025px){
    .home-titulo{
      transform: translateX(0);
    }
  }
</style>