<template>
  <div>
      <section class="banner">
    <div class="container">
      <div class="row">

        <div class="col-lg-6">
          <div class="texto-banner">
              <span>Ayudándote a</span>
              <div id="circulo"></div>
              <p>obtener información sobre aves</p>
          
          </div>
              <div class="input">
          <input type="text" placeholder="busca tu ave">
          </div>
          <div>
          <button class="boton"><i class="fas fa-search"></i></button>

          </div>
        </div>
             <div class="col-lg-6">
          <div class="imagen-banner">
          <img src="../assets/ave-banner.png" alt="ave.png">
          </div>
        </div>
    </div>
  </div>
  </section>
  </div>
</template>

<script>
export default {
name:'Banner'
}
</script>

<style>

.banner{
height: 100vh;
}
.texto-banner{
  margin-top: 12rem;
  color: #fefefe;
  font-size: 3.5rem;
  position: absolute;
  z-index: 8;
  width: 45%;
  font-family: 'Mazzard',sans-serif;
}
.texto-banner span{
  font-size: 3.5rem;
font-family: 'Mazzard',sans-serif;
font-weight: 900;
}

.imagen-banner img{
  transform: scaleX(-1);
  width: 36rem;
  position: absolute;
  top: -1rem;

}
.imagen-banner{
  transform: translateX(-37%);
}
#circulo {
  width: 150px;
  height: 150px;
  border-radius: 1000px;
 background-color: rgba(255, 255, 255, .15);   
  position: absolute;
  top: -5rem;
  left: 26rem;
   backdrop-filter: blur(10px);

}
.input input{
  background-color: transparent;
  outline: none;
  border-radius: 1rem;
  padding: 0.7rem;
  border: 1px solid white;
  width: 21%;
  position: absolute;
  top: 32rem;
}
::placeholder{
  color: #C4C4C4;
  font-size: 1rem;
}
.boton{
  outline: none;
  border: none;
  background-color: #022c96;
  width: 4rem;
  height: 4rem;
  border-radius: 100px;
  position: absolute;
  top: 31rem;
  transform: translateX(519%);
  transition:  all 0.3s ease-in;
}
.boton:hover{
  background-color: red;
}
i{
  color: white;
  font-size: 1.2rem;
}
/* Media Queries */

@media screen and (max-width:766px) {
  .imagen-banner img {
    transform: scaleX(-1);
    width: 14rem;
    position: absolute;
    top: 25rem;
    left: 50%;
  }
  .boton{
    width: 3rem;
    height: 3rem;
    border-radius: 100px;
    position: absolute;
    top: 25rem;
    left: -2rem;
  }
  .texto-banner{
    width: 60%;
  }
  .texto-banner span{
    font-size: 1.5rem;

  }
    .texto-banner p{
    font-size: 1.1rem;
    font-family: 'Mazzard',sans-serif ;
    
  }
  .input input{
    width: 48%;
    top: 25rem;
  }
  #circulo{
    width: 50px;
    height: 50px;
    top: -5rem;
    left: 13rem;
  }
  .icono-boton{
    right: 28% !important;
  }
}
/* Media Queries iphone */
@media screen and (min-width:320px) and (max-width:374px) {

.texto-banner{
    margin-top: 9rem;
}
.texto-banner p{
    font-size: 0.8rem;
}
.input input{
    top: 22rem;
}
.boton{
    top: 22rem;
    left: -4rem;
}
.imagen-banner img{
    top: 22rem;
    width: 9rem;
}
}

@media screen and (min-width:767px) and (max-width:900px) {
  .banner{
    height: 78vh;
  }
 .imagen-banner img {
    transform: scaleX(-1);
    width: 14rem;
    position: absolute;
    top: 24rem;
    left: 50%;
  }
  .boton{
    width: 3rem;
    height: 3rem;
    border-radius: 100px;
    position: absolute;
    top: 23rem;
    left: -2rem;
  }
  .texto-banner{
    width: 60%;
  }
  .texto-banner span{
    font-size: 2.1rem;

  }
    .texto-banner p{
    font-size: 1.1rem;
    
  }
  .input input{
    width: 48%;
    top: 23rem;
  }
  #circulo{
    width: 50px;
    height: 50px;
    top: -5rem;
    left: 13rem;
  }
  .boton{
    left: 11rem;
  }
      .icono-boton{
    right: 39% !important;
  }
}
@media screen and (min-width:450px) and (max-width:700px) {
  .boton{
    left: 2rem !important;
  }
  .imagen{
    padding-top: 25rem !important;
  }
  .imagen img{
    transform: translateX(132px) !important;
  }

}
  @media screen and (min-width:900px) and (max-width:1030px) {
    .input input {
    top: 37rem !important;
  }
  .boton {
    top: 36rem !important;
  }
  .banner{
    height: 59vh;
  }
  .icono-boton{
    right: 26.6rem !important;
  }
  }

</style>