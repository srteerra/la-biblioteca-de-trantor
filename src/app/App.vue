<template>
  <div>
    <Nav />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
  import Test from "./components/Test";
  import Nav from "./components/Nav";
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
