<template>
  <div class="main">
    <!--First container-->
    <div class="container first__container">
      <h1 class="fw-bold fs-1">Acerca</h1>
      <div class="space__div"></div>
      <p class="lh-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
        similique veritatis quod mollitia assumenda autem qui quaerat tenetur
        officiis, inventore aperiam quis suscipit! Similique atque libero natus
        tenetur. Velit, adipisci!<br><br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vel
        quisquam ratione, ad nobis, beatae tempora quos quis nesciunt impedit
        nihil pariatur, error porro eveniet quam officiis laudantium delectus
        molestiae quo? Quas obcaecati a illum nesciunt doloribus dolore
        provident deserunt dolorem dolores eligendi ipsum voluptates voluptatem
        ipsam, ratione consectetur tempora assumenda incidunt quos aspernatur
        error odio ipsa repudiandae quia. Officia!<br><br>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi iste
        iusto numquam magnam quas eos, cupiditate laudantium impedit odit
        similique neque, dolorem quasi exercitationem, officia nesciunt ab? Ea
        obcaecati alias velit laboriosam minima aut esse ad modi quibusdam!
        Explicabo, distinctio molestiae voluptate atque cupiditate officiis modi
        sapiente itaque nulla, laudantium numquam corrupti qui? Totam odit
        dignissimos dolorem sed at cupiditate.
      </p>
    </div>
    <!--First container-->

    <!--Second container-->
    <div class="second__container">
      <h5 class="text-center fw-normal text-uppercase pb-1">Galeria</h5>
      <h1 class="text-center fw-bold fs-2 text-uppercase pb-5">echa un vistazo</h1>
      <div class="description__div pb-5">
        <p>
          Una organización sin fines de lucro para inculcar el hermoso habito de
          la lectura a las jóvenes generaciones de México.
        </p>
      </div>
      <!--Carousel componenet-->
      <div class="container-fluid carousel  w-100 p-0">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="../assets/img/slide-1.jpg"
                class="d-block w-100"
                alt="asd"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/img/slide-2.jpg"
                class="d-block w-100"
                alt="asd"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/img/slide-3.jpg"
                class="d-block w-100"
                alt="asd"
              />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <!--/Carousel componenet-->
      <div class="description__div pt-5">
        <p>
          Una organización sin fines de lucro para inculcar el hermoso habito de
          la lectura a las jóvenes generaciones de México.
        </p>
      </div>
    </div>
    <!--/Second container-->
  </div>
</template>

<script>
export default {
  name: "about",
};
</script>

<style lang="scss">

  .first__container {
    padding: 300px 10px 200px;
    width: 70%;

    p {
      padding: 50px 0;
      text-align: justify;
    }
  }

  .space__div {
      border-top: 2px solid black;
      width: 10%;
      height: 30px;
  }

  .second__container {
    background-color: #f5fce2;
    padding: 150px 0px;

    .slide img{
      height: 80vh;
      object-fit: cover;
      .carousel{
        .border {
          border-radius: 10px;
        }
      }
    }   
  }

  .description__div{
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  


</style> 