<template>
<div>
  <h2>{{tarea.title}}</h2>
  <span>{{tarea.content}}</span>
  <button  @click="editar(tarea.id)">Editar</button>
  <button @click="eliminar(tarea.id)">Eliminar</button>
</div>
</template>

<script>
export default {
name:"Card",
props:{
  tarea:{
    type:Object,
    default:() => ({
      id:0,
      title: '',
      content:''
    })
  }

},
methods:{
  eliminar(id){
    this.$store.dispatch("eliminarTarea",id)
  },
  editar(id){
    this.$router.push({path:'editar',query:{id}})
  }
}
}
</script>

<style>

</style>