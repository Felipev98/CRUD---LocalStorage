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
                   <div class="col-lg-6">
                      <div class="titulo-ave">
                          <h2>Como funciona</h2>
                          <span>Los pasos para obtener la información</span>
                      </div>
                                    <div class="row">
                  <div class="col-lg-6">
                      <div class="icono">
                          <i class="fab fa-500px"></i>
                      </div>
                      <div class="texto-icono">
                          <h2>Paso1</h2>
                          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta non laudantium</span>
                      </div>
                  </div>
                    <div class="col-lg-6">
                      <div class="icono">
                          <i class="far fa-address-book"></i>
                      </div>
                      <div class="texto-icono">
                          <h2>Paso2</h2>
                          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta non laudantium</span>
                      </div>
                  </div>
                    <div class="col-lg-6">
                      <div class="icono">
                          <i class="fas fa-anchor"></i>
                      </div>
                      <div class="texto-icono">
                          <h2>Paso3</h2>
                          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta non laudantium</span>
                      </div>
                  </div>
                    <div class="col-lg-6">
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
                  <div class="icono-boton">
                      <span><i class="fas fa-download"></i></span>
                  </div>

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
    font-family: 'Mazzard',sans-serif;
    font-weight: 700;
}
.titulo-ave span{
    color: #FFFFFF;
    opacity: 0.5;
    font-size: 2rem;
    font-family: 'Mazzard',sans-serif;

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
    font-family: 'Mazzard',sans-serif;
    font-weight: bold;
}
.texto-icono span{
    color: white;
    font-size: 1.375rem;
    opacity: 0.5;
          font-family: 'Mazzard',sans-serif;

}
.boton-final{
    text-align: center;
    margin-top: 4rem;
    height: 10rem;
}
.boton-final a{
    text-decoration: none;
    color: white;
    padding: 1rem;
    background-color: #0549FF;
      border-radius: 0.5rem;
      font-size: 1.1rem;

}
.icono-boton{
    display: inline-block;
    transform: translateY(1px);
    right: 37rem;
    position: absolute;

}
.boton-final span{
border-radius:  1px 14px 10px 10px;
padding: 1rem;
border:1px solid #0549FF;
}
/* Media Queries */
@media screen and (max-width:900px) {
.seccion3{
    padding-top: 29rem;
}
.imagen img{
    width: 15rem;
    transform: translateX(39px);
}
.imagen{
    padding-top: 20rem;
}
.titulo-ave{
    text-align: center;
}
.titulo-ave h2{
    font-size: 2rem;
    margin-top: 1.5rem;
}
.titulo-ave span{
    font-size: 1rem
}
.texto-icono{
    text-align: center;
}
.texto-icono span{
    font-size: 1rem;
}
.texto-icono h2{
    font-size: 1.4rem;
}
.icono{
    text-align: center;
    margin-top: 4rem;
    margin-bottom: 1rem;
}
.fab, .far{
    font-size: 2.5rem;
}
.icono-boton{
    right:32% ;
}
/* Iphone5 */
@media screen and (min-width:320px) and (max-width:374px) {

.imagen img {
    width: 13rem;
    transform: translateX(39px);
    margin-top: 3rem;
}
}
}
</style>