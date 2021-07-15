<template>
  <div>
      <section class="main-section">
     <div class="container">

  <div class="row">
<div class="col-md-4 col-xl-3">
      <div class="card card-inverse  text-center">
        <img class="card-img-top imagen-1" src="../assets/ave1.png" alt="Card image cap">
        <div class="card-block">
          <h4 class="card-title">Lorem ipsum</h4>
        <p class="card-subtext">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <span class="span">Lorem ipsum dolor sit amet consectetur,</span>
        </div>
      </div>
    </div>

    <div class="col-md-4  col-xl-3">
      <div class="card card-inverse  text-center">
        <img class="card-img-top imagen-1" src="../assets/ave22.png" alt="Card image cap">
        <div class="card-block">
          <h4 class="card-title">Lorem ipsum</h4>
          <p class="card-subtext">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. </p>
        <span class="span">Lorem ipsum dolor sit amet consectetur,</span>
        </div>
      </div>
    </div>


    <div class="col-md-4  col-xl-3">
      <div class="card card-inverse  text-center">
        <img class="card-img-top imagen-1" src="../assets/ave33.png" alt="Card image cap">
        <div class="card-block">
          <h4 class="card-title">Lorem ipsum</h4>
        <p class="card-subtext">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <span class="span">Lorem ipsum dolor sit amet consectetur,</span>

        </div>
      </div>
    </div>
    </div>

</div>
</section>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.main-section{
    height: 100vh;
}
.imagen-presentacion{
    text-align: center;

}
.imagen-presentacion img{
    width: 50%;
}
.card{
    background-color: #1D1C25 !important;
}
.card-img-top img{
width: 90rem !important;
}
.imagen-1{
    width: 60% !important;
    margin: auto;
}
.card.card.card-inverse.text-center{
    padding: 1rem !important;
    border-radius: 1.5rem;
    box-shadow: 0px 9px 32px -1px black;
    transition:  all 0.3s ease-in-out;
}
.card.card.card-inverse.text-center:hover{
    box-shadow: 0px 9px 42px -1px #ffc107;
}
.card-title{
    color: white;
    font-weight: 700;
    padding-top: 0.8rem;
      font-family: 'Mazzard',sans-serif;
font-weight: 900;
}
.card-subtext{
    color: white;
    opacity: 0.68;
          font-family: 'Mazzard',sans-serif;

}
.card-text{
    color: white;
    opacity: 0.48;
          font-family: 'Mazzard',sans-serif;

}
.span{
    color: #0549FF;
          font-family: 'Mazzard',sans-serif;

}
/* Media Queries */
@media screen and (max-width:900px) {
  .card.card.card-inverse.text-center{
    margin-top: 1rem;
  }
}
@media screen and (min-width:767px) and (max-width:900px) {
.main-section{
  height: 0;
}
.imagen img{
  padding-top: 5rem;
  transform: translateX(224px) !important;
}
.imagen{
  padding-top: 0 !important;
}

}
  @media screen and (min-width:900px) and (max-width:1100px) {
   .main-section{
     height: 40vh;
   }
  }

</style>