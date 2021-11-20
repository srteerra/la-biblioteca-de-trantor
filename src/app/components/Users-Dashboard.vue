<template>
    <div class="main">
        <h2 class="text-secondary">Usuarios</h2>
        <div class="container table responsive users-dashboard__container">
            <table class="table table-borderless table-striped text-center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nickname</th>
                        <th>Nombre completo</th>
                        <th>Correo electronico</th>
                        <th>Numero de telefono</th>
                        <th>Escuela</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user) in users1" v-bind:key="user">
                        <td>{{user.user_id}}</td>
                        <td>{{user.user_nickname}}</td>
                        <td>{{user.user_firstname}} {{user.user_lastname}}</td>
                        <td>{{user.user_email}}</td>
                        <td>{{user.user_phone}}</td>
                        <td>{{user.user_school}}</td>
                    </tr>
                </tbody>
            </table>   
        </div>
        <select v-model="selected">
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'users',
    data(){
        return{
            selected: null,
            users1: '',
            users2: ''
        }
    },
    beforeMount(){
      axios.get('/api/v1/users')
      .then(res=>{
          this.users1=res.data
      })

      axios.get('/api/v1/users')
      .then(res=>{
          this.users2=res.data
      })
    },
    computed: {
        usersList() {
            if (this.selected == 1) {
                return this.users1
            }
            else {
                return this.users2
            }
        }
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