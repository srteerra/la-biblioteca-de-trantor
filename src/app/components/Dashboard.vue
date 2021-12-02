<template>
  <div class="dashboard__container container-fluid pt-5">
    <div class="row">
      <div class="col-12 col-md-11 col-lg-9 col-xl-6 mx-auto p-0">
        <div class="dashboard__card px-3 px-lg-5 py-5">
          <div class="dashboard__content p-0 p-md-4">
            <div class="text-center pb-3">
              <h1 class="fs-2">TABLA DE PUNTUACIONES</h1>
              <ul v-for="currentCom in currentCompNow" v-bind:key="currentCom">
                <li class="fs-4"> {{currentCom.competition_name}} </li>
              </ul>
            </div>
            <div class="dashboard__body table-responsive">
              <table class="table table-borderless text-center">
                <thead>
                  <tr>
                    <th>Lugar</th>
                    <th>Nickname</th>
                    <th>Puntaje</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(cc, x) in dashCompSorted" v-bind:key="x">
                    <td>{{ x + 1 }}</td>
                    <td>{{ cc.user_nickname }}</td>
                    <td>{{ cc.user_score.toFixed(2) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="dashboard__footer pt-3">
              <button
                type="button"
                class="rewards__btn text-dark"
                data-bs-toggle="modal"
                data-bs-target="#rewardsModal"
              >
                Ver recompensas
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "dashboard",
    data() {
      return {
        competitionDate: '', // Date competition HERE
        dashComp:'',
        currentCompNow:'',
      };
    },
    computed: {
      dashCompSorted() {
        return this.dashComp.sort(function(a,b) {
          return b.user_score - a.user_score
        })
      }
    },
    beforeMount(){
      axios.get('/api/v1/competitions/dashCC')
      .then(res=>{
          this.dashComp=res.data
      })
      axios.get('/api/v1/currentCompetition')
      .then(res=>{
          this.currentCompNow=res.data
      })
    }
  }
</script>

<style lang="scss">
  #badge__img {
    width: 15%;
    position: relative;
    right: -90%;
    top: 12%;
    opacity: 50%;
  }

  .dashboard__container {
    width: 100%;
    height: auto;

    .dashboard__card {
      width: 100%;
      height: auto;
      background-color: white;
      box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
        rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
      border-radius: 5vw;
      z-index: 2;

      .dashboard__content {
        table {
          tbody {
            tr {
              &:nth-of-type(1) {
                background-color: rgb(251, 255, 189);
              }
              &:nth-of-type(2) {
                background-color: rgb(243, 243, 243);
              }
              &:nth-of-type(3) {
                background-color: rgb(245, 220, 180);
              }
            }
          }
        }

        .dashboard__body {
          max-height: 500px;
          overflow-y: scroll;

          &::-webkit-scrollbar {
            display: none;
          }
        }

        .dashboard__footer {
          display: flex;
          justify-content: center;

          .rewards__btn {
            width: auto;
            height: auto;
            background-color: transparent;
            border: none;
            padding: 15px 0;
            font-weight: 200;
          }
        }
      }
    }
  }
</style>