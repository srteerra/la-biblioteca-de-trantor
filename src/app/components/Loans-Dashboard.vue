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
          <tr v-for="(loan) in loans" v-bind:key="loan">
            <td>{{loan.loanId}}</td>
            <td>{{loan.bookTitle}}</td>
            <td>{{loan.loanDate}}</td>
            <td>{{loan.loanStatus}}</td>
          </tr>
        </tbody>
      </table>   
    </div>
  </div>
</template>

<script>
  export default {
    name: 'loans',
    data(){
      return{
        hola:"crack",
        loans: [
          {loanId:"1205",bookTitle:"El medico",loanDate:"11-06-2021",loanStatus:"active"},
          {loanId:"1345",bookTitle:"Moby Dick",loanDate:"11-05-2021",loanStatus:"active"},
          {loanId:"1234",bookTitle:"Blancanieves",loanDate:"12-03-2021",loanStatus:"active"},
          {loanId:"9023",bookTitle:"La bella y la bestia",loanDate:"11-12-2021",loanStatus:"active"},
          {loanId:"8713",bookTitle:"Frankenstein",loanDate:"12-17-2021",loanStatus:"active"},
          {loanId:"9012",bookTitle:"Los Juegos del Hambre",loanDate:"11-04-2021",loanStatus:"active"},
          {loanId:"8181",bookTitle:"Play",loanDate:"10-08-2021",loanStatus:"active"}
        ]
      }
    }
  }
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