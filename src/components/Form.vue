<template>
  <div>
  <v-container>

    <v-textarea
        solo
        label="¿Qué vas hacer?"
        v-model="title"          
    ></v-textarea>
     <v-textarea
        solo
        label="Añade una descripción"
        v-model="content"          
    ></v-textarea>
     <v-textarea
        solo
        label="Añade un comentario"
        v-model="date"          
    ></v-textarea>
    <v-radio-group v-model="estado" class="radio">
      <v-radio
        value="Completada"
        label="Completada"
      ></v-radio>
       <v-radio
        value="Pendiente"
        label="Pendiente"
      ></v-radio>
    </v-radio-group>
       <v-card-actions>
      <v-btn @click="$router.push('/')" class="botoness">Cancelar</v-btn>
      <v-btn v-if="!editar" @click="agregar" class="botoness" >Agregar</v-btn>
    <v-btn v-else @click="guardar" class="botoness" >Editar</v-btn>
    </v-card-actions>
  </v-container>
    
  </div>
</template>

<script>
import short from 'short-uuid'
export default {
    name:'Form',
    data() {
        return {
            radio:["Completado","No completado"]
        }
    },
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
                content:'',
                date:'',
                estado:''
            })
        }
    },
    created(){  
        this.assignValues()
        let data = localStorage.getItem("tareas")
        if(data != null){
            this.tarea= JSON.parse(data);
        }
    },
    data() {
        return {
            content:'',
            title:'',
            date:'',
            estado:''
        }
    },
    methods:{
        agregar(){
            this.$store.dispatch('agregarTarea',{
                id:short.generate(),
                title:this.title,
                content:this.content,
                date:this.date,
                estado:this.estado
                
            })
        this.$swal({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        icon: 'success',
        text: '¡Tarea agregada con exito!',
        }),
         
         this.$router.push('/')
         
        },
        guardar(){
            this.$store.dispatch('eliminarTarea',this.tarea.id)
            this.$store.dispatch('agregarTarea',{
                id:this.tarea.id,
                title:this.title,
                content:this.content,
                date:this.date,
                estado:this.estado

            })
            this.$swal({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        icon: 'success',
        text: '¡Tarea editada con exito!',
        }),
          this.$router.push('/')
        },
        async assignValues(){
            await this.$nextTick
            this.title = this.tarea.title
            this.content = this.tarea.content
            this.date = this.tarea.date,
            this.estado= this.tarea.estado
        }
    }
}
</script>

<style>
.v-input.v-textarea.theme--light.v-text-field.v-text-field--single-line.v-text-field--solo.v-text-field--is-booted.v-text-field--enclosed{
    width: 40% ;
    margin: auto;
    border-radius: 1rem;
}
.botoness{
    background-color: #c82833!important;
    color: white !important ;
}
.botoness:last-child{
    background-color: #06b8f5 !important;
}
.v-input--radio-group__input{
    transform: translateX(45%);
}
@media screen and (max-width:1000px){
    .v-input--radio-group__input{
        width:0 !important;
    }
    .v-input.v-textarea.theme--light.v-text-field.v-text-field--single-line.v-text-field--solo.v-text-field--is-booted.v-text-field--enclosed{
        width:100%
    }
}
</style>