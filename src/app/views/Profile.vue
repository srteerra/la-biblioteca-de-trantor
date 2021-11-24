<template>
    <div class="profile__container container-fluid p-0 pb-5">
        <div class="profile__top row container-fluid position-relative m-0 mb-5 pb-5" id="profileBg">
            <div class="text-center position-absolute top-100 start-50 translate-middle p-0 m-0">
                <img src="../assets/img/avatar.png" class="rounded-pill" alt="" id='myAvatar'>
                <p class="text-dark fs-5 pt-3">{{ userNick }}</p>
            </div>
        </div>
        <div class="profile__tabs row container mx-auto pt-5">
            <ul class="nav nav-tabs justify-content-center" id="profileTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link text-dark active" id="home-tab" data-bs-toggle="tab" data-bs-target="#basic" type="button" role="tab" aria-controls="home" aria-selected="true">Informacion basica</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link text-dark" id="profile-tab" data-bs-toggle="tab" data-bs-target="#address" type="button" role="tab" aria-controls="profile" aria-selected="false">Mi direccion</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link text-dark" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Mi contacto</button>
                </li>
            </ul>
        </div>
        <div class="profile__forms row border container mx-auto mb-5">
            <div class="tab-content" id="profileTabContent">
                <div class="tab-pane fade show active container" id="basic" role="tabpanel" aria-labelledby="home-tab">
                    <form action="" class="row col-12 col-md-6 py-5">
                        <label
                            for="userNicknameV"
                            class="form-label">
                            Apodo
                        </label>
                        <input
                            class="form-control mb-4"
                            id="userNicknameV"
                            type="text"
                            :placeholder="userNickname"
                            aria-label="Disabled input"
                            disabled>
                        <label
                            for="userNameV"
                            class="form-label">
                            Nombre legal
                        </label>
                        <input
                            class="form-control mb-4"
                            id="userNameV"
                            type="text"
                            :placeholder="userName"
                            :v-model="userName">
                        <label
                            for="userEmailV"
                            class="form-label">
                            Correo electronico
                        </label>
                        <input
                            class="form-control mb-4"
                            id="userEmailV"
                            type="text"
                            :placeholder="userEmail"
                            aria-label="Disabled input"
                            disabled>
                        <div class="col-12 p-0">
                            <button type="submit" class="btn btn-dark rounded-pill px-5">Guardar</button>
                        </div>
                    </form>
                </div>
                <div class="tab-pane fade" id="address" role="tabpanel" aria-labelledby="profile-tab">
                    <form action="" class="row g-3 py-5 px-4">
                        <div class="col-md-6">
                            <label for="inputState" class="form-label">Tipo de vivienda</label>
                            <select
                                id="inputState"
                                name="user_addressType"
                                class="form-select"
                                :v-model="userTypeAddress">
                                    <option selected>...</option>
                                    <option>Casa</option>
                                    <option>Apartamento</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <label 
                                for="userAddressNumber"
                                class="form-label">
                                Numero de vivienda
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="userAddressNumber"
                                name="user_addressNumber"
                                :v-model="userNumberAddress">
                        </div>
                        <div class="col-12">
                            <label
                                for="userStreet1"
                                class="form-label">
                                Calle
                            </label>
                            <input
                                type="text"
                                autocomplete="address-line1"
                                class="form-control"
                                id="userAddress1"
                                name="user_street1"
                                :v-model="userStreet1"
                                placeholder="">
                        </div>
                        <div class="col-12">
                            <label
                                for="userStreet2"
                                class="form-label">
                                Calle 2
                            </label>
                            <input
                                type="text"
                                autocomplete="address-line2"
                                class="form-control"
                                id="userStreet2"
                                name="user_street2"
                                :v-model="userStreet2"
                                placeholder="">
                        </div>
                        <div class="col-md-6">
                            <label
                                for="inputCity"
                                class="form-label">
                                Ciudad
                            </label>
                            <input
                                type="city"
                                class="form-control"
                                :v-model="userCity"
                                id="inputCity"
                                name="user_city">
                        </div>
                        <div class="col-md-4">
                            <label
                                for="inputState"
                                class="form-label">
                                Estado
                            </label>
                            <select id="inputState" name="user_state" class="form-select" :v-model="userState">
                                <option selected>...</option>
                                <option>Sonora</option>
                                <option>Chihuahua</option>
                                <option>Nuevo Leon</option>
                                <option>Baja California Sur</option>
                                <option>Baja California Norte</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <label
                                for="inputZip"
                                class="form-label"
                                :v-model="userZip">
                                Zip
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="inputZip"
                                name="user_zip">
                        </div>
                        <div class="col-12">
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck">
                            <label class="form-check-label" for="gridCheck">
                                Valido que mis datos son correctos
                            </label>
                            </div>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-dark rounded-pill px-5">Guardar</button>
                        </div>
                    </form>
                </div>
                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <form action="" class="row col-12 col-md-6 py-5">
                        <div class="col-12 mb-4">
                            <label for="userNumber" class="form-label">Numero de telefono</label>
                            <input type="text" name="user_phone" autocomplete="tel" class="form-control" id="userNumber" placeholder="">
                        </div>
                        <div class="col-12 mb-4">
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck">
                            <label class="form-check-label" for="gridCheck">
                                Valido que mis datos son correctos
                            </label>
                            </div>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-dark rounded-pill px-5">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userNickname: "ImAngel",
                userName: "Angel Lopez",
                userEmail: "angellopez@example.com",
                userTypeAddress: "",
                userNumberAddress: "",
                userStreet1: "",
                userStreet2: "",
                userCity: "",
                userState: "",
                userZip: ""
            }
        },
        computed: {
            userNick() {
                return this.$store.state.user.user_nickname
            }
        },
        mounted() {
            this.$store.dispatch("updateUser", this.$route.params.id)
        }
    }
</script>

<style lang="scss">
    #myAvatar {
        width: 100px;
    }

    #profileBg {
        height: 400px;
        background-image: url('https://images.unsplash.com/photo-1526285759904-71d1170ed2ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: brown;
    }

    .profile__container {
        padding: 100px 0;
    }
</style>