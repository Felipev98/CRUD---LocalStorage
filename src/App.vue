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

      <v-toolbar-title>My task List</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi mdi-bell-outline</v-icon>
      </v-btn>
  <v-navigation-drawer app v-model="drawer" temporary >
    <div class="titulo-sideMenu">
          <h3>Menú</h3>
      </div> 
    <v-list-item>
       <v-list-item-icon>
            <v-icon class="icono">mdi-apps</v-icon>
          </v-list-item-icon>


          <v-list-item-content>
            <v-list-item-title class="titulo-perfil">All task</v-list-item-title>
          </v-list-item-content>
    </v-list-item>
 <v-list-item>
       <v-list-item-icon>
            <v-icon class="icono">mdi mdi-account</v-icon>
          </v-list-item-icon>


          <v-list-item-content>
            <v-list-item-title class="titulo-perfil">Personal</v-list-item-title>
          </v-list-item-content>
    </v-list-item>
    <v-list-item>
       <v-list-item-icon>
            <v-icon class="icono">mdi mdi-school</v-icon>
          </v-list-item-icon>


          <v-list-item-content>
            <v-list-item-title class="titulo-perfil">School</v-list-item-title>
          </v-list-item-content>
    </v-list-item>
     <v-list-item>
       <v-list-item-icon>
            <v-icon class="icono">mdi mdi-briefcase</v-icon>
          </v-list-item-icon>


          <v-list-item-content>
            <v-list-item-title class="titulo-perfil">Work</v-list-item-title>
          </v-list-item-content>
    </v-list-item>

  </v-navigation-drawer>
  <v-avatar>
      <img
        src="https://spoiler.bolavip.com/__export/1603135812404/sites/bolavip/img/2020/10/19/gettyimages-875102250_crop1603134582256.jpg_1155819072.jpg"
        alt="John"
      >
    </v-avatar>
    </v-toolbar>
  </v-card>
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
