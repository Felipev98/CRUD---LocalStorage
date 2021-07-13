<template>
  <div>
      <input v-model="title" type="text" placeholder="Titulo">
        <input v-model="content" type="Descripcion" placeholder="Descripcion">
    <button @click="$router.push('/')">Cancelar</button>
    <button v-if="!editar" @click="agregar">Agregar</button>
    <button v-else @click="guardar">Editar</button>
  </div>
</template>

<script>
import short from 'short-uuid'
export default {
    name:'Form',
    props:{
        editar:{
            type:Boolean,
            default:false
        },
        tarea:{
            type:Object,
            default:() => ({
                id:'',
                title:'',
                content:''
            })
        }
    },
    created(){  
        this.assignValues()
    },
    data() {
        return {
            content:'',
            title:'',
        }
    },
    methods:{
        agregar(){
            this.$store.dispatch('agregarTarea',{
                id:short.generate(),
                title:this.title,
                content:this.content
            })
            this.$router.push('/')
        },
        guardar(){
            this.$store.dispatch('eliminarTarea',this.tarea.id)
            this.$store.dispatch('agregarTarea',{
                id:this.tarea.id,
                title:this.title,
                content:this.content

            })
          this.$router.push('/')
        },
        async assignValues(){
            await this.$nextTick
            this.title = this.tarea.title
            this.content = this.tarea.content
        }
    }
}
</script>

<style>

</style>