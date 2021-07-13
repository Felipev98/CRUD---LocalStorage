<template>
  <div>
<Form editar :tarea="tarea"/>
      {{tarea}}
  </div>
</template>

<script>
import Form from '../components/Form.vue'
export default {
name:'Editar',
data() {
  return {
      tarea:{}
  }
},
components:{
Form
},
methods:{
    goToHome(){
        this.$router.push('/')
    }
},
mounted(){
    if(this.$route.query?.id){
        const tarea = this.$store.getters.getTarea(this.$route.query.id)
        if(tarea){
            this.tarea = tarea
    }else{
            this.goToHome()
        }
}else{
        this.goToHome()
    }
}
}
</script>

<style>

</style>