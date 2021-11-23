<template>
    <div class="main__content container-fluid px-5">
        <div class="row">
            <div class="col">
                <div class="container-fluid">
                    <div class="row mb-5">
                        <div class="col-12 col-lg-8">
                            <h2 class="text-secondary">Competencia en curso: 
                                <p v-for="currC in currentComp1" :key="currC" class="text-success">{{ currC.competition_name }}</p>
                            </h2>
                            <form method="POST">
                                <div class="row pt-2">
                                    <div class="col-3">
                                        <select v-model="currComp" class="form-select" >
                                            <option value="1" selected>Cambia la competencia en curso...</option>
                                            <option v-for="curr in currentComp1" v-bind:key="curr"> {{ curr.competition_name }} </option>
                                        </select>
                                    </div>
                                    <div class="col-3">
                                        <button class="btn btn-dark" type="submit">Guardar</button>
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
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-show="filterSearch(comp)" v-for="comp in competitions1" v-bind:key="comp">
                                        <td>{{comp.competition_id}}</td>
                                        <td>{{comp.competition_name}}</td>
                                        <td>{{comp.competition_date.substring(0,10)}}</td>
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
                                            <div class="text-center d-grid">
                                                <button v-on:click.prevent="deleteComp" type="submit" class="btn btn-dark">Eliminar</button>
                                                <p v-if="compverifyDelete" class="text-success pt-3">Se ha eliminado la competencia correctamente!</p>
                                                <p v-if="comperrorDelete" class="text-danger pt-3">Ha ocurrido un error</p>
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
                compverifyAdd: "",
                comperrorAdd: "",

                compIdDelete: "",
                compverifyDelete: "",
                comperrorDelete: "",

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
</style>