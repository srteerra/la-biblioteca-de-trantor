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
                            <button class="nav-link" id="pills-userEdit-tab" data-bs-toggle="pill" data-bs-target="#pills-userEdit" type="button" role="tab" aria-controls="pills-userEdit" aria-selected="false">Editar</button>
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
                                        <input class="form-check-input" type="radio" name="flexRadioRole" id="flexRadioAdmin" v-model="userRoleAdd" value="Admin"> Admin
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioRole" id="flexRadioJudge" v-model="userRoleAdd" value="Judge"> Juez
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioRole" id="flexRadioUser" v-model="userRoleAdd" value="User"> Usuario
                                    </div>
                                </div>
                                <div class="text-center d-grid">
                                    <button v-on:click.prevent="addUser" type="submit" class="btn btn-dark">Agregar</button>
                                    <p v-if="userverifyAdd" class="text-success pt-3">Se ha agregado un nuevo {{ RoleSelected }}!</p>
                                    <p v-if="usererrorAdd" class="text-danger pt-3">Ha ocurrido un error</p>
                                </div>
                            </form>
                        </div>
                        <div class="tab-pane fade" id="pills-userEdit" role="tabpanel" aria-labelledby="pills-userEdit-tab">
                            <form method="POST">
                                <label class="form-label fw-bold">ID del libro</label>
                                <input type="text" v-model="bookidEdit" class="form-control mb-3" name="">
                                <label class="form-label fw-bold">Titulo del libro</label>
                                <input type="text" v-model="booktitleEdit" class="form-control mb-3" name="">
                                <label class="form-label fw-bold">Autor del libro</label>
                                <input type="text" v-model="bookauthorEdit" class="form-control mb-3" name="">
                                <label class="form-label fw-bold">Categoria del libro</label>
                                <input type="text" v-model="bookcategoryEdit" class="form-control mb-3" name="">
                                <div class="text-center d-grid">
                                    <button v-on:click.prevent="editBook" type="submit" class="btn btn-dark">Editar</button>
                                    <p v-if="bookverifyEdit" class="text-success pt-3">Se ha editado correctamente!</p>
                                    <p v-if="bookerrorEdit" class="text-danger pt-3">Ha ocurrido un error</p>
                                </div>
                            </form>
                        </div>
                        <div class="tab-pane fade" id="pills-userDelete" role="tabpanel" aria-labelledby="pills-userDelete-tab">
                            <form method="POST">
                                <label class="form-label fw-bold">ID del libro</label>
                                <input type="text" v-model="bookidDelete" class="form-control mb-3" name="">
                                <div class="text-center d-grid">
                                    <button v-on:click.prevent="deleteBook" type="submit" class="btn btn-dark">Eliminar</button>
                                    <p v-if="bookverifyDelete" class="text-success pt-3">Se ha eliminado correctamente!</p>
                                    <p v-if="bookerrorDelete" class="text-danger pt-3">Ha ocurrido un error</p>
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
                userRoleAdd: "Admin"
            }
        },
        computed: {
            RoleSelected() {
                if(this.userRoleAdd === "Admin")
                    return "Administrador"
                else if(this.userRoleAdd === "Judge")
                    return "Juez"
                else if(this.userRoleAdd === "User")
                    return "Usuario"
            }
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