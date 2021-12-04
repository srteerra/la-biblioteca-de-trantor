<template>
    <div class="mainn__container">
        <div class="container title__container">
        <h1 class="text-dark fs-1 fw-bold">BECAR</h1>
        <div class="title__space__div"></div>
        <p>
            Para poder llevar acabo el proyecto principalmente necesitamos libros, 
            por lo que buscamos donaciones y patrocinadores, ya sean universidades, 
            librerías y editoriales que deseen donar libros para la actividad. Así 
            mismo, necesitamos publicidad para atraer a los jóvenes a formar parte 
            de la actividad. Y por último, necesitamos un buen premio para el ganador,
            algo que inspire a jóvenes no lectores a leer.
        </p>
        </div>
        <div class="container bannerr__container">
        <div class="bannerr__text__container">
            <h1 class="fw-bold fs-2 text-light">TRABAJAR JUNTOS<br />PARA MEJORAR</h1>
        </div>
        </div>
        <div class="container text__container">
        <p>
            Estamos buscando donaciones de libros y/o dinero para conseguir libros 
            y publicidad. También nos puedes ayudar llevando esta actividad a tu ciudad.

        </p>
        </div>
        <div class="container contacts__container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-12">
                    <ul class="list-unstyled">
                        <p class="fw-bold text-uppercase text-center">Oficina</p>
                        <li class="p-0 m-0">
                        {{ mail_1 }}
                        </li>
                        <li class="p-0 m-0">
                        {{ phone_1 }}
                        </li>
                        <li class="p-0 m-0">
                        {{ phone_2 }}
                        </li>
                    </ul>
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                    <ul class="list-unstyled">
                        <p class="fw-bold text-uppercase text-center">Otros contactos</p>
                        <li class="p-0 m-0">
                        {{ mail_2 }}
                        </li>
                        <li class="p-0 m-0">
                        {{ phone_3 }}
                        </li>
                        <li class="p-0 m-0">
                        {{ phone_4 }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'scholarship',
    data() {
        return {
            mail_1: "example@myemail.com",
            phone_1: "+00 000 0000",
            phone_2: "+00 000 0000",
            mail_2: "example@myemail.com",
            phone_3: "+00 000 0000",
            phone_4: "+00 000 0000"
        }
    }
}
</script>

<style lang="scss">
    .mainn__container {
  p {
    padding: 20px 0;
    text-align: justify;
  }
  .container {
    width: 70%;
  }
  .title__container {
    padding: 300px 10px 50px;
    .title__space__div {
      border-top: 2px solid black;
      width: 15%;
      height: 30px;
    }
  }
  .bannerr__container {
    height: 280px;
    position: relative;
    background-image: url(../assets/img/students.jpg);
    background-position: center;
    background-size: cover;
    margin-bottom: 50px;
    .bannerr__text__container {
      position: absolute;
      left: 10%;
      top: 30%;
    }
  }
  .contacts__container{
    padding: 50px 0;
    ul{
      text-align: center;
    }
  }
}
</style>