<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light w-100 py-4 px-5 position-fixed">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">
                <img src="../assets/logos/logo-icon-dark.png" alt="" id='mylogo'>
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
                        <a class="nav-link dropdown-toggle text-dark" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Quiero patrocinar</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item text-dark" href="#">Soy empresa</a></li>
                            <li><a class="dropdown-item text-dark" href="#">Donar</a></li>
                            <li><hr class="dropdown-divider text-dark"></li>
                            <li><a class="dropdown-item text-dark" href="#">Contactar</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-dark" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Quiero becar</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item text-dark" href="#">Soy escuela</a></li>
                            <li><a class="dropdown-item text-dark" href="#">Donar</a></li>
                            <li><hr class="dropdown-divider text-dark"></li>
                            <li><a class="dropdown-item text-dark" href="#">Contactar</a></li>
                        </ul>
                    </li>
                </ul>
                <div class='text-center'>
                    <router-link to="/" class="fw-bold text-dark">Ingresar</router-link>
                    <span class="me-2 text-dark">o</span>
                    <button type="button" class="btn btn-outline-dark py-3 px-4 rounded-pill">Participar</button>
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
        z-index: 3;
    }
</style>