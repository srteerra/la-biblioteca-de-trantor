<template>
    <footer class="footer__container bg-dark text-center text-lg-start">
        <!-- Grid container -->
        <div class="footer__grid container px-4 py-5 first">
            <!--Grid row-->
            <div class="row">
                <!--Grid column-->
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0 lh-lg">
                    <h5 class="text-light text-center text-lg-start text-uppercase fw-bold pb-3">Logo</h5>

                    <ul class="list-unstyled mb-0">
                        <li class="p-0 m-0">
                            <a href="#!" class="text-light text-center text-lg-start">{{ mail }}</a>
                        </li>
                        <li class="p-0 m-0">
                            <p class="text-light text-center text-lg-start">{{ phone }}</p>
                        </li>
                        <!-- Section: Social media -->
                        <section class="mb-4">
                            <!-- Facebook -->
                            <a class="btn btn-link btn-floating text-light p-0 m-1" href="#!" role="button" data-mdb-ripple-color="info"><i class="fab fa-facebook-f"></i></a>

                            <!-- Twitter -->
                            <a class="btn btn-link btn-floating text-light p-0 m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i class="fab fa-twitter"></i></a>

                            <!-- Instagram -->
                            <a class="btn btn-link btn-floating text-light p-0 m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i class="fab fa-instagram"></i></a>
                        </section>
                        <!-- Section: Social media -->
                    </ul>
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0 lh-lg">
                    <h5 class="text-light text-center text-lg-start fw-bold text-uppercase pb-3">Quienes somos</h5>

                    <ul class="list-unstyled">
                        <li class="p-0 m-0">
                            <router-link to="/about" class="text-light text-center text-lg-start p-0 m-0">Acerca</router-link>
                        </li>
                        <li class="p-0 m-0">
                            <router-link to="" class="text-light text-center text-lg-start p-0 m-0">Aprende mas</router-link>
                        </li>
                        <li class="p-0 m-0">
                            <router-link to="/explore" class="text-light text-center text-lg-start p-0 m-0">Explorar</router-link>
                        </li>
                    </ul>
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0 lh-lg">
                    <h5 class="text-light text-center text-lg-start fw-bold text-uppercase pb-3">Ayudanos</h5>

                    <ul class="list-unstyled mb-0">
                        <li class="p-0 m-0">
                            <router-link to="/sponsorship" class="text-light text-center text-lg-start p-0 m-0">Quiero patrocinar</router-link>
                        </li>
                        <li class="p-0 m-0">
                            <router-link to="/scholarship" class="text-light text-center text-lg-start p-0 m-0">Quiero becar</router-link>
                        </li>
                    </ul>
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0 lh-lg">
                    <h5 class="text-light text-center text-lg-start fw-bold text-uppercase pb-3">Ayuda</h5>

                    <ul class="list-unstyled">
                        <li class="p-0 m-0">
                            <router-link to="/contact-us" class="text-light text-center text-lg-start p-0 m-0">Contactanos</router-link>
                        </li>
                        <li class="p-0 m-0">
                            <router-link to="/admin" class="text-light text-center text-lg-start p-0 m-0">Reporta un bug</router-link>
                        </li>
                        <li class="p-0 m-0">
                            <router-link to="/about" class="text-light text-center text-lg-start p-0 m-0">Preguntas frecuentes</router-link>
                        </li>
                    </ul>
                </div>
                <!--Grid column-->
            </div>
            <!--Grid row-->
        </div>
        <!-- Grid container -->

        <!-- Copyright -->
        <div class="footer__grid w-100 text-center text-lg-start text-light py-4 last">
            Copyright ©2021 
            <router-link to="" class="text-light text-center text-lg-start p-0 m-0">La Biblioteca de Trantor. Todos los derechos reservados</router-link>
        </div>
        <!-- Copyright -->
    </footer>
</template>

<script>
    export default {
        name:'footer',
        data(){
            return{
                mail: "example@myemail.com",
                phone: "+00 000 0000"
            }
        }
    }
</script>

<style lang="scss">
    .last{
        border-top: 2px solid white;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
    }
    
    .first{
        width: 90%;
        margin-left: auto;
        margin-right: auto;
    }

    .footer__container {
        display: grid;
        grid-template-columns: .4fr .3fr 1fr .3fr .4fr;
        padding: 50px 20px 10px;

        .footer__grid {
            grid-column: 2/5;
        }
    }
</style>