<template>
  <div class="main">
    <h2 class="text-secondary">Prestamos</h2>
    <div class="container table responsive loans-dashboard__container">
      <table class="table table-borderless table-striped text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Titulo del libro</th>
            <th>Fecha en uso</th>
            <th>Estado del permiso</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="loan in loans1" v-bind:key="loan">
            <td>{{loan.loan_id}}</td>
            <td>{{loan.book_id}}</td>
            <td>{{loan.loan_dateOrdered}}</td>
            <td>{{loan.loan_status}}</td>
          </tr>
        </tbody>
      </table>   
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'loans',
    data(){
      return{
        loans:''
      };
    },
    beforeMount(){
      axios.get('/api/v1/loans')
      .then(res=>{
          this.loans=res.data
         
      })
    }
  };
</script>

<style lang="scss">
  .loans-dashboard__container{
    max-height: 300px;
    width: 70%;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }

</style>