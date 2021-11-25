<template>
    <div class="mainn__container">
        <div class="container title__container">
        <h1 class="text-dark fs-1 fw-bold">BECAR</h1>
        <div class="title__space__div"></div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            architecto accusantium, commodi similique placeat tenetur numquam
            officia, laborum harum nobis at ipsam inventore provident aperiam porro
            iusto. Eos magni, maxime officiis praesentium reiciendis consequatur
            molestiae atque, error provident commodi quibusdam.<br /><br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
            laudantium debitis non, earum praesentium quo eveniet qui asperiores!
            Aliquam ipsam veritatis temporibus qui, totam ad esse nostrum modi.
            Nostrum, repellendus aperiam id corporis iusto voluptatem ducimus alias
            unde laboriosam, ad, dolor porro aut.<br /><br />
            Ipsum nulla sit, consequuntur inventore nesciunt fugit, facilis facere,
            molestias quos sapiente vitae laboriosam fuga sequi officiis.
            Consequatur itaque nulla vero praesentium reprehenderit architecto sed
            libero, iusto eaque deserunt excepturi blanditiis illo porro recusandae
            repellat quis. Temporibus nobis sapiente obcaecati dicta quas dolores
            error sit accusamus ea repudiandae eos totam, excepturi, at ut
            voluptatibus incidunt. Eius, praesentium.
        </p>
        </div>
        <div class="container bannerr__container">
        <div class="bannerr__text__container">
            <h1 class="fw-bold fs-2 text-light">TRABAJAR JUNTOS<br />PARA MEJORAR</h1>
        </div>
        </div>
        <div class="container text__container">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
            labore non eligendi perferendis sapiente et, reiciendis ad fugit
            necessitatibus ipsam quidem minus neque at omnis nostrum enim
            asperiores, cumque ab? Iusto tempora ut veritatis numquam quas delectus,
            sunt quasi neque laboriosam ipsam, voluptas aspernatur impedit dicta
            officia repudiandae nulla necessitatibus?
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