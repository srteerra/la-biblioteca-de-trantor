<template>
    <div class="main__content container-fluid px-5">
        <div class="row">
            <div class="col">
                <div class="container-fluid">
                    <div class="row mb-5">
                        <div class="col-12 col-lg-8">
                            <h2 class="text-secondary">Competencia en curso: 
                                <span class="text-success">{{ currentComp1[0].competition_name }}</span>
                            </h2>
                            <form method="POST">
                                <div class="row pt-3">
                                    <div class="col-4">
                                        <select v-model="currComp" class="form-select" >
                                            <option value="1" selected disabled>Cambia la competencia en curso...</option>
                                            <option v-for="compp in competitions1" v-bind:key="compp"> {{ compp.competition_name }} </option>
                                        </select>
                                    </div>
                                    <div class="col-8">
                                        <button v-on:click.prevent="changeComp" type="submit" class="btn btn-dark me-3">Guardar</button>
                                        <span v-if="compverifyChange" class="text-success pt-3">Se ha cambiado de competencia!</span>
                                        <span v-if="comperrorChange" class="text-danger pt-3">Ha ocurrido un error</span>
                                        <span v-if="comperrorChange2" class="text-danger pt-3">Por favor eligue una competencia</span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-lg-8">
                            <h2 class="text-secondary">Competiciones</h2>
                            <p>*Recuerda que debes habilitar el periodo de competencia</p>
                        </div>
                    </div>
                    <div class="row my-4">
                        <div class="col col-lg-3 form-group">
                            <input type="text" class="form-control" v-model="filterField" placeholder="Buscar por nombre">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-lg-8">
                            <table class="table table-borderless table-striped text-center">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nombre</th>
                                        <th>Fecha de inicio</th>
                                        <th>Estado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-show="filterSearch(comp)" v-for="comp in competitions1" v-bind:key="comp">
                                        <td>{{comp.competition_id}}</td>
                                        <td>{{comp.competition_name}}</td>
                                        <td>{{comp.competition_date.substring(0,10)}}</td>
                                        <td>{{comp.competition_status}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="col-12 col-lg-4">
                            <!-- Competitions CRUD Panel -->
                            <div class="p-5 border">
                                <h3 class="text-center mb-3">Administrar competencias</h3>
                                <ul class="nav nav-pills my-4 d-flex justify-content-center" id="pills-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="pills-compAdd-tab" data-bs-toggle="pill" data-bs-target="#pills-compAdd" type="button" role="tab" aria-controls="pills-compAdd" aria-selected="true">Agregar</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="pills-compDelete-tab" data-bs-toggle="pill" data-bs-target="#pills-compDelete" type="button" role="tab" aria-controls="pills-compDelete" aria-selected="false">Eliminar</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="pills-compActivate-tab" data-bs-toggle="pill" data-bs-target="#pills-compActivate" type="button" role="tab" aria-controls="pills-compActivate" aria-selected="false">Convocar</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="pills-compFinish-tab" data-bs-toggle="pill" data-bs-target="#pills-compFinish" type="button" role="tab" aria-controls="pills-compFinish" aria-selected="false">Finalizar</button>
                                    </li>
                                </ul>

                                <div class="tab-content" id="pills-tabContent">
                                    <div class="tab-pane fade show active" id="pills-compAdd" role="tabpanel" aria-labelledby="pills-compAdd-tab">
                                        <form method="POST">
                                            <label class="form-label fw-bold">Nombre</label>
                                            <input type="text" v-model="compNameAdd" class="form-control mb-3" name="" required>
                                            <label class="form-label fw-bold">Fecha de inicio</label>
                                            <input type="date" v-model="compDateAdd" class="form-control mb-3" name="" required>
                                            <div class="text-center d-grid">
                                                <button v-on:click.prevent="addComp" type="submit" class="btn btn-dark">Agregar</button>
                                                <p v-if="compverifyAdd" class="text-success pt-3">Se ha agregado una nueva competencia!</p>
                                                <p v-if="comperrorAdd" class="text-danger pt-3">Ha ocurrido un error</p>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="tab-pane fade" id="pills-compDelete" role="tabpanel" aria-labelledby="pills-compDelete-tab">
                                        <form method="POST">
                                            <label class="form-label fw-bold">ID de la competencia</label>
                                            <input type="text" v-model="compIdDelete" class="form-control mb-3" name="">
                                            <div class="text-center d-grid mb-2">
                                                <button v-on:click.prevent="deleteComp" type="submit" class="btn btn-dark">Eliminar</button>
                                                <p v-if="compverifyDelete" class="text-success pt-3">Se ha eliminado la competencia correctamente!</p>
                                                <p v-if="comperrorDelete" class="text-danger pt-3">Ha ocurrido un error</p>
                                            </div>
                                            <div>
                                                <button class="btn btn-danger text-white py-3 px-2 text-center danger" disabled>
                                                    <span>No se pueden eliminar competencias con revisiones existentes.</span><br>
                                                    <span class="pt-2">Aunque el mensaje sea correcto.</span>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="tab-pane fade" id="pills-compActivate" role="tabpanel" aria-labelledby="pills-compActivate-tab">
                                        <form method="POST">
                                            <label class="form-label fw-bold">ID de la competencia</label>
                                            <input type="text" v-model="compIdActivate" class="form-control mb-3" name="">
                                            <div class="text-center d-grid">
                                                <button v-on:click.prevent="activateComp" type="submit" class="btn btn-dark">Convocar</button>
                                                <p v-if="compverifyActivate" class="text-success pt-3">Se ha actualizado la competencia correctamente!</p>
                                                <p v-if="comperrorActivate" class="text-danger pt-3">Ha ocurrido un error</p>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="tab-pane fade" id="pills-compFinish" role="tabpanel" aria-labelledby="pills-compFinish-tab">
                                        <form method="POST">
                                            <label class="form-label fw-bold">ID de la competencia</label>
                                            <input type="text" v-model="compIdFinish" class="form-control mb-3" name="">
                                            <div class="text-center d-grid">
                                                <button v-on:click.prevent="finishComp" type="submit" class="btn btn-dark">Finalizar</button>
                                                <p v-if="compverifyFinish" class="text-success pt-3">Se ha finalizado la competencia correctamente!</p>
                                                <p v-if="comperrorFinish" class="text-danger pt-3">Ha ocurrido un error</p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
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
                competitions1: "",
                currentComp1: "",

                currComp: 1,

                compNameAdd: "",
                compDateAdd: "",
                compverifyAdd: 0,
                comperrorAdd: 0,

                compNameCurrOpen: "",
                compverifyChange: 0,
                comperrorChange: 0,
                comperrorChange2: 0,

                compIdDelete: "",
                compverifyDelete: 0,
                comperrorDelete: 0,

                compIdActivate: "",
                compverifyActivate: 0,
                comperrorActivate: 0,
                
                compIdFinish: "",
                compverifyFinish: 0,
                comperrorFinish: 0,

                filterField: '',
            }
        },
        methods: {
            filterSearch(comp) {
                var show = true

                if(comp.competition_name.toLocaleLowerCase().indexOf(this.filterField.toLocaleLowerCase()) < 0)
                    show = false
                
                return show
            },
            addComp() {
                try {
                    var dataCompAdd = {
                        competition_name: this.compNameAdd,
                        competition_date: this.compDateAdd,
                    }
                    axios.post('/api/v1/competitions', dataCompAdd)
                    this.compverifyAdd = 1
                } catch (error) {
                    console.log(error)
                    this.comperrorAdd = 1
                }
            },
            deleteComp() {
                try {
                    axios.delete(`/api/v1/competitions/${this.compIdDelete}`)
                    this.compverifyDelete = 1
                } catch (error) {
                    console.log(error)
                    this.comperrorDelete = 1
                }
            },
            activateComp() {
                try {
                    axios.patch(`/api/v1/competitions/${this.compIdActivate}`)
                    this.compverifyActivate = 1
                } catch (error) {
                    this.comperrorActivate = 1
                }
            },
            finishComp() {
                try {
                    axios.patch(`/api/v1/competitions/${this.compIdFinish}/finish`)
                    this.compverifyFinish = 1
                } catch (error) {
                    this.comperrorFinish = 1
                }
            },
            changeComp() {
                try {
                    if(this.currComp === 1) {
                        this.comperrorChange2 = 1
                    }
                    else {
                        axios.patch(`/api/v1/currentCompetition/${this.currComp}`)
                        this.compverifyChange = 1
                        this.comperrorChange2 = 0
                    }
                } catch (error) {
                    this.comperrorChange = 1
                }
            }
        },
        beforeMount() {
            axios.get('/api/v1/competitions')
            .then(res=>{
                this.competitions1=res.data
            })
            axios.get('/api/v1/currentCompetition')
            .then(res=>{
                this.currentComp1=res.data
            })
        },
    }
</script>

<style lang="scss">
    .main__content {
        padding: 200px 10px 100px;
    }
    .danger{
        font-size: 12px;
    }
</style>