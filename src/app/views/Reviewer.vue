<template>
    <div class="container-fluid px-5 main__content">
        <div class="row">
            <div class="col-12">
                <div class="container p-4 border revisions__panel">
                    <h3 class="text-center mb-3">Juez</h3>
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
                                    <button v-on:click.prevent="revisionAdd" type="submit" class="btn btn-dark">Revisar</button>
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
                                    <button v-on:click.prevent="revisionDelete" type="submit" class="btn btn-dark">Elinimar</button>
                                    <p v-if="revisionVerifyDelete" class="text-success pt-3">Se ha eliminado correctamente!</p>
                                    <p v-if="revisionErrorDelete" class="text-danger pt-3">Ha ocurrido un error</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 revisions__container">
                <Revisions/>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Revisions from '../components/Revisions-Dashboard';

export default {
    name: 'judge',
    data(){
        return{
            userIdAdd: "",
            revisionIdAdd: "",
            calification: "",
            userIdDelete: "",
            revisionIdDelete: "",
            revisionVerifyAdd: 0,
            revisionErrorAdd: 0,
            revisionVerifyDelete: 0,
            revisionErrorDelete: 0
        }
    },
    components:{
        Revisions
    },
    methods:{
        revisionAdd(){
            try {
                axios.patch(`/api/v1/revisions/update/${this.userIdAdd}/${this.revisionIdAdd}/${this.calification}`)
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
    }
}
</script>

<style lang="scss">
    .main__content {
        padding: 200px 10px 100px;
        .revisions__panel{
            width: 60%;
        }
    }
</style>