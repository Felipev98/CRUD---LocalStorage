<template>
  <div>
    <Navbar/>
    <Banner/>
    <Main1/>
    <Main2/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Banner from '../components/Banner.vue'
import Main1 from '../components/Main1.vue'
import Main2 from '../components/Main2.vue'
export default {
components:{
  Navbar,Banner,Main1,Main2
}
}
</script>

<style>

</style>