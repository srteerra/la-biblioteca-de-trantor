<template>
  <div>
    <Nav />
    <router-view :key="$route.fullPath" />
    <Footer/>
  </div>
</template>

<script>
  import Test from "./components/Test";
  import Nav from "./components/Nav";
  import Footer from "./components/Footer";
  
  export default {
    name: "App",
    data() {
      return {
        rol: "user",
      };
    },
    components: {
      Test,
      Nav,
      Footer
    },
    methods: {
      mensaje() {
        //alert('hello i am a alert!')
        this.rol = "admin";
      },
    },
  };
</script>

<style>

</style>
