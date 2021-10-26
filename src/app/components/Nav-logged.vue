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
                    <li class="nav-item">
                        <router-link to="/upload" class="nav-link text-dark">Calificar</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link text-dark">Informacion</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav mb-2 mb-lg-0 text-end">
                    <li class='text-center text-dark text-lg-end my-auto py-3 py-lg-0'>Angel Lopez<span class="fw-bold ps-2 text-dark">#6616</span></li>
                    <li class='text-end p-lg-0'>
                        <div class="nav-item dropdown text-center">
                            <button class="btn dropdown profile__img rounded-pill" type="button" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false"></button>

                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                                <li class="p-0"><router-link to="/" class="dropdown-item text-dark">Ver perfil</router-link></li>
                                <li class="p-0"><router-link to="/contact-us" class="dropdown-item text-dark">Contacto</router-link></li>
                                <li class="p-0"><hr class="dropdown-divider text-dark"></li>
                                <li class="p-0"><router-link to="/" class="dropdown-item text-dark">Cerrar sesion</router-link></li>
                            </ul>
                        </div>
                    </li>
                </ul>
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
        -webkit-box-shadow: 0px 10px 79px -37px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 10px 79px -37px rgba(0,0,0,0.75);
        box-shadow: 0px 10px 79px -37px rgba(0,0,0,0.75);
    }

    .profile__img {
        width: 50px;
        height: 50px;
        background-image: url('../assets/img/avatar.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
</style>