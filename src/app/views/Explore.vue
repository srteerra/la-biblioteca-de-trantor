<template>
  <div class="main">
    <div class="container firstsec__container">
      <!-- Title -->
      <h1>Explorar</h1>
      <div class="space__title"></div>
      <!-- First paragraph -->
      <img class="float-start p__image1" src="../assets/img/library.jpg" />
      <p>
      Jóvenes entre los 12 y 17 años, aquellos que van en preparatoria y en 
      secundaria. Además, como el INEGI menciona en su estudio, la razón 
      principal por la cual supuestamente no se lee es la falta de tiempo, 
      algo que en el caso de niños y adolescentes no es necesariamente cierto,
      sino que estos tienen mucho tiempo libre y puede ser mejor utilizado con 
      esta actividad: la lectura.
      </p>
      <br /><br />
      <p>
        Lo que nosotros ofrecemos a este segmento de jóvenes es incrementar su 
        nivel de lectura, tener acceso a libros físicos sin costo alguno, mejorar 
        la base de criterio para que tomen decisiones a través de tener una visión
        más amplia de la vida y con conocimientos que les pueden abrir las puertas, 
        tanto con otras personas como en sus sueños y metas. Además de valores como
        disciplina, constancia, trabajo por metas y valores como la empatía y trabajo
        en equipo.<br /><br />
        El proyecto se llevará a cabo en 4 etapas. En la primera etapa se buscará hacer
        una recolección de libros de los distintos colaboradores del proyecto y de la 
        población, se evaluarán los libros y se registrarán de manera apropiada, casi 
        simultáneamente se llevará acabo la segunda etapa, en esta se buscará que aquellos 
        del segmento objetivo se registren a la actividad que se realizará.
      </p>
      <!-- Banner -->
      <div class="fbanner__container"></div>
      <!-- Second paragraph -->
      <p>
        Cuando termine esta el registro, de los libros seleccionados se rolarán dependiendo
        de la edad del participante y relacionándolos con la complejidad del libro, se dejará
        una semana o dos para leer el libro dependiendo de la dificultad del libro, y al final
        de esta, se compartirá la opinión a través de un texto que tendrán que enviarnos, y se
        cambiará por otro libro, esto se repetirá una x cantidad de veces dependiendo de la 
        cantidad de libros que se lograron acumular de la donación de esta manera todos podrán 
        tener la oportunidad de leer todos los libros permitiendo la conversación e intercambio 
        de ideas.
      </p>
      <br />
      <p>
        En todo este proceso nuestro sitio web tendrá un papel relevante al ir 
        publicando los avances de cada participante en una manera atractiva para
        que los involucrados, sus familias, los patrocinadores y todo aquel que 
        pudiera interesarse en el proyecto puedan ver de manera atractiva, divertida,
        pero sobre todo con una imagen actual, una competencia sana que motive a la 
        participación.
      </p>
      <p>
        El proceso culminará con la premiación de los ganadores, aquel que 
        haya concluído con la meta y obtenga una mejor calificación por los 
        jueces que revisarán los “mapas mentales” que de cada libro haya 
        entregado, donde no solo demuestre una gran comprensión de estos, sino
        que pueda pensar maneras de aplicarlo en su vida personal, académica y 
        familiar. Si hay un empate se decidirá por las opiniones mejor fundamentadas.
        Los premios quedarán por definir conforme el proyecto y la cantidad de personas
        que participen.
      </p>
      <br /><br />
      <!-- Third paragraph -->
      <img class="p__image2 float-end" src="../assets/img/reader.jpg" />
      <p>
       Este proyecto es totalmente sin fines de lucro, pero no podemos llevar a cabo 
       el proyecto sin recursos, para esto, se busca que tanto el Gobierno como Donadores
      privados nos proporcionen los recursos necesarios. Estos serían, libros, siendo el 
      principal recurso que necesitamos, para esto, buscamos que nos apoyen librerías, 
      personas físicas y morales, así como empresas editoriales y universidades. Por otro 
      lado, está contemplado entregar premios a los ganadores, por ello se requieren recursos
      económicos y/o materiales, también académicos como becas, cursos gratuitos, etc de tal 
      manera que sea una motivación para los participantes. Por último, estaremos usando Patreon
      para poder conseguir donantes para la compra de libros o de los premios. Siendo los socios 
      claves, los patrocinadores y donadores.
      </p>
      <br />
      <p>
        La manera para promover el proyecto será a través de las redes sociales, se dará el 
        mensaje por Instagram, TikTok, Facebook, una página web en desarrollo. Y uno de los 
        principales contactos una vez que haya comenzado la actividad será Discord.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "explore",
  data() {},
};
</script>

<style lang="scss">
.main {
  p {
      text-align: justify;
    }
  .firstsec__container {
    padding: 300px 10px 100px;
    width: 70%;
    .space__title {
      border-top: 2px solid black;
      width: 15%;
      height: 30px;
    }
    .p__image1{
      width: 40%;
      margin-right: 20px;
    }
    .p__image2{
      width: 40%;
      margin-left: 20px;
    }
    .fbanner__container {
      height: 280px;
      background-image: url(../assets/img/galaxy.jpg);
      background-position: bottom;
      background-size: cover;
      margin-bottom: 50px;
      border-radius: 2px;
    }
  }
}
</style>