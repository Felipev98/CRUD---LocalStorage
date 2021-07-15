<template>
  <div>
    <Navbar/>
    <Banner/>
    <Main1/>
    <Main2/>
    <Footer/>
  </div>

</template>

<script>
import Navbar from '../components/Navbar.vue'
import Banner from '../components/Banner.vue'
import Main1 from '../components/Main1.vue'
import Main2 from '../components/Main2.vue'
export default {
  data() {
    return {
    }
  },
components:{
  Navbar,Banner,Main1,Main2
}
}
</script>

<style>
@font-face{
    font-family:"mazzard-h-black";
    font-family:"mazzard-h-extralight";
    font-family:"mazzard-h-bold-italic";
    src:url("https://dafonttop.com/wp-data/m/226/12226/file/MazzardH-Black.otf") format("woff"),
    url("https://dafonttop.com/wp-data/m/226/12226/file/MazzardH-Black.otf") format("opentype"),
    url("https://dafonttop.com/wp-data/m/226/12226/file/MazzardH-Black.otf") format("truetype");
    src:url("https://dafonttop.com/wp-data/m/226/12226/file/MazzardH-ExtraLight.otf") format("woff"),
    url("https://dafonttop.com/wp-data/m/226/12226/file/MazzardH-ExtraLight.otf") format("opentype"),
    url("https://dafonttop.com/wp-data/m/226/12226/file/MazzardH-ExtraLight.otf") format("truetype");
    src:url("https://dafonttop.com/wp-data/m/226/12226/file/MazzardH-BoldItalic.otf") format("woff"),
    url("https://dafonttop.com/wp-data/m/226/12226/file/MazzardH-BoldItalic.otf") format("opentype"),
    url("https://dafonttop.com/wp-data/m/226/12226/file/MazzardH-BoldItalic.otf") format("truetype");
}
body{

  background-color:  #121212 !important;
;
}
</style>