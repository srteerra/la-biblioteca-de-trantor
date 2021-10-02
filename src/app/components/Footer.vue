<template>
    <footer class="footer__container bg-dark text-center text-lg-start">
        <!-- Grid container -->
        <div class="footer__grid container p-4 first">
            <!--Grid row-->
            <div class="row">
                <!--Grid column-->
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0 lh-lg">
                    <h5 class="text-light text-uppercase fw-bold pb-3">Logo</h5>

                    <ul class="list-unstyled mb-0">
                        <li>
                            <a href="#!" class="text-light">{{ mail }}</a>
                        </li>
                        <li>
                            <a href="#!" class="text-light">{{ phone }}</a>
                        </li>
                        <!-- Section: Social media -->
                        <section class="mb-4">
                            <!-- Facebook -->
                            <a class="btn btn-link btn-floating text-light m-1" href="#!" role="button" data-mdb-ripple-color="info"><i class="fab fa-facebook-f"></i></a>

                            <!-- Twitter -->
                            <a class="btn btn-link btn-floating text-light m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i class="fab fa-twitter"></i></a>

                            <!-- Instagram -->
                            <a class="btn btn-link btn-floating text-light m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i class="fab fa-instagram"></i></a>
                        </section>
                        <!-- Section: Social media -->
                    </ul>
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0 lh-lg">
                    <h5 class="text-light fw-bold text-uppercase pb-3">Quienes somos</h5>

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
                    </ul>
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0 lh-lg">
                    <h5 class=" text-light fw-bold text-uppercase pb-3">Ayudanos</h5>

                    <ul class="list-unstyled mb-0">
                    <li>
                        <a href="#!" class="text-light">Quiero patrocinar</a>
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
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0 lh-lg">
                    <h5 class="text-light fw-bold text-uppercase pb-3">Ayuda</h5>

                    <ul class="list-unstyled">
                    <li>
                        <a href="#!" class="text-light">Contactanos</a>
                    </li>
                    <li>
                        <a href="#!" class="text-light">Reporta un bug</a>
                    </li>
                    <li>
                        <a href="#!" class="text-light">Preguntas frecuentes</a>
                    </li>
                    </ul>
                </div>
                <!--Grid column-->
            </div>
            <!--Grid row-->
        </div>
        <!-- Grid container -->

        <!-- Copyright -->
        <div class="footer__grid w-100 text-center text-light py-4 last">
            Copyright ©2021 
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