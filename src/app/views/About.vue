<template>
  <div class="main">
    <div class="container first_container">
      <p class="title fs-1 fw-bold text-uppercase">Acerca</p>
      <div class="space"></div>
      <p class="text">
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
    <div class="second_container">
      <p class="text-center fw-bold fs-1 text-uppercase p-4">echa un vistazo</p>
      <div class="carousel">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="border carousel-inner">
            <div class="carousel-item active">
              <img
                src="../assets/img/slide-1.jpg"
                class="d-block w-100"
                alt="asd"
              />
            </div>
            <div class="border carousel-item">
              <img
                src="../assets/img/slide-2.jpg"
                class="d-block w-100"
                alt="asd"
              />
            </div>
            <div class="border carousel-item">
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

      <div>
        <p class="descrip p-5">
          Una organización sin fines de lucro para inculcar el hermoso habito de
          la lectura a las jóvenes generaciones de México.
        </p>
      </div>
    </div>
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
.first_container {
  padding-top: 200px;
  width: 70%;
  p {
    text-align: justify;
  }
  .text{
    padding-top: 50px;
    padding-bottom: 70px;
  }
}

.space {
  border-top: 5px solid black;
  width: 10%;
  height: 30px;
}

.second_container {
  background-color: #f5fce2;
}

.center {
  width: 80%;
  padding-top: 100px;
  padding-bottom: 100px;
}

.carousel {
  width: 80%;
  height: 70vh;
  margin-left: auto;
  margin-right: auto;
}
.border {
  border-radius: 10px;
}
.border img {
  border-radius: 10px;
  width: 100%;
}

.carousel-item {
  height: 70vh;
}

.descrip {
  width: 40%;
  text-align: center;
  margin: auto;
}

</style> 