<template>
    <div class="profile__container container-fluid p-0 pb-5">
        <div class="profile__top row container-fluid position-relative m-0 mb-5 pb-5" id="profileBg">
            <div class="text-center position-absolute top-100 start-50 translate-middle p-0 m-0">
                <img v-bind:src="'../assets/img/avatar-' + `${userAvatar}` + '.png'" class="rounded-pill" id='myAvatar' type="button" data-bs-toggle="modal" data-bs-target="#changeAvatarModal">
                <p class="text-dark fs-4 pt-3">{{ userNick }}</p>
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
                            <button type="submit" v-on:click.prevent="userFullNameUpdate" class="btn btn-dark rounded-pill px-5" :disabled="fullNameButton">Guardar</button>
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
                            <input v-model="addressCheck" class="form-check-input" type="checkbox" id="gridCheck">
                            <label class="form-check-label" for="gridCheck">
                                Valido que mis datos son correctos
                            </label>
                            </div>
                        </div>
                        <div class="col-12">
                            <button type="submit" v-on:click.prevent="userAddressUpdate" class="btn btn-dark rounded-pill px-5" :disabled="addressButton">Guardar</button>
                            <p v-if="userverifyUpdateTypeaddress" class="text-success pt-3">Se han actualizado tus datos correctamente!</p>
                            <p v-if="usererrorUpdateTypeaddress" class="text-danger pt-3">Ha ocurrido un error</p>
                        </div>
                    </form>
                </div>
                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <form action="" class="row col-12 col-md-6 py-5">
                        <div class="col-12 mb-4">
                            <label for="userNumber" class="form-label">Numero de telefono</label>
                            <input v-model="user__phone" :placeholder="[[userPhone]]" type="text" name="user_phone" autocomplete="tel" class="form-control" id="userNumber">
                        </div>
                        <div class="col-12 mb-4">
                            <div class="form-check">
                            <input v-model="contactCheck" class="form-check-input" type="checkbox" id="gridCheck">
                            <label class="form-check-label" for="gridCheck">
                                Valido que mis datos son correctos
                            </label>
                            </div>
                        </div>
                        <div class="col-12">
                            <button v-on:click.prevent="userContactUpdate" type="submit" class="btn btn-dark rounded-pill px-5" :disabled="contactButton">Guardar</button>
                            <p v-if="contactVerify" class="text-success pt-3">Se han actualizado tus datos correctamente!</p>
                            <p v-if="contactError" class="text-danger pt-3">Ha ocurrido un error</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="subscribe__container border container p-5">
            <h2 class="text-start fw-bold">Inscribirse</h2>
            <form method="POST">
                <div class="row">
                    <div class="col-4 py-3">
                        <select v-model="compSelect" class="form-select competition__dropdown" >
                            <option class="text-secondary" value="1" selected disabled>Competencias</option>
                            <option v-for="comp in compToSubs" v-bind:key="comp"> {{ comp.competition_name }} </option>
                        </select>
                    </div>
                    <div class="col-8 py-3">
                        <button v-on:click.prevent="enroll" type="submit" class="btn btn-dark rounded-pill px-5" id="liveToastBtn" :disabled="compButton">Inscribirse</button>
                    </div>
                </div>
                <p v-if="compverifyEnrolled" class="text-success pt-3">Te has inscrito!</p>
                <p v-if="comperrorEnrolled" class="text-danger pt-3">Ha ocurrido un error</p>
            </form>
        </div>

        <!-- Change Avatar -->
        <div class="modal fade" id="changeAvatarModal" tabindex="-1" aria-labelledby="changeAvatarModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-md modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-5">
                        <div class="">
                            <h1 class="fw-bold fs-2">Cambiar avatar</h1>
                            <p class="mb-2">Eligue tu avatar preferido:</p>
                            <div class="">
                                <div class="container">
                                    <form class="row align-items-center pt-4" method="POST">
                                        <div class="col-auto form-check">
                                            <input class="form-check-input" type="radio" v-model="user__AvatarChange" value="1" id="Avatar2R" style="background-image: url('../assets/img/avatar-1.png'); width:100px; height:100px; border: 3px solid rgb(226, 226, 226);">
                                        </div>
                                        <div class="col-auto form-check">
                                            <input class="form-check-input" type="radio" v-model="user__AvatarChange" value="2" id="Avatar2R" style="background-image: url('../assets/img/avatar-2.png'); width:100px; height:100px; border: 3px solid rgb(226, 226, 226);">
                                        </div>
                                        <div class="col-auto form-check">
                                            <input class="form-check-input" type="radio" v-model="user__AvatarChange" value="3" id="Avatar3R" style="background-image: url('../assets/img/avatar-3.png'); width:100px; height:100px; border: 3px solid rgb(226, 226, 226);">
                                        </div>
                                        <div class="col-auto form-check">
                                            <input class="form-check-input" type="radio" v-model="user__AvatarChange" value="4" id="Avatar4R" style="background-image: url('../assets/img/avatar-4.png'); width:100px; height:100px; border: 3px solid rgb(226, 226, 226);">
                                        </div>
                                        <div class="container-fluid justify-content-center p-0 mt-5">
                                            <button type="submit" v-on:click.prevent="userAvatarUpdate" class="btn btn-dark rounded-pill px-5" data-bs-dismiss="modal">Guardar</button>
                                            <p v-if="userverifyUpdateAvatar" class="text-success pt-3">Se ha cambiado tu avatar correctamente!</p>
                                            <p v-if="usererrorUpdateAvatar" class="text-danger pt-3">Ha ocurrido un error</p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer"></div>
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
                error11: "",

                user__AvatarChange: 1,
                userverifyUpdateAvatar: 0,
                usererrorUpdateAvatar: 0,

                user__Typeaddress: 'Casa',
                user__Numberaddress: '',
                user__Street1: '',
                user__Street2: '',
                user__City: '',
                user__State: '',
                user__Zip: '',
                addressCheck: false,
                userverifyUpdateTypeaddress: 0,
                usererrorUpdateTypeaddress: 0,

                user__phone:'',
                contactCheck:false,
                contactVerify:0,
                contactError:0,

                compSelect: 1
            }
        },
        methods: {
            enroll() {
                try {
                    axios.post(`api/v1/revisions/${this.$route.params.id}/${this.compSelect}`)
                    .then(res => {
                        this.error11 = res.error
                        console.log(res)
                        console.log(error11)
                    })
                } catch (error) {
                    console.log(error)
                }
            },
            userFullNameUpdate() {
                try {
                    var userFullNameUpdateData = {
                        user_firstname: this.user__Firstname,
                        user_lastname: this.user__Lastname,
                    }
                    axios.patch(`/api/v1/users/${this.$route.params.id}`, userFullNameUpdateData)
                    this.userverifyUpdateFullname = 1
                } catch (error) {
                    this.usererrorUpdateFullname = 1
                }
            },
            userAvatarUpdate() {
                try {
                    var userAvatarUpdateData = {
                        user_avatar: this.user__AvatarChange,
                    }
                    this.$store.state.user.user_avatar = this.user__AvatarChange
                    axios.patch(`/api/v1/users/${this.$route.params.id}`, userAvatarUpdateData)
                    this.userverifyUpdateAvatar = 1
                } catch (error) {
                    console.log(error)
                    this.usererrorUpdateAvatar = 1
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
            },
            userContactUpdate(){
                try {
                    var userContactUpdateData = {
                        user_phone: this.user__phone
                    }
                    axios.patch(`/api/v1/users/${this.$route.params.id}`, userContactUpdateData)
                    this.contactVerify = 1
                } catch (error) {
                    console.log(error)
                    this.contactError = 1
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
                return this.$store.state.user.user_avatar
            },
            userPhone() {
                return this.$store.state.user.user_phone
            },
            fullNameButton(){
                if (this.user__Firstname == "" | this.user__Lastname == "")
                    return true
                else
                    return false
            },
            addressButton(){
                if (this.user__Numberaddress == "" | this.user__Street1 == "" | this.user__Street2 == "" | this.user__City == "" | this.user__State == "" | this.user__Zip == "" | this.addressCheck == false)
                    return true
                else
                    return false
            },
            contactButton(){
                if (this.user__phone == "" | this.contactCheck == false)
                    return true
                else
                    return false
            },
            compButton(){
                if (this.compSelect == 1)
                    return true
                else
                    return false
            }
        },
        mounted() {
            

        },
        
        beforeMount(){
            axios.get('/api/v1/competitions/compTosubs')
            .then(res=>{
                this.compToSubs=res.data
            })

            var toastTrigger = document.getElementById('liveToastBtn')
            var toastLiveExample = document.getElementById('liveToast')
            if (toastTrigger) {
                toastTrigger.addEventListener('click', function () {
                    var toast = new bootstrap.Toast(toastLiveExample)

                    toast.show()
                })
            }
        },
    }
</script>

<style lang="scss">
    #myAvatar {
        width: 100px;
    }

    #profileBg {
        height: 400px;
        background-color: rgb(70, 70, 70);
    }

    .profile__container {
        padding: 100px 0;
    }

    .competition_dropdown{
        width: 60%;
    }
</style>