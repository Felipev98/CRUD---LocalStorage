<template>
  <div>
      <section class="seccion3">
          <div class="container">
              <div class="row">
                  <div class="col-6">
                      <div class="imagen">
                          <img src="../assets/ave33.png" alt="ave">
                      </div>
                  </div>
                   <div class="col-6">
                      <div class="titulo-ave">
                          <h2>Como funciona</h2>
                          <span>Los pasos para obtener la información</span>
                      </div>
                                    <div class="row">
                  <div class="col-6">
                      <div class="icono">
                          <i class="fab fa-500px"></i>
                      </div>
                      <div class="texto-icono">
                          <h2>Paso1</h2>
                          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta non laudantium</span>
                      </div>
                  </div>
                    <div class="col-6">
                      <div class="icono">
                          <i class="far fa-address-book"></i>
                      </div>
                      <div class="texto-icono">
                          <h2>Paso2</h2>
                          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta non laudantium</span>
                      </div>
                  </div>
                    <div class="col-6">
                      <div class="icono">
                          <i class="fas fa-anchor"></i>
                      </div>
                      <div class="texto-icono">
                          <h2>Paso3</h2>
                          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta non laudantium</span>
                      </div>
                  </div>
                    <div class="col-6">
                      <div class="icono">
                          <i class="fas fa-ambulance"></i>
                      </div>
                      <div class="texto-icono">
                          <h2>Paso4</h2>
                          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta non laudantium</span>
                      </div>
                  </div>
              </div>
                  </div>
              </div>
         <div class="boton-final">
              <div class="boton-finall">
                  <a href="">Probar</a>
                <span><i class="fas fa-ambulance"></i></span>

              </div>
          </div>
          </div>
         
      </section>
  </div>
</template>

<script>
export default {
    name:'Main2'
}
</script>

<style>
.seccion3{
    height: 100vh;
}
.imagen img{
width:100%;
}
.titulo-ave h2{
    color:  #FFFFFF;
    font-size: 4.375rem;
    font-weight: 500;
}
.titulo-ave span{
    color: #FFFFFF;
    opacity: 0.5;
    font-size: 2rem;
}
.icono{
margin-top: 2rem;
}
.fab, .far{
    font-size: 2rem ;
}
.texto-icono h2{
    color: white;
    font-size: 1.8rem;
}
.texto-icono span{
    color: white;
    font-size: 1.375rem;
    opacity: 0.5;
}
.boton-final{
    text-align: center;
    margin-top: 2rem;
}
.boton-final a{
    text-decoration: none;
    color: white;
    font-size: 1.1rem;
    padding: 1rem;
    background-color: red;
      border-radius: 1rem;

}
.boton-final span{
      border-radius: 0.8rem 1rem 1.4rem 1rem;
        border: 1px solid red;
        padding: 1.1rem;
}
</style>