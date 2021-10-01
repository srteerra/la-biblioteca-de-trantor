<template>
    <footer class="footer__container bg-secondary text-center text-lg-start">
        <!-- Grid container -->
        <div class="footer__grid container p-4">
            <!--Grid row-->
            <div class="row">
                <!--Grid column-->
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-light text-uppercase fw-bold">Logo</h5>

                    <ul class="list-unstyled mb-0">
                    <li>
                        <a href="#!" class="text-light">{{ mail }}</a>
                    </li>
                    <li>
                        <a href="#!" class="text-light">{{ phone }}</a>
                    </li>

                    </ul>
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-light fw-bold text-uppercase mb-0">Quienes somos</h5>

                    <ul class="list-unstyled">
                    <li>
                        <a href="#!" class="text-light">Acerca</a>
                    </li>
                    <li>
                        <a href="#!" class="text-light">Aprende mas</a>
                    </li>
                    <li>
                        <a href="#!" class="text-light">Explorar</a>
                    </li>
                    <i class="fab fa-facebook"></i>
                    </ul>
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0 hola">
                    <h5 class=" text-light fw-bold text-uppercase">Ayudanos</h5>

                    <ul class="list-unstyled mb-0">
                    <li>
                        <a href="#!" class="text-light">Quiero patrociar</a>
                    </li>
                    <li>
                        <a href="#!" class="text-light">Donar</a>
                    </li>
                    <li>
                        <a href="#!" class="text-light">Quiero becar</a>
                    </li>
                    </ul>
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-light fw-bold text-uppercase mb-0">Ayuda</h5>

                    <ul class="list-unstyled">
                    <li>
                        <a href="#!" class="text-light">Contactanos</a>
                    </li>
                    <li>
                        <a href="#!" class="text-light">Reporta un bug</a>
                    </li>
                    <li>
                        <a href="#!" class="text-light">Q&A</a>
                    </li>
                    </ul>
                </div>
                <!--Grid column-->
            </div>
            <!--Grid row-->
        </div>
        <!-- Grid container --> 

        <!-- Copyright -->
        <div class="footer__copyright__grid text-center text-light p-3" style="background-color: rgba(0, 0, 0, 0.2);">Copyright ©2021 
            <a class="text-light" href="#">La Biblioteca de Trantor. Todos los derechos reservados</a>
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
    .footer__container {
        display: grid;
        grid-template-columns: .4fr .3fr 1fr .3fr .4fr;

        .footer__grid {
            grid-column: 2/5;
        }

        .footer__copyright__grid {
            grid-column: 1/6;
        }
    }
</style>