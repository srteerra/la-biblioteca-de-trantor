<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light w-100 py-4 px-5 position-fixed"
  >
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
        <img
          src="../assets/img/planet-2.png"
          class="opacity-50"
          alt=""
          id="mylogo"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon text-dark"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-center">
          <li class="nav-item">
            <router-link to="/admin/users" class="nav-link text-dark"
              >Usuarios</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/admin/books" class="nav-link text-dark"
              >Libros</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/judge/revisions" class="nav-link text-dark"
              >Revisiones</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/admin/competitions" class="nav-link text-dark"
              >Competiciones</router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav mb-2 mb-lg-0 text-end">
          <li class="text-center text-dark text-lg-end my-auto py-3 py-lg-0">
            Admin
          </li>
          <li class="text-end p-lg-0">
            <div class="nav-item dropdown text-center">
              <img
                v-bind:src="'../assets/img/avatar-' + `${userAvatar}` + '.png'"
                class="btn dropdown profile__img p-0 rounded-pill"
                type="button"
                id="profileDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />

              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="adminDropdown"
              >
                <li class="p-0">
                  <button
                    @click.prevent="logout"
                    class="dropdown-item text-dark"
                  >
                    Cerrar sesion
                  </button>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "NavAdmin",
  data() {
    return {};
  },
  methods: {
      ...mapActions(['logout']),
      
  },
  computed: {
    userId() {
      return this.$store.state.user.user_id;
    },
    userNick() {
      return this.$store.state.user.user_nickname;
    },
    userAvatar() {
      return this.$store.state.user.user_avatar;
    },
    userRole() {
      return this.$store.state.user.user_role;
    },
  },
};
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
  -webkit-box-shadow: 0px 10px 79px -37px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 10px 79px -37px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 10px 79px -37px rgba(0, 0, 0, 0.75);
}

.profile__img {
  width: 50px;
  height: 50px;
}
</style>
