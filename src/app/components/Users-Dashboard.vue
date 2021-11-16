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
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'users',
    data(){
        return{
            users1: '',
            users:[
                {userId:"123",userNickname:"Car2020",userName:"Carlos Alberto Sanchez Vazquez",userEmail:"G89@gmail.com",userSchool:"UTCJ"},
                {userId:"112",userNickname:"Reader114",userName:"Roberto Gomez Estrada",userEmail:"Reader11@gmail.com",userSchool:"UTCJ"},
                {userId:"837",userNickname:"JuanS",userName:"Juan Emilio Sanchez Lopez",userEmail:"SJuan12@gmail.com",userSchool:"UTCJ"},
                {userId:"012",userNickname:"Zoren",userName:"Abrham Josue Chavez Gomez",userEmail:"Zor9087@gmail.com",userSchool:"UTCJ"},
                {userId:"111",userNickname:"Car2020",userName:"Carlos Alberto Sanchez Vazquez",userEmail:"G89@gmail.com",userSchool:"UTCJ"},
                {userId:"153",userNickname:"Car2020",userName:"Carlos Alberto Sanchez Vazquez",userEmail:"G89@gmail.com",userSchool:"UTCJ"},
                {userId:"202",userNickname:"Car2020",userName:"Carlos Alberto Sanchez Vazquez",userEmail:"G89@gmail.com",userSchool:"UTCJ"},
                {userId:"404",userNickname:"Car2020",userName:"Carlos Alberto Sanchez Vazquez",userEmail:"G89@gmail.com",userSchool:"UTCJ"},
                {userId:"982",userNickname:"Car2020",userName:"Carlos Alberto Sanchez Vazquez",userEmail:"G89@gmail.com",userSchool:"UTCJ"},
                {userId:"656",userNickname:"Car2020",userName:"Carlos Alberto Sanchez Vazquez",userEmail:"G89@gmail.com",userSchool:"UTCJ"},
                {userId:"435",userNickname:"Car2020",userName:"Carlos Alberto Sanchez Vazquez",userEmail:"G89@gmail.com",userSchool:"UTCJ"},
                {userId:"567",userNickname:"Car2020",userName:"Carlos Alberto Sanchez Vazquez",userEmail:"G89@gmail.com",userSchool:"UTCJ"}
            ]
        }
    },
    beforeMount(){
      axios.get('/api/v1/users')
      .then(res=>{
          this.users1=res.data
      })
    }
}
</script>

<style lang="scss">
    .users-dashboard__container{
        max-height: 300px;
        width: 70%;
        overflow-y: scroll;
        &::-webkit-scrollbar {
            display: none;
        }
    }
</style>