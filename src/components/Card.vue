<template>
<div>
<v-card
    max-width="585"
  >
    <v-card-title>
      <span class="titulos">{{tarea.title}}</span>
    </v-card-title>
    <v-card-subtitle>
      <span>{{tarea.date}}</span>
    </v-card-subtitle>
    <v-card-text>
        <span>{{tarea.content}}</span>
      <p>{{tarea.estado}}</p>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="editar(tarea.id)" class="botones" >Editar</v-btn>
      <v-btn @click="eliminar(tarea.id)" class="botones" >Eliminar</v-btn>
    </v-card-actions>
  </v-card>
</div>
</template>

<script>
export default {
name:"Card",
props:{
  tarea:{
    type:Object,
    default:() => ({
      title: '',
      content:'',
      date:'',
      estado:''
      
    })
  }
},
methods:{
  eliminar(id){
    this.$swal.fire({
  title: '¿Estás seguro?',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  cancelButtonText:'Cancelar',
  confirmButtonText: 'Sí, eliminar esta tarea',
  showClass: {
    popup: 'animate__animated animate__rollIn'
  },
  hideClass: {
    popup: 'animate__animated animate__rollOut'
  }
}).then((result) => {
  if (result.isConfirmed) {
    this.$swal.fire(
      '¡Eliminada!',
      'Su tarea ha sido eliminada',
      'success',
          this.$store.dispatch("eliminarTarea",id)
    )
  }
})
  },
  editar(id){
    this.$router.push({path:'editar',query:{id}})
  }
}
}
</script>

<style>
body{
  background-color: #f6f4ff;
}
.v-card.v-card--flat.v-sheet.theme--light.rounded-0.grey.lighten-4{
  height: 120px !important;
  background-color: transparent;
}
.v-card.v-sheet.theme--light{
  margin: auto;
}
.v-card.v-sheet.theme--light:last-child{
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
.theme--dark.v-btn.v-btn--has-bg{
  background-color: #02bdf2 !important;
}
.botones{
  background: #02bdf2 !important;
  color: white !important;
  font-family: 'Poppins', sans-serif;;
}
.botones:last-child{
  background: #c82833 !important;
}
span{
  font-family: 'Poppins', sans-serif;
}
p{
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
}
.titulos{
  font-weight: 700;
}
</style>