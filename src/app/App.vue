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
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-5">
            <h1 class="fw-bold">Iniciar sesion</h1>
            <p class="mb-5">Por favor ingresa tus credenciales correctamente:</p>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Correo electronico</label>
                <input type="email" class="form-control rounded-pill" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">No compartas tu informacion con nadie mas.</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                <input type="password" class="form-control rounded-pill" id="exampleInputPassword1">
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Recuerdame</label>
              </div>
              <div class="container-fluid justify-content-center p-0 mt-5">
                <button type="submit" class="btn btn-dark col-12 py-3 rounded-pill" data-bs-dismiss="modal">Entendido</button>
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
              <h1 class="fw-bold">Quiero participar</h1>
              <p class="mb-2">Por favor ingresa tu informacion correctamente:</p>
              <p class="mb-5">Tu registro sera revisado y autorizado, asi que si completas el formulario por favor espera hasta que verifiquemos tu informacion.</p>
              <div class="">
                <div class="container">
                  <form class="row">
                    <div class="col-12 col-lg-6">
                      <div class="mb-3">
                        <label for="registerName" class="form-label">Nombre</label>
                        <input type="name" class="form-control rounded-pill" id="registerName">
                      </div>
                      <div class="mb-3">
                        <label for="registerLastname" class="form-label">Apellido</label>
                        <input type="lastname" class="form-control rounded-pill" id="registerLastname">
                      </div>
                      <div class="mb-3">
                        <label for="registerPhone" class="form-label">Numero de telefono</label>
                        <input type="phone" class="form-control rounded-pill" id="registerPhone">
                      </div>
                      <div class="mb-3">
                        <label for="registerEmail" class="form-label">Correo electronico</label>
                        <input type="email" class="form-control rounded-pill" id="registerEmail">
                      </div>
                      <div class="mb-3">
                        <label for="registerPassword" class="form-label">Contraseña</label>
                        <input type="password" class="form-control rounded-pill" id="registerPassword">
                      </div>
                      <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="registerCheck">
                        <label class="form-check-label" for="registerCheck">Acepto los
                          <span><router-link to="/" class="text-dark">Terminos y Condiciones</router-link></span>
                        </label>
                      </div>
                      <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="registerCheck2">
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
                      <button type="submit" class="btn btn-dark col-12 py-3 rounded-pill" data-bs-dismiss="modal">Entendido</button>
                      <div class="d-flex mt-2">
                        <p class="">No tienes una cuenta?</p>
                        <router-link to="/" class="text-dark ps-2">Registrate</router-link>
                      </div>
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
