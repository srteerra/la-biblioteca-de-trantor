<template>
    <div class="main">
        <h2 class="text-secondary">Usuarios</h2>
        <div class="container table responsive users-dashboard__container">
            <div class="row">
                <div class="col-3">
                    <select v-model="selectedOrder" class="my-4 form-select border">
                        <option selected>Ordenar por...</option>
                        <option>Ordenar por nombres ascendiente</option>
                        <option>Ordenar por nombres descendiente</option>
                        <option>Ordenar por vivienda ascendiente</option>
                        <option>Ordenar por vivienda descendiente</option>
                    </select>
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
                        <tr v-for="(user) in usersOrders " v-bind:key="user">
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
            selectedOrder: 'Ordenar por...',
            users: '',

            //Address type
            users_AddressType_DESC: '',
            users_AddressType_ASC: '',

            //Name
            users_Name_DESC: '',
            users_Name_ASC: '',
        }
    },
    beforeMount(){
      axios.get('/api/v1/users')
      .then(res=>{
          this.users=res.data
      })

      // ADDRESS ORDERS REQUEST  
      axios.get('/api/v1/users/orderTypeAddressDESC')
      .then(res=>{
          this.users_AddressType_DESC=res.data
      })
      axios.get('/api/v1/users/orderTypeAddressASC')
      .then(res=>{
          this.users_AddressType_ASC=res.data
      })

      // NAME ORDERS REQUEST    
      axios.get('/api/v1/users/orderNameDESC')
      .then(res=>{
          this.users_Name_DESC=res.data
      })
      axios.get('/api/v1/users/orderNameASC')
      .then(res=>{
          this.users_Name_ASC=res.data
      })
    },
    computed: {
        usersOrders() {
            if (this.selectedOrder === 'Ordenar por vivienda ascendiente') {
                return this.users_AddressType_ASC
            }
            else if (this.selectedOrder === 'Ordenar por vivienda descendiente') {
                return this.users_AddressType_DESC
            }
            else if (this.selectedOrder === 'Ordenar por nombres ascendiente') {
                return this.users_Name_ASC
            }
            else if (this.selectedOrder === 'Ordenar por nombres descendiente') {
                return this.users_Name_DESC
            }
            else {
                return this.users
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