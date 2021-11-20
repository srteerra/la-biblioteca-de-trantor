<template>
    <div class="container main__content">
        <div class="row">
            <div class="col-lg-8 col-md-6 col-12 revisions__container">
                <Revisions/>
            </div>
            <div class="col-lg-4 col-md-6 col-12">
                <div class="review-form__container">
                    <form action="" method="">
                        <h2 class="text-center">Revisar</h2>
                        <label class="form-label pb-1 fw-bold">Usuario</label>
                        <input type="text" class="form-control rounded-pill" name="">
                        <label class="form-label pb-1 fw-bold">Numero de revision</label>
                        <select class="form-select list__container">
                            <option selected></option>
                            <option>Reivision 1</option>
                            <option>Reivision 2</option>
                            <option>Reivision 3</option>
                            <option>Reivision 4</option>
                            <option>Reivision 5</option>
                            <option>Reivision 6</option>
                            <option>Reivision 7</option>
                            <option>Reivision 8</option>
                            <option>Reivision 9</option>
                            <option>Reivision 10</option>
                            <option>Reivision 11</option>
                            <option>Reivision 12</option>
                        </select>
                        <label class="form-label pb-1 fw-bold">Calificacion</label>
                        <input type="text" class="form-control rounded-pill" name="">
                        <div class="text-center">
                            <button type="submit" class="rounded-pill btn-dark">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Revisions from '../components/Revisions-Dashboard';

export default {
    name: 'reviewer',
    data(){

    },
    components:{
        Revisions
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