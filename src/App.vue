<template>
  <div id="app">
   <v-card
    color="grey lighten-4"
    flat
    height="200px"
    tile
  >
    <v-toolbar dense>
      <v-app-bar-nav-icon @click="drawer=!drawer" ></v-app-bar-nav-icon>
      <v-toolbar-title>Mi lista de tareas</v-toolbar-title>
      <v-spacer></v-spacer>
          </v-toolbar>
  </v-card>
  <v-navigation-drawer app v-model="drawer" absolute temporary >
    <div class="titulo-sideMenu">
          <h3>Menú</h3>
      </div> 
    <v-list-item>
       <v-list-item-icon>
            <v-icon class="icono">mdi-apps</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="titulo-perfil">Tareas</v-list-item-title>
          </v-list-item-content>
    </v-list-item>
  </v-navigation-drawer>
  <transition mode="out-in" enter-active-class="animate__animated animate__bounceInLeft" leave-active-class="animate__animated animate__bounceOutLeft">
      <router-view/>
  </transition>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      drawer:true
    }
  },
  methods: {
    ...mapActions(['cargarLocalStorage'])
  },
  created(){
    this.cargarLocalStorage()
  }
}
</script>
<style>
.titulo-sideMenu{
  text-align: center;
  font-size: 1.2rem;
  font-weight:700;
  font-family: 'Poppins', sans-serif;
  margin-top: 1rem
  
  }

.icono{
  padding-right: 1rem;
}
.titulo-perfil{
    font-family: 'Poppins', sans-serif;

  font-weight: 400;
}
.v-list-item.theme--light{
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}
.v-list-item.theme--light:hover{
background-color: #01bcf3;
}
.v-avatar{
  height: 42px !important;
}
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,700;1,400;1,500&display=swap');
</style>
