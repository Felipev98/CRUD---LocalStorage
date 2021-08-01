<template>
<div>
    <div class="titulo">
        <h2>Nuevas tareas</h2>
    </div>

    <Form/>
</div>
</template>

<script>
import Form from '../components/Form.vue'
export default {
    name:"Agregar",
    components:{
        Form
    }
}
</script>
<style>
.titulo{
    width: 99%;
    text-align: center;
font-family: 'Poppins', sans-serif;
}
.v-label.theme--light{
    font-family: 'Poppins', sans-serif;
    font-size: 0.8rem;
}

</style>