<template>
  <main>
    <img src="../assets/img/planet-1.png" alt="" id="planet-1">
    <img src="../assets/img/planet-2.png" alt="" id="planet-2">

    <div class="title__container">
      <h1 class="text-dark">LA BIBLIOTECA DE TRANTOR</h1>
      <p class="text-dark">Una organizacion sin fines de lucro que busca inculcar el bello habito de la lectura en las jovenes generaciones de Mexico</p>
      <i class="fas fa-chevron-down text-dark"></i>
    </div>
    <Dashboard/>
    <div class="infotop__container">
      <p class="text-dark">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quia dicta nam suscipit magni hic porro corporis, velit modi magnam, fugit aliquam obcaecati dolores praesentium temporibus asperiores minus! Totam, exercitationem.</p>
    </div>
    <div class="presentation__container">
      <div class="presentation__grid">
        <div class="presentation__whatis">
          <h1 class="text-dark">¿Que es?</h1>
          <p class="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque expedita iure quas laudantium libero nesciunt omnis eligendi! Unde quibusdam laudantium eius in dignissimos nam adipisci, illo labore temporibus nemo consequuntur.</p>
          <p class="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque expedita iure quas laudantium libero nesciunt omnis eligendi! Unde quibusdam laudantium eius in dignissimos nam adipisci, illo labore temporibus nemo consequuntur.</p>
          <router-link to="/" class="btn btn-outline-dark py-3 px-4 mt-3 rounded-pill">Explora mas <span><i class="fas fa-arrow-right ps-2"></i></span></router-link>
        </div>
        <div class="presentation__whatis__image">
          <img src="../assets/img/planets-1.png" alt="" id="planets-1">
        </div>
        <div class="presentation__why__image">
          <img src="../assets/img/planets-2.png" alt="" id="planets-2">
        </div>
        <div class="presentation__why">
          <h1 class="text-dark">¿Por que?</h1>
          <p class="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque expedita iure quas laudantium libero nesciunt omnis eligendi! Unde quibusdam laudantium eius in dignissimos nam adipisci, illo labore temporibus nemo consequuntur.</p>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="rewardsModal" tabindex="-1" aria-labelledby="rewardsModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="rewardsModalLabel">Recompensas</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-5">
            <h5>Ago - Feb</h5>
            <h3 class="mb-5">Estas son las recompensas:</h3>
            <p class="text-dark text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore perferendis consectetur voluptas itaque saepe.</p>
            <ol>
              <li>Objecto</li>
              <li>Objecto</li>
              <li>Objecto</li>
              <li>Objecto</li>
            </ol>
            <p class="text-dark text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore perferendis consectetur voluptas itaque saepe.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Entendido</button>
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
    data() {
      return {
      }
    },
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
    grid-template-columns: .4fr .4fr 1fr .4fr .4fr;
    background-color: #f5fce2;

    #planet-1 {
      max-width: 500px;
      position: absolute;
      left: 87%;
      top: 40%;
      opacity: 40%;
    }

    #planet-2 {
      max-width: 150px;
      position: absolute;
      left: 10%;
      top: 130%;
      opacity: 40%;
    }

    #planets-1 {
      max-width: 500px;
      opacity: 40%;
    }

    #planets-2 {
      max-width: 500px;
      opacity: 40%;
    }

    .title__container {
      max-width: 1000px;
      height: auto;
      grid-column: 3;
      text-align: center;
      margin: 0 auto;
      padding: 250px 0px 150px;

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

    .infotop__container {
      max-width: 80%;
      height: auto;
      grid-column: 3;
      text-align: center;
      margin: 0 auto;
      padding: 50px 0px 150px;
    }

    .presentation__container {
      width: 100%;
      height: auto;
      background-color: white;
      grid-column: 1/6;
      padding: 200px;

      .presentation__grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr .2fr 1fr;

        .presentation__whatis {
          text-align: start;
          grid-row: 1;

          h1 {
            padding-bottom: 50px;
            font-family: 'Times New Roman', Times, serif;
            font-size: 5em;
          }

          p {
            line-height: 40px;
          }
        }
        
        .presentation__whatis__image {
          grid-row: 1;
          justify-self: center;
        }

        .presentation__why__image {
          grid-row: 3;
          justify-self: start;
        }

        .presentation__why {
          text-align: end;
          grid-row: 3;

          h1 {
            padding-bottom: 50px;
            font-family: 'Times New Roman', Times, serif;
            font-size: 5em;
          }

          p {
            line-height: 40px;
          }
        }
      }
    }
  }
</style>