<template>
  <div class="main">
    <!--First container-->
    <div class="container first__container">
      <h1 class="fw-bold fs-1">Acerca</h1>
      <div class="space__div"></div>
      <p class="lh-lg">
        Alfatech, S.A. de C.V., el cual tuvo sus inicios en la Ciudad de México,
         D.F.  en el año 1999 logrando decenas de implementaciones exitosas en 
         empresas de distintos giros, posteriormente, a finales de 2002 se inicia 
         la apertura de un nuevo mercado: El bajío en el estado de Michoacán.<br/><br />
        Desde esta nueva sede, Alfatech inició con éxito un programa de formación
         de profesionistas, así como la penetración de ciudades como Uruapan, Ciudad
          Hidalgo, etc. Alfatech actualmente cuenta con los departamentos de Ventas,
           Soporte técnico y Consultoría, además maneja el concepto de Outsourcing para
          el éxito de sus proyectos, contando con especialistas en diversas áreas quienes
          intervienen según la necesidad de nuestros clientes, logrando con esto una
          reducción radical en los costos de los proyectos.  <br /><br />
        Pone a disposición de PyMES técnicas y metodología de clase mundial, combinadas 
        con herramientas gerenciales y de administración completamente probadas por las 
        grandes empresas corporativas; obviamente, debidamente adecuadas a las características
         de cada empresa. (Macro Corp, 2021).
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
      <div class="description__div pt-5">
        <p>
          Una organización sin fines de lucro para inculcar el hermoso habito de
          la lectura a las jóvenes generaciones de México.
        </p>
      </div>
    </div>
    <!--/Second container-->

    <!-- FAQ section -->
    <div class="container accordion__container">
      <h1 class="fw-bold fs-1">FAQ</h1>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button collapsed fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              ¿Por qué no libros electrónicos?
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                Esta es una pregunta importante ya que parece ser que
                 los libros electrónicos son más fáciles de conseguir 
                 y manejar, esto es cierto hasta determinado punto.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              ¿Que titulos se proponen de inicio para secundaria?
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
   2 años de vacaciones - Julio Verne
   Robin Hood
   El rey Arturo y los caballeros de la mesa redonda - Thomas Malory
   El León, la Bruja y el Ropero - C.S. Lewis
   La vuelta al mundo en 80 días - Julio Verne
   Mujercitas
   La máquina del tiempo - H.G. Wells
   Los Sabuesos de Baskerville - Arthur Conan Doyle
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
            ¿Que titulos se proponen de inicio para preparatoria?

            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                1984 - George Orwell
                Fundación
                Fundación e Imperio
                Segunda Fundación
                Frankestein - Mary Shelly
                Orgullo y prejuicio - Jane Austen
                Un mundo felíz - Aldous Huxley
                La guerra de los mundos - H.G. Wells
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button
              class="accordion-button collapsed fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              ¿Cual es el alcance del proyecto?
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                La visión que se tiene para este proyecto es que en el plazo 
                de 3-5 años éste se pueda llevar a cabo en más ciudades de 
                México, con patrocinadores y socios oficiales, de esta manera,
                el movimiento puede crecer y convertirse en un verdadero factor 
                de cambio para el país.
              </p>
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
  name: 'about',
};
</script>

<style lang="scss">
  .main {
    .first__container {
      padding: 300px 10px 100px;
      width: 70%;

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
      padding: 80px 0px;
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
    .accordion__container{
      padding: 50px 20px;
      .accordion-item {
        border: none;
        margin: 30px 10px;
        button {
          border-bottom: 2px solid #000 !important;
          width: 100%;
          background-color: white;
          padding: 10px;
          z-index: 1;
        }
      }
    }
  }
</style> 