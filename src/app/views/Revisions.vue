<template>
    <div class="container-fluid px-5 main__content">
        <div class="row">
            <div class="col-12">
                <div class="">
                    <div class="container-fluid table_responsive revisions-dashboard__container">
                        <h2 class="text-secondary">Revisiones</h2>
                        <div class="row my-4">
                            <div class="col col-lg-3 form-group">
                                <input type="text" class="form-control" v-model="filterField" placeholder="Buscar por nombre">
                            </div>
                            <div class="col col-lg-3 form-group">
                                <select v-model="selectedComp" class="form-select" >
                                    <option v-for="competition in competitions1" v-bind:key="competition"> {{ competition.competition_name }} </option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <table class="table table-responsive table-borderless table-striped text-center">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nickname</th>
                                        <th>Revision 1</th>
                                        <th>Revision 2</th>
                                        <th>Revision 3</th>
                                        <th>Revision 4</th>
                                        <th>Revision 5</th>
                                        <th>Revision 6</th>
                                        <th>Revision 7</th>
                                        <th>Revision 8</th>
                                        <th>Revision 9</th>
                                        <th>Revision 10</th>
                                        <th>Revision 11</th>
                                        <th>Revision 12</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-show="filterSearch(revision)" v-for="revision in revisions1" v-bind:key="revision">
                                        <td>{{revision.user_id}}</td>
                                        <td>{{revision.user_nickname}}</td>
                                        <td>{{revision.revision_1}}</td>
                                        <td>{{revision.revision_2}}</td>
                                        <td>{{revision.revision_3}}</td>
                                        <td>{{revision.revision_4}}</td>
                                        <td>{{revision.revision_5}}</td>
                                        <td>{{revision.revision_6}}</td>
                                        <td>{{revision.revision_7}}</td>
                                        <td>{{revision.revision_8}}</td>
                                        <td>{{revision.revision_9}}</td>
                                        <td>{{revision.revision_10}}</td>
                                        <td>{{revision.revision_11}}</td>
                                        <td>{{revision.revision_12}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> 
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="container w-100 w-md-50 p-4 my-5 border revisions__panel">
                    <h3 class="text-center mb-3">Calificar</h3>
                    <ul class="nav nav-pills my-4 d-flex justify-content-center" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-revisionAdd-tab" data-bs-toggle="pill" data-bs-target="#pills-revisionAdd" type="button" role="tab" aria-controls="pills-revisionAdd" aria-selected="true">Revisar</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-revisionDelete-tab" data-bs-toggle="pill" data-bs-target="#pills-revisionDelete" type="button" role="tab" aria-controls="pills-revisionDelete" aria-selected="false">Corregir</button>
                        </li>
                    </ul>
                    <!-- Revision Add panel -->
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-revisionAdd" role="tabpanel" aria-labelledby="pills-revisionAdd-tab">
                            <form method="POST">
                                <!-- User Id Add -->
                                <label class="form-label fw-bold">ID del usuario</label>
                                <input type="text" v-model="userIdAdd" class="form-control mb-3" name="">
                                <!-- Revision number Add  select -->
                                <label class="form-label fw-bold">Numero de revision</label>
                                <select class="form-select list__container" v-model="revisionIdAdd">
                                    <option selected></option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                </select>
                                <!-- Calification Add -->
                                <label class="form-label fw-bold">Calificacion</label>
                                <input type="text" class="form-control mb-3" v-model="calification">
                                <div class="text-center d-grid">
                                    <button v-on:click.prevent="revisionAdd" type="submit" class="btn btn-dark" :disabled="califButton">Revisar</button>
                                    <p v-if="revisionVerifyAdd" class="text-success pt-3">Se ha calificado la revision {{ userIdAdd }}!</p>
                                    <p v-if="revisionErrorAdd" class="text-danger pt-3">Ha ocurrido un error</p>
                                </div>
                            </form>
                        </div>
                        <!-- Revision Delete panel -->
                        <div class="tab-pane fade" id="pills-revisionDelete" role="tabpanel" aria-labelledby="pills-revisionDelete-tab">
                            <form method="POST">
                                <!-- User Id Delete -->
                                <label class="form-label fw-bold">ID del usuario</label>
                                <input type="text" v-model="userIdDelete" class="form-control mb-3" name="">
                                <!-- Revision number Delete select -->
                                <label class="form-label fw-bold">Numero de revision</label>
                                <select class="form-select list__container" v-model="revisionIdDelete">
                                    <option selected></option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                </select>
                                <div class="text-center d-grid pt-3">
                                    <button v-on:click.prevent="revisionDelete" type="submit" class="btn btn-dark" :disabled="deleteCalifButton">Elinimar</button>
                                    <p v-if="revisionVerifyDelete" class="text-success pt-3">Se ha eliminado correctamente!</p>
                                    <p v-if="revisionErrorDelete" class="text-danger pt-3">Ha ocurrido un error</p>
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

export default {
    name: 'judge',
    data(){
        return{
            revisions1: "",
            competitions1: "",

            filterField: '',
            selectedComp: 'Caballeria',
            
            userIdAdd: "",
            revisionIdAdd: "",
            calification: "",
            revisionVerifyAdd: 0,
            revisionErrorAdd: 0,

            userIdDelete: "",
            revisionIdDelete: "",
            revisionVerifyDelete: 0,
            revisionErrorDelete: 0
        }
    },
    methods: {
        filterSearch(revision) {
            var show = true

            if(revision.user_nickname.toLocaleLowerCase().indexOf(this.filterField.toLocaleLowerCase()) < 0)
                show = false
            if(revision.competition_name !== this.selectedComp)
                show = false
            
            return show
        },
        revisionAdd(){
            try {
                axios.patch(`/api/v1/revisions/update/${this.userIdAdd}/${this.revisionIdAdd}/${this.calification}/${this.selectedComp}`)
                this.revisionVerifyAdd = 1
            } catch (error) {
                this.revisionErrorAdd = 1
            }
        },
        revisionDelete(){
            try {
                axios.patch(`/api/v1/revisions/delete/${this.userIdDelete}/${this.revisionIdDelete}`)    
                 this.revisionVerifyDelete = 1
            } catch (error) {
                 this.revisionErrorDelete = 1
            }
        }
    },
    computed:{
        califButton(){
            if (this.userIdAdd == "" | this.revisionAdd == "" | this.calification == "")
                return true
            else
                return false
        },
        deleteCalifButton(){
            if (this.userIdDelete == "" | this.revisionIdDelete == "")
                return true
            else
                return false
        }
    },
    beforeMount(){
        axios.get('/api/v1/revisions')
        .then(res=>{
            this.revisions1=res.data
        })
        axios.get('/api/v1/competitions')
        .then(res=>{
            this.competitions1=res.data
        })
    }
}
</script>

<style lang="scss">
    .main__content {
        padding: 200px 10px 100px;
    }
</style>