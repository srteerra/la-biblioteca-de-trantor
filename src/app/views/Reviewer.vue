<template>
    <div class="container main__content">
        <div class="row">
            <div class="col-lg-8 col-md-6 col-12 revisions__container">
                <div class="main">
                    <h2 class="text-secondary">Revisiones</h2>
                    <div class="container-fluid table_responsive revisions-dashboard__container">
                        <table class="table table-borderless table-striped text-center">
                            <thead>
                                <tr>
                                    <th>Usuario</th>
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
                                <tr v-for="revision in revisions1" v-bind:key="revision">
                                    <td>{{revision.user_id}}</td>
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
            <div class="col-lg-4 col-md-6 col-12">
                <div class="review-form__container">
                    <form method="POST">
                        <h2 class="text-center">Revisar</h2>
                        <label class="form-label pb-1 fw-bold">Usuario</label>
                        <input type="text" class="form-control rounded-pill" v-model="user">
                        <label class="form-label pb-1 fw-bold">Numero de revision</label>
                        <select class="form-select list__container" v-model="revNumber">
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
                        <label class="form-label pb-1 fw-bold">Calificacion</label>
                        <input type="text" class="form-control rounded-pill" v-model="calification">
                        <div class="text-center">
                            <button v-on:click.prevent="update" type="submit" class="rounded-pill btn-dark">Enviar</button>
                        </div>
                    </form>
                </div>
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
            user:"",
            calification:"",
            revNumber:"",

            revisions1:''
        }
    },
    components:{
        Revisions
    },
    methods:{
        update() {
            var data = {
                revision_1: this.calification,
                user: this.user
            }

            if(this.revNumber == 1)
                axios.patch(`/api/v1/revisions/update/revision_1`, data)
            else if(this.revNumber == 2)
                axios.patch(`/api/v1/revisions/update/revision_2`, data)
        }
    },
    beforeMount(){
        axios.get('/api/v1/revisions')
        .then(res=>{
            this.revisions1=res.data
      })
    }
}
</script>

<style lang="scss">
    .main__content {
        padding: 200px 10px 100px;
        .revisions__container{
            margin-bottom: 30px;
        }
        .review-form__container{
            border: 1px solid black;
            height: 370px;
            border-radius: 25px;
            padding: 10px;
            .list__container{
                width: 60%;
            }
            button{
                padding: 10px;
                width: 60%;
                margin: 20px;
            }
        }
    }
    .revisions-dashboard__container{
        max-height: 300px;
        overflow-y: scroll;
        &::-webkit-scrollbar {
            display: none;
        }
    }
</style>