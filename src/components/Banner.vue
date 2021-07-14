<template>
  <div>
      <section class="banner">
    <div class="container">
      <div class="row">

        <div class="col-6">
          <div class="texto-banner">
              <h2><span>Ayudantote</span> a</h2>
              <div id="circulo"></div>
              <p>obtener información sobre aves</p>
          </div>
          <div class="input">
          <input type="text" placeholder="busca tu ave">
          </div>
          <button class="boton"><i class="fas fa-search"></i></button>
        </div>
             <div class="col-6">
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
}
.texto-banner span{
  font-size: 3.5rem;
  font-weight: 700;
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
  left: 21rem;
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
}
i{
  color: white;
  font-size: 1.2rem;
}
</style>