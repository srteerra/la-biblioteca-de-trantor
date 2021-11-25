<template>
    <div class="main">
        <h2 class="text-secondary">Usuarios</h2>
        <div class="container table responsive users-dashboard__container">
            <div class="row my-4">
                <div class="col col-lg-3 form-group">
                    <input type="text" class="form-control border" v-model="filterField" placeholder="Buscar por nickname">
                </div>
                <div class="col form-group">
                    <label>Ocultar usuarios con datos incompletos</label>
                    <input type="checkbox" class="" v-model="filterFieldComplete">
                </div>
            </div>
            <div class="row">
                <table class="table table-borderless table-striped text-center">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nickname</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Correo electronico</th>
                            <th>Numero de telefono</th>
                            <th>Escuela</th>
                            <th>Tipo de vivienda</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-show="filterSearch(user)" v-for="(user) in users " v-bind:key="user">
                            <td>{{user.user_id}}</td>
                            <td>{{user.user_nickname}}</td>
                            <td>{{user.user_firstname}}</td>
                            <td>{{user.user_lastname}}</td>
                            <td>{{user.user_email}}</td>
                            <td>{{user.user_phone}}</td>
                            <td>{{user.user_school}}</td>
                            <td>{{user.user_addressType}}</td>
                        </tr>
                    </tbody>
                </table>   
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'users',
    data(){
        return{
            users: '',
            filterField: '',
            filterFieldComplete: 0
        }
    },
    methods: {
        filterSearch(user) {
            console.log(user.user_nickname+" "+this.filterField+" "+this.filterFieldInUse)
            var show = true

            if(user.user_nickname.toLocaleLowerCase().indexOf(this.filterField.toLocaleLowerCase()) < 0)
                show = false
            else if(user.user_firstname == null && this.filterFieldComplete)
                show = false
            
            return show
        },
    },
    beforeMount(){
      axios.get('/api/v1/users')
      .then(res=>{
          this.users=res.data
      })
    }
}
</script>

<style lang="scss">
    .users-dashboard__container{
        width: 70%;
        overflow-y: scroll;
        &::-webkit-scrollbar {
            display: none;
        }
    }
</style>