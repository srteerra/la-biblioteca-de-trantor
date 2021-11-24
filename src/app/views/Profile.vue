<template>
    <div class="profile__container container-fluid p-0 pb-5">
        <div class="profile__top row container-fluid position-relative m-0 mb-5 pb-5" id="profileBg">
            <div class="text-center position-absolute top-100 start-50 translate-middle p-0 m-0">
                <!-- <img src="../assets/img/avatar-2.png" class="rounded-pill" id='myAvatar'> -->
                <img v-bind:src="'../assets/img/avatar-' + `${userAvatar}` + '.png'" class="rounded-pill" id='myAvatar'>
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
                            :placeholder="[[userNick]]"
                            aria-label="Disabled input"
                            disabled>
                        <div class="row p-0 m-0">
                            <label
                                for="userNameV"
                                class="form-label">
                                Nombre legal
                            </label>
                            <div class="col p-0 m-0 me-0 me-lg-3">
                                <input
                                    class="form-control mb-4"
                                    id="userFirstnameV"
                                    type="text"
                                    :placeholder="[[userFirstName]]"
                                    v-model="user__Firstname">
                            </div>
                            <div class="col p-0 m-0">
                                <input
                                    class="form-control mb-4"
                                    id="userLastnameV"
                                    type="text"
                                    :placeholder="[[userLastName]]" 
                                    v-model="user__Lastname">
                            </div>
                        </div>
                        <label
                            for="userEmailV"
                            class="form-label">
                            Correo electronico
                        </label>
                        <input
                            class="form-control mb-4"
                            id="userEmailV"
                            type="text"
                            :placeholder="[[userEmail]]"
                            aria-label="Disabled input"
                            disabled>
                        <div class="col-12 p-0">
                            <button type="submit" v-on:click.prevent="userFullNameUpdate" class="btn btn-dark rounded-pill px-5">Guardar</button>
                            <p v-if="userverifyUpdateFullname" class="text-success pt-3">Se han actualizado tus datos correctamente!</p>
                            <p v-if="usererrorUpdateFullname" class="text-danger pt-3">Ha ocurrido un error</p>
                        </div>
                    </form>
                </div>

                <!-- Domicilio -->
                <div class="tab-pane fade" id="address" role="tabpanel" aria-labelledby="profile-tab">
                    <form action="" class="row g-3 py-5 px-4">
                        <div class="col-md-6">
                            <label for="inputState" class="form-label">Tipo de vivienda</label>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="user_addressType" id="user_addressTypeCasa" v-model="user__Typeaddress" value="Casa"> Casa
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="user_addressType" id="user_addressTypeDept" v-model="user__Typeaddress" value="Departamento"> Departamento
                            </div>
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
                                :placeholder="[[userAddressNumber]]"
                                v-model="user__Numberaddress">
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
                                v-model="user__Street1"
                                :placeholder="[[userStreet1]]">
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
                                v-model="user__Street2"
                                :placeholder="[[userStreet2]]">
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
                                v-model="user__City"
                                id="inputCity"
                                name="user_city"
                                :placeholder="[[userCity]]">
                        </div>
                        <div class="col-md-4">
                            <label
                                for="inputState"
                                class="form-label">
                                Estado
                            </label>
                            <input id="inputState" name="user_state" class="form-control" v-model="user__State" :placeholder="[[userState]]">
                        </div>
                        <div class="col-md-2">
                            <label
                                for="inputZip"
                                class="form-label">
                                Zip
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="inputZip"
                                name="user_zip"
                                v-model="user__Zip"
                                :placeholder="[[userZip]]">
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
                            <button type="submit" v-on:click.prevent="userAddressUpdate" class="btn btn-dark rounded-pill px-5">Guardar</button>
                            <p v-if="userverifyUpdateTypeaddress" class="text-success pt-3">Se han actualizado tus datos correctamente!</p>
                            <p v-if="usererrorUpdateTypeaddress" class="text-danger pt-3">Ha ocurrido un error</p>
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
    import axios from 'axios'
    export default {
        data() {
            return {
                user__Firstname: '',
                user__Lastname: '',
                userverifyUpdateFullname: 0,
                usererrorUpdateFullname: 0,

                user__Typeaddress: 'Casa',
                user__Numberaddress: '',
                user__Street1: '',
                user__Street2: '',
                user__City: '',
                user__State: '',
                user__Zip: '',
                userverifyUpdateTypeaddress: 0,
                usererrorUpdateTypeaddress: 0,
            }
        },
        methods: {
            userFullNameUpdate() {
                try {
                    var userFullNameUpdateData = {
                        user_firstname: this.userFirstname,
                        user_lastname: this.userLastname,
                    }
                    axios.patch(`/api/v1/users/${this.$route.params.id}`, userFullNameUpdateData)
                    this.userverifyUpdateFullname = 1
                } catch (error) {
                    console.log(error)
                    this.usererrorUpdateFullname = 1
                }
            },
            userAddressUpdate() {
                try {
                    var userAddressUpdateData = {
                        user_addressType: this.user__Typeaddress,
                        user_addressNumber: this.user__Numberaddress,
                        user_street1: this.user__Street1,
                        user_street2: this.user__Street2,
                        user_city: this.user__City,
                        user_state: this.user__State,
                        user_zip: this.user__Zip,
                    }
                    axios.patch(`/api/v1/users/${this.$route.params.id}`, userAddressUpdateData)
                    this.userverifyUpdateTypeaddress = 1
                } catch (error) {
                    console.log(error)
                    this.usererrorUpdateTypeaddress = 1
                }
            }
        },
        computed: {
            userNick() {
                return this.$store.state.user.user_nickname
            },
            userEmail() {
                return this.$store.state.user.user_email
            },
            userFirstName() {
                return this.$store.state.user.user_firstname
            },
            userLastName() {
                return this.$store.state.user.user_lastname
            },
            userAddressNumber() {
                return this.$store.state.user.user_addressNumber
            },
            userStreet1() {
                return this.$store.state.user.user_street1
            },
            userStreet2() {
                return this.$store.state.user.user_street2
            },
            userTypeAddress() {
                return this.$store.state.user.user_addressType
            },
            userCity() {
                return this.$store.state.user.user_city
            },
            userState() {
                return this.$store.state.user.user_state
            },
            userZip() {
                return this.$store.state.user.user_zip
            },
            userAvatar() {
                var user__Avatar = ''

                if(this.$store.state.user.user_avatar === 1)
                    user__Avatar = '1'
                else if(this.$store.state.user.user_avatar === 2)
                    user__Avatar = '2'
                else if(this.$store.state.user.user_avatar === 3)
                    user__Avatar = '3'
                else if(this.$store.state.user.user_avatar === 3)
                    user__Avatar = '4'

                return user__Avatar
            },
        },
        mounted() {
            this.$store.dispatch("updateUser", this.$route.params.id)
        },
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