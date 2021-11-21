<template>
    <div class="container main__content">
        <div class="row">
            <div class="col-lg-8 col-md-6 col-12 revisions__container">
                <Revisions/>
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
            revNumber:""
        }
    },
    components:{
        Revisions
    },
    methods:{
        update(){
            var data = {
                /*user_id : this.user,*/
                //revision_1: this.revNumber,
                //value: this.calification
            }
            axios.patch(`/api/v1/revisions/update/${(this.user)}/${this.revNumber}/${this.calification}`)
            ///revision_${this.revNumber}/${parseFloat(this.calification)}
        }
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
</style>