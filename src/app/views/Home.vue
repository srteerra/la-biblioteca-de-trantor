<template>
  <main>
    <div class="title__container">
      <h1>LA BIBLIOTECA DE TRANTOR</h1>
      <p>Una organizacion sin fines de lucro que busca inculcar el bello habito de la lectura en las jovenes generaciones de Mexico</p>
      <i class="fas fa-chevron-down"></i>
    </div>
    <div class="dashboard__container">
      <div class="dashboard__card">
        <div class="dashboard__content">
          <div class="dashboard__head">
            <h2>TABLA DE PUTUACIONES</h2>
            <h2>Ago - Feb</h2>
            <hr>
          </div>
          <div class="dashboard__body">
            <div class="dashboard__item rounded-pill">
              <p>1</p>
              <p>Angel Lopez</p>
              <p>5 books</p>
              <p>9.8</p>
            </div>
            <div class="dashboard__item rounded-pill">
              <p>1</p>
              <p>Angel Lopez</p>
              <p>5 books</p>
              <p>9.8</p>
            </div>
            <div class="dashboard__item rounded-pill">
              <p>1</p>
              <p>Angel Lopez</p>
              <p>5 books</p>
              <p>9.8</p>
            </div>
          </div>
          <div class="dashboard__footer"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  export default {

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

    .dashboard__container {
      width: 100%;
      height: auto;
      grid-column: 2;
      margin: 0 auto;
      padding: 150px 0px;

      .dashboard__card {
        width: 100%;
        height: auto;
        background-color: white;
        padding: 60px;
        border-radius: 10%;

        .dashboard__content {
          padding: 20px;

          .dashboard__head {
            margin: 0 auto;
            text-align: center;
          }

          .dashboard__body {
            height: 200px;
            overflow-y: scroll;

            .dashboard__item {
              background-color: orchid;
              width: 100%;
              height: auto;
              display: flex;
              padding: 20px 35px;
              margin: 30px 0;
              align-items: center;
              justify-content: space-between;

              p {
                padding: 0;
                margin: 0;
              }
            }
          }

          .dashboard__footer {
            background-color: orange;
          }
        }
      }
    }
  }
</style>