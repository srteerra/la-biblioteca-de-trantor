<template>
  <div>
    <Nav-Logged v-if="$store.state.user.user_role === 'user'"/>
    <NavLoggedAdmin v-else-if="$store.state.user.user_role === 'admin'"/>
    <NavLoggedJudge v-else-if="$store.state.user.user_role === 'judge'"/>
    <Nav v-else/>
  
    <router-view :key="$route.fullPath" />
    
    <Footer/>

    <!-- Modal for views -->c

    <!-- Log in -->
    <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-5">
            <h1 class="fw-bold fs-2">Iniciar sesion</h1>
            <p class="mb-5">Por favor ingresa tus credenciales correctamente:</p>
            <form method="POST">
              <div class="mb-3">
                <label for="loginEmail" class="form-label">Correo electronico</label>
                <input type="email" v-model="loginEmail" class="form-control rounded-pill" id="loginEmail" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">No compartas tu informacion con nadie mas.</div>
              </div>
              <div class="mb-3">
                <label for="loginPassword" class="form-label">Contraseña</label>
                <input type="password" v-model="loginPassword" class="form-control rounded-pill" id="loginPassword">
              </div>
              <div class="mb-3 form-check">
                <input v-model="loginCheck" type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Recuerdame</label>
              </div>
              <div class="container-fluid justify-content-center p-0 mt-5">
                <button v-on:click.prevent="login({loginEmail,loginPassword})" type="submit" class="btn btn-dark col-12 py-3 rounded-pill" data-bs-dismiss="modal" :disabled="loginButton">Entendido</button>
                <div class="d-flex mt-2">
                  <p class="">No tienes una cuenta?</p>
                  <router-link to="/" class="text-dark ps-2">Registrate</router-link>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>

    <!-- Participate -->
    <div class="modal fade" id="participateModal" tabindex="-1" aria-labelledby="participateModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-5">
            <div class="">
              <h1 class="fw-bold fs-2">Quiero participar</h1>
              <p class="mb-2">Por favor ingresa tu informacion correctamente:</p>
              <p class="mb-5">Tu registro sera revisado y autorizado, asi que si completas el formulario por favor espera hasta que verifiquemos tu informacion.</p>
              <div class="">
                <div class="container">
                  <form class="row" method="POST" action="/api/v1/users/signup">
                    <div class="col-12 col-lg-6">
                      <div class="mb-3">
                        <label for="registerNickname" class="form-label">Nickname</label>
                        <input v-model="participateNick" type="text" name="user_nickname" class="form-control rounded-pill" id="registerNickname">
                      </div>
                      <div class="mb-3">
                        <label for="registerEmail" class="form-label">Correo electronico</label>
                        <input v-model="participateEmail" type="email" name="user_email" class="form-control rounded-pill" id="registerEmail">
                      </div>
                      <div class="mb-3">
                        <label for="registerPassword" class="form-label">Contraseña</label>
                        <input v-model="participatePassword" type="password" name="user_password" class="form-control rounded-pill" id="registerPassword">
                      </div>
                      <div class="mb-3 form-check">
                        <input v-model="termsCheck" type="checkbox" class="form-check-input" id="registerCheck">
                        <label class="form-check-label" for="registerCheck">Acepto los
                          <span><router-link to="/" class="text-dark">Terminos y Condiciones</router-link></span>
                        </label>
                      </div>
                      <div class="mb-3 form-check">
                        <input v-model="rulesCheck" type="checkbox" class="form-check-input" id="registerCheck2">
                        <label class="form-check-label" for="registerCheck2">Acepto que sere <strong>descalificado</strong> si se me descubre incumpliendo alguna de las reglas.</label>
                      </div>
                    </div>
                    <aside class="col-6 d-none d-lg-block">
                      <div class="">
                        <h3>Reglas</h3>
                        <ul class="pt-3">
                          <li>Los mapas mentales que se requieren, tienen que seguir los siguientes requisitos:</li>
                          <ul type="circle" class="mt-3">
                            <li>Se honesto (NO copiar y pegar resumenes o reseñas de internet)</li>
                          </ul>
                          <li class="mt-3">Comparte este proyecto con tus amigos y familia</li>
                        </ul>
                      </div>
                    </aside>
                    <div class="container-fluid justify-content-center p-0 mt-5">
                      <button type="submit" class="btn btn-dark col-12 py-3 rounded-pill" data-bs-dismiss="modal" :disabled="participateButton">Entendido</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import vue from 'vue';
  import axios from 'axios';
  import Nav from "./components/Nav";
  import NavLogged from "./components/Nav-logged";
  import NavLoggedAdmin from "./components/Nav-loggedAdmin";
  import NavLoggedJudge from "./components/Nav-loggedJudge";
  import Footer from "./components/Footer";
  
  import {mapActions} from "vuex"
  export default {
    name: "App",
    data() {
      return {
        loginEmail:'',
        loginPassword:'',
        loginCheck: false,

        participateNick:'',
        participateEmail:'',
        participatePassword:'',
        termsCheck:false,
        rulesCheck:false
      };
    },
    components: {
      Nav,
      NavLogged,
      NavLoggedAdmin,
      NavLoggedJudge,
      Footer
    },
    methods: {
      ...mapActions(['login']),
    },
    computed: {
      userNick() {
        return this.$store.state.user.user_nickname
      },
      userAvatar() {
        return this.$store.state.user.user_avatar
      },
      userRole() {
        return this.$store.state.user.user_role
      },
      loginButton(){
        if (this.loginEmail == "" | this.loginPassword == "" | this.loginCheck == false)
          return true
        else
          return false
      },
      participateButton(){
        if (this.participateNick == "" | this.participateEmail == "" | this.participatePassword == "" | this.termsCheck == false | this.rulesCheck == false)
          return true
        else
          return false
      }
    },
  };
</script>

<style lang="scss">
  body {
    overflow-x: hidden;
  }
</style>
