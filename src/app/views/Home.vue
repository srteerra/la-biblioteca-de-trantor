<template>
  <main>
    <div class="title__container">
      <h1>LA BIBLIOTECA DE TRANTOR</h1>
      <p>Una organizacion sin fines de lucro que busca inculcar el bello habito de la lectura en las jovenes generaciones de Mexico</p>
      <i class="fas fa-chevron-down"></i>
    </div>
    <Dashboard/>

    <!-- Modal -->
    <div class="modal fade" id="rewardsModal" tabindex="-1" aria-labelledby="rewardsModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="rewardsModalLabel">Recompensas</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary text-white" data-bs-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<script>
  import Dashboard from '../components/Dashboard.vue';

  export default {
    name: 'home',
    components: {
      Dashboard
    }
  }
</script>

<style lang="scss">
  main {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: .7fr 1fr .7fr;
    background-color: #f5fce2;

    .title__container {
      max-width: 1000px;
      height: auto;
      grid-column: 2;
      text-align: center;
      margin: 0 auto;
      padding: 150px 0px;

      h1 {
        font-family: 'Times New Roman', Times, serif;
        font-size: 6em;
      }

      p {
        width: 80%;
        margin: 0 auto;
        padding-top: 10px;
        font-family: sans-serif;
        font-size: 1.2em;
      }

      i {
        margin-top: 50px;
        font-size: 2em;
      }
    }
  }
</style>