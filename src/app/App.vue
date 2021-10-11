<template>
  <div>
    <Nav />
    <router-view :key="$route.fullPath" />
    <Footer/>

    <!-- Modal for views -->

    <!-- Log in -->
    <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="loginModalLabel">Recompensas</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-5">
            <h5>Ago - Feb</h5>
            <h3 class="mb-5">Estas son las recompensas:</h3>
            <p class="text-dark text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore perferendis consectetur voluptas itaque saepe.</p>
            <ol>
              <li>Objecto</li>
              <li>Objecto</li>
              <li>Objecto</li>
              <li>Objecto</li>
            </ol>
            <p class="text-dark text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore perferendis consectetur voluptas itaque saepe.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Entendido</button>
          </div>
        </div>
      </div>
    </div>
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

<style lang="scss">
  body {
    overflow-x: hidden;
  }
</style>
