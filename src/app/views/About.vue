<template>
  <div class="main">
    <!--First container-->
    <div class="container first__container">
      <h1 class="fw-bold text-uppercase">Acerca</h1>
      <div class="space__div"></div>
      <p class="lh-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
        similique veritatis quod mollitia assumenda autem qui quaerat tenetur
        officiis, inventore aperiam quis suscipit! Similique atque libero natus
        tenetur. Velit, adipisci!<br /><br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vel
        quisquam ratione, ad nobis, beatae tempora quos quis nesciunt impedit
        nihil pariatur, error porro eveniet quam officiis laudantium delectus
        molestiae quo? Quas obcaecati a illum nesciunt doloribus dolore
        provident deserunt dolorem dolores eligendi ipsum voluptates voluptatem
        ipsam, ratione consectetur tempora assumenda incidunt quos aspernatur
        error odio ipsa repudiandae quia. Officia!<br /><br />
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
      <h1 class="text-center fw-bold text-uppercase pb-5">echa un vistazo</h1>
      <!--Carousel componenet-->
      <div class="container-fluid carousel w-100 p-0">
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
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <!--/Carousel componenet-->
      <div class="description__div p-5">
        <p>
          Una organización sin fines de lucro para inculcar el hermoso habito de
          la lectura a las jóvenes generaciones de México.
        </p>
      </div>
    </div>
    <!--/Second container-->

    <!-- FAQ section -->
    <div class="container acordion__container">
      <h1>FAQ</h1>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Lorem ipsum dolor sit amet quas provident fugit?
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Lorem ipsum dolor sit amet quas provident fugit?
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Lorem ipsum dolor sit amet quas provident fugit?
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /FAQ section -->
  </div>
</template>

<script>
export default {
  name: "about",
};
</script>

<style lang="scss">
.main {
  font-family: sans-serif;
}
.first__container {
  padding: 300px 10px 200px;
  width: 70%;

  h1 {
    font-family: sans-serif;
    font-size: 4.5em;
  }

  p {
    padding: 50px 0;
    text-align: justify;
  }

  .space__div {
    border-top: 2px solid black;
    width: 10%;
    height: 30px;
  }
}

.second__container {
  background-color: #f5fce2;
  padding: 150px 0px;

  h1 {
    font-family: sans-serif;
    font-size: 3em;
  }
  .slide img {
    height: 65vh;
    object-fit: cover;
    .carousel {
      .border {
        border-radius: 10px;
      }
    }
  }
}

.description__div {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.acordion__container {
  padding: 10px;
  .accordion-item{
    border-radius: 10px;
    border: 1px solid #000;
    margin-bottom: 10px;
  }
}
</style> 