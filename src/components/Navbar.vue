<template>
<div>
  <div class="container">
 <b-navbar toggleable="lg" class="letras" type="dark" >
    <b-navbar-brand href="#">Calaverita</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapsex" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#" class="sol"><img src="../assets/solblanco.svg" alt=""> </b-nav-item>
        <b-nav-item href="#">News</b-nav-item>
        <b-nav-item href="#" >Contact</b-nav-item>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>

</div>
</template>

<script>
export default {
  name: 'Navbar',
  components: {
  }
}
</script>
<style>
body{
  background-color: #333333;
}
.navbar-expand-lg .navbar-collapse{
  justify-content: flex-end;
}
.nav-link {
  color: white !important;
  font-family: 'Mazzard',sans-serif;
font-weight: bold;
transition: all 0.3s ease;
}
.nav-link:hover {
  color: #0549FF !important;

}
.sol img{
  width: 1.5rem;
}
.navbar-dark .navbar-brand{
    font-family: 'Mazzard',sans-serif;
font-weight: bold;
}
</style>