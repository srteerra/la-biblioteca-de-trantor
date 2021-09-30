<template>
  <div>
    <Nav />
    <router-view :key="$route.fullPath" />
    <h1 v-if="rol === 'admin'">Admin dashboard</h1>
    <h1 v-else>user dashboard</h1>
    <button class="btn btn-primary" v-on:click="mensaje">click me!</button>
    <div class="card" style="width: 18rem;">
      <img src="./assets/img/overwatch.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
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

<style></style>
