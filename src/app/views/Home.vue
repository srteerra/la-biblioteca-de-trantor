<template>
  <main>
    <img src="../assets/img/planet-1.png" alt="" id="planet-1">
    <img src="../assets/img/planet-2.png" alt="" id="planet-2">

    <div class="title__container">
      <h1 class="text-dark fs-1 fw-bolder">LA BIBLIOTECA DE TRANTOR</h1>
      <p class="text-dark">Una organizacion sin fines de lucro que busca inculcar el bello habito de la lectura en las jovenes generaciones de Mexico</p>
      <a href="#drop-dashboard" id="drop-dashboard">
        <i class="fas fa-chevron-down text-dark"></i>
      </a>
    </div>

    <Dashboard/>

    <!-- Small info starts here -->
    <div class="infotop__container">
      <p class="text-dark">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quia dicta nam suscipit magni hic porro corporis, velit modi magnam, fugit aliquam obcaecati dolores praesentium temporibus asperiores minus! Totam, exercitationem.</p>
    </div>
    <!-- Small info ends here -->

    <!-- Presentation starts here -->
    <div class="presentation__container container-fluid px-5">
      <div class="presentation__grid row py-5 px-lg-5">
        <div class="col-12 py-5">
          <div class="pb-5 mb-5">
            <div class="presentation__whatis text-center text-lg-start col-lg-12 p-5">
              <div class="presentation__whatis__image d-none d-lg-block">
                <img src="../assets/img/planets-1.png" class="col-md-6 float-md-end mb-3 ms-md-3" alt="" id="planets-1">
              </div>
              <h1 class="text-dark">¿Que es?</h1>
              <p class="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque expedita iure quas laudantium libero nesciunt omnis eligendi! Unde quibusdam laudantium eius in dignissimos nam adipisci, illo labore temporibus nemo consequuntur.</p>
              <p class="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque expedita iure quas laudantium libero nesciunt omnis eligendi! Unde quibusdam laudantium eius in dignissimos nam adipisci, illo labore temporibus nemo consequuntur.</p>
              <router-link to="/" class="btn btn-outline-dark py-3 px-4 mt-3 rounded-pill">Explora mas <span><i class="fas fa-arrow-right ps-2"></i></span></router-link>
            </div>
          </div>
          <div class="pt-5 mt-5">
            <div class="presentation__why text-center text-lg-end col-lg-12 p-5">
              <div class="presentation__why__image d-none d-lg-block">
                <img src="../assets/img/planets-2.png" class="col-md-6 float-md-start mb-3 ms-md-3" alt="" id="planets-2">
              </div>
              <h1 class="text-dark">¿Por que?</h1>
              <p class="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque expedita iure quas laudantium libero nesciunt omnis eligendi! Unde quibusdam laudantium eius in dignissimos nam adipisci, illo labore temporibus nemo consequuntur.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Presentation ends here -->

    <!-- Testimonials starts here -->
    <div class="testimonials__container">
      <div class="testimonials__grid">
        <div class="testimonials__title">
          <h4 class="text-dark">TESTIMONIOS</h4>
          <h1 class="text-dark fs-2 fw-bolder">LO QUE LA GENTE OPINA DE NOSOTROS</h1>
        </div>
        <div class="testimonials__cards">
          <div class="testimonial__item">
            <div>
              <strong class="text-dark">"</strong>
            </div>
            <p class="text-dark">Lorem ipsum, dolor sit amet consectetur adipisicing. Lorem ipsum, dolor sit amet consectetur adipisicing adipisicing dolor sit amet consectetur adipisicing.</p>
            <h5 class="text-dark">- Axell Lopez</h5>
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" srcset="">
          </div>
          <div class="testimonial__item">
            <div>
              <strong class="text-dark">"</strong>
            </div>
            <p class="text-dark">Lorem ipsum, dolor sit amet consectetur adipisicing. Lorem ipsum, dolor sit amet consectetur adipisicing adipisicing dolor sit amet consectetur adipisicing.</p>
            <h5 class="text-dark">- Maria Moreno</h5>
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" srcset="">
          </div>
          <div class="testimonial__item">
            <div>
              <strong class="text-dark">"</strong>
            </div>
            <p class="text-dark">Lorem ipsum, dolor sit amet consectetur adipisicing. Lorem ipsum, dolor sit amet consectetur adipisicing adipisicing dolor sit amet consectetur adipisicing.</p>
            <h5 class="text-dark">- Luis Ruiz</h5>
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" srcset="">
          </div>
        </div>
      </div>
    </div>
    <!-- Testimonials ends here -->

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
              <li>Objeto</li>
              <li>Objeto</li>
              <li>Objeto</li>
              <li>Objeto</li>
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
      padding: 300px 0px 150px;

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
      text-align: center;
      margin: 0 auto;
      padding: 50px 0px 150px;
    }

    .presentation__container {
      width: 100%;
      height: auto;
      background-color: white;

      .presentation__grid {

        .presentation__whatis {
          text-align: start;

          h1 {
            padding-bottom: 50px;
          }
        }
        
        .presentation__whatis__image {
          justify-self: center;
        }

        .presentation__why__image {
          justify-self: center;
        }

        .presentation__why {
          h1 {
            padding-bottom: 50px;
          }
        }
      }
    }

    .testimonials__container {
      width: 100%;
      height: auto;
      background-color: #f5fce2;
      grid-column: 1/6;
      padding: 150px 300px;

      .testimonials__grid {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto 2fr;

        .testimonials__title {
          text-align: center;
          padding-bottom: 150px;
        }

        .testimonials__cards {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;

          .testimonial__item {
            max-width: 400px;
            max-height: 400px;
            padding: 30px 30px 0px;
            margin-bottom: 150px;
            border-radius: 30px;
            background-color: white;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

            div:first-of-type {
              text-align: center;
              font-family: 'Times New Roman', Times, serif;
              font-size: 4em;
              line-height: 30px;
              padding-top: 30px;
            }

            p {
              text-align: center;
            }

            h5 {
              text-align: center;
            }

            img {
              width: 150px;
              height: 150px;
              position: relative;
              left: 28%;
              bottom: -50px;
              border-radius: 50%;
              box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
            }
          }
        }
      }
    }
  }
</style>