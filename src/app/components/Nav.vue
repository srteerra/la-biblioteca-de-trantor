<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light w-100 py-4 px-5 position-fixed">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">
                <img src="../assets/img/planet-2.png" class="opacity-50" alt="" id='mylogo'>
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon text-dark"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link text-dark">Inicio</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link text-dark">Acerca</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-dark" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Soy empresa</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li class="p-0"><router-link to="/sponsorship" class="dropdown-item text-dark">Quiero patrocinar</router-link></li>
                            <li class="p-0"><hr class="dropdown-divider text-dark"></li>
                            <li class="p-0"><router-link to="/contact-us" class="dropdown-item text-dark">Contactar</router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-dark" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Soy escuela</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li class="p-0"><router-link to="/scholarship" class="dropdown-item text-dark">Quiero becar</router-link></li>
                            <li class="p-0"><hr class="dropdown-divider text-dark"></li>
                            <li class="p-0"><router-link to="/contact-us" class="dropdown-item text-dark">Contactar</router-link></li>
                        </ul>
                    </li>
                </ul>
                <div class='text-center'>
                    <button type="button" data-bs-toggle="modal" data-bs-target="#loginModal" class="fw-bold text-dark bg-transparent border-0">Ingresar</button>
                    <span class="me-2 text-dark">o</span>
                    <button type="button" data-bs-toggle="modal" data-bs-target="#participateModal" class="btn btn-outline-dark py-3 px-4 rounded-pill">Participar</button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name:"Nav"
}
</script>

<style lang="scss">
    a {
        padding-right: 10px;
    }

    li {
        padding-right: 20px;
    }

    #mylogo {
        max-width: 80px;
    }

    nav {
        z-index: 50;
        -webkit-box-shadow: 0px 10px 79px -37px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 10px 79px -37px rgba(0,0,0,0.75);
        box-shadow: 0px 10px 79px -37px rgba(0,0,0,0.75);
    }
</style>