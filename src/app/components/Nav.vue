<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light py-4 px-5">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">Navbar</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Inicio</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link">Acerca</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Quiero patrocinar</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Soy empresa</a></li>
                            <li><a class="dropdown-item" href="#">Donar</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Contactar</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Quiero becar</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Soy escuela</a></li>
                            <li><a class="dropdown-item" href="#">Donar</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Contactar</a></li>
                        </ul>
                    </li>
                </ul>
                <div>
                    <router-link to="/" class="fw-bold">Ingresar</router-link>
                    <span class="me-2">o</span>
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
</style>