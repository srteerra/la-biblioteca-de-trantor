<template>
    <div class="container main__container">
        <Users/>
        <div class="container">
            <div class="row">
                <!-- Users CRUD Panel -->
                <div class="p-5 border">
                    <h3 class="text-center mb-3">Administrar usuarios</h3>
                    <ul class="nav nav-pills my-4 d-flex justify-content-center" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-userAdd-tab" data-bs-toggle="pill" data-bs-target="#pills-userAdd" type="button" role="tab" aria-controls="pills-userAdd" aria-selected="true">Agregar</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-userDelete-tab" data-bs-toggle="pill" data-bs-target="#pills-userDelete" type="button" role="tab" aria-controls="pills-userDelete" aria-selected="false">Eliminar</button>
                        </li>
                    </ul>

                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-userAdd" role="tabpanel" aria-labelledby="pills-userAdd-tab">
                            <form method="POST">
                                <label class="form-label fw-bold">Nickname</label>
                                <input type="text" v-model="userNicknameAdd" class="form-control mb-3" name="">
                                <label class="form-label fw-bold">Email</label>
                                <input type="text" v-model="userEmailAdd" class="form-control mb-3" name="">
                                <label class="form-label fw-bold">Contraseña</label>
                                <input type="text" v-model="userPasswordAdd" class="form-control mb-3" name="">
                                <div class="py-4">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioRole" id="flexRadioAdmin" v-model="userRoleAdd" value="admin"> Admin
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioRole" id="flexRadioJudge" v-model="userRoleAdd" value="judge"> Juez
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioRole" id="flexRadioUser" v-model="userRoleAdd" value="user"> Usuario
                                    </div>
                                </div>
                                <div class="text-center d-grid">
                                    <button v-on:click.prevent="addUser" type="submit" class="btn btn-dark">Agregar</button>
                                    <p v-if="userverifyAdd" class="text-success pt-3">Se ha agregado un nuevo {{ RoleSelected }}!</p>
                                    <p v-if="usererrorAdd" class="text-danger pt-3">Ha ocurrido un error</p>
                                </div>
                            </form>
                        </div>
                        <div class="tab-pane fade" id="pills-userDelete" role="tabpanel" aria-labelledby="pills-userDelete-tab">
                            <form method="POST">
                                <label class="form-label fw-bold">ID del usuario</label>
                                <input type="text" v-model="userIdDelete" class="form-control mb-3" name="">
                                <div class="text-center d-grid">
                                    <button v-on:click.prevent="deleteUser" type="submit" class="btn btn-dark">Eliminar</button>
                                    <p v-if="userverifyDelete" class="text-success pt-3">Se ha eliminado al usuario correctamente!</p>
                                    <p v-if="usererrorDelete" class="text-danger pt-3">Ha ocurrido un error</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import Users from '../components/Users-Dashboard';
    export default {
        name: 'users',
        data(){
            return{
                userNicknameAdd: '',
                userEmailAdd: '',
                userPasswordAdd: '',
                userverifyAdd: 0,
                usererrorAdd: 0,
                userRoleAdd: "admin",

                userIdDelete: '',
                userverifyDelete: 0,
                usererrorDelete: 0,
            }
        },
        computed: {
            RoleSelected() {
                if(this.userRoleAdd === "admin")
                    return "Administrador"
                else if(this.userRoleAdd === "judge")
                    return "Juez"
                else if(this.userRoleAdd === "user")
                    return "Usuario"
            }
        },
        methods: {
            addUser() {
                try {
                    var dataUserAdd = {
                        user_nickname: this.userNicknameAdd,
                        user_email: this.userEmailAdd,
                        user_password: this.userPasswordAdd,
                        user_role: this.userRoleAdd
                    }
                    axios.post('/api/v1/users', dataUserAdd)
                    this.userverifyAdd = 1
                } catch (error) {
                    console.log(error)
                    this.usererrorAdd = 1
                }
            },
            deleteUser() {
                try {
                    axios.delete(`/api/v1/users/${this.userIdDelete}`)
                    this.userverifyDelete = 1
                } catch (error) {
                    console.log(error)
                    this.usererrorDelete = 1
                }
            },
        },
        components: {
            Users
        }
    };
</script>

<style lang="scss">
    .main__container {
        padding: 200px 10px 100px;
    }
</style>