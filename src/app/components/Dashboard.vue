<template>
  <div class="dashboard__container">
        <div class="dashboard__card">
            <div class="dashboard__content">
                <div class="dashboard__head">
                    <h2>TABLA DE PUTUACIONES</h2>
                    <h4>Ago - Feb</h4>
                    <hr>
                </div>
                <div class="dashboard__body">
                    <div class="dashboard__item rounded-pill">
                        <p>1</p>
                        <p>Miriam Rodriguez</p>
                        <p>12 libros</p>
                        <p>9.8</p>
                    </div>
                    <div class="dashboard__item rounded-pill">
                        <p>2</p>
                        <p>Raul Vazquez Castillo</p>
                        <p>11 libros</p>
                        <p>9.6</p>
                    </div>
                    <div class="dashboard__item rounded-pill">
                        <p>3</p>
                        <p>Luis Hernandez</p>
                        <p>10 libros</p>
                        <p>9.8</p>
                    </div>
                    <div class="dashboard__item rounded-pill">
                        <p>4</p>
                        <p>Carolina Sanchez</p>
                        <p>9 books</p>
                        <p>9.1</p>
                    </div>
                    <div class="dashboard__item rounded-pill">
                        <p>5</p>
                        <p>Maria De Leon</p>
                        <p>9 books</p>
                        <p>9.1</p>
                    </div>
                    <div class="dashboard__item rounded-pill">
                        <p>6</p>
                        <p>Carlos Martinez Perez</p>
                        <p>8 books</p>
                        <p>9.0</p>
                    </div>
                    <div class="dashboard__item rounded-pill">
                        <p>7</p>
                        <p>Ana Gonzalez</p>
                        <p>8 libros</p>
                        <p>8.8</p>
                    </div>
                    <div class="dashboard__item rounded-pill">
                        <p>8</p>
                        <p>Lucero Morales</p>
                        <p>7 libros</p>
                        <p>8.7</p>
                    </div>
                    <div class="dashboard__item rounded-pill">
                        <p>9</p>
                        <p>Rodrigo De La Torre</p>
                        <p>7 libros</p>
                        <p>8.5</p>
                    </div>
                    <div class="dashboard__item rounded-pill">
                        <p>10</p>
                        <p>Sebastian Lopez Ruiz</p>
                        <p>6 libros</p>
                        <p>8.4</p>
                    </div>
                </div>
                <div class="dashboard__footer">
                    <button type="button" class="rewards__btn" data-bs-toggle="modal" data-bs-target="#rewardsModal">Ver recompensas</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dashboard'
}
</script>

<style lang="scss">
    .dashboard__container {
        width: 100%;
        height: auto;
        grid-column: 3;
        margin: 0 auto;

        .dashboard__card {
            width: 100%;
            height: auto;
            background-color: white;
            padding: 60px 60px 0;
            border-radius: 10%;

            .dashboard__content {
                padding: 20px;

                .dashboard__head {
                    margin: 0 auto;
                    text-align: center;

                    h2 {
                        font-family: 'Times New Roman', Times, serif;
                        font-weight: 700;
                    }

                    h4 {
                        font-family: 'Times New Roman', Times, serif;
                    }

                }

                .dashboard__body {
                    height: 500px;
                    overflow-y: scroll;

                    &::-webkit-scrollbar {
                        display: none;
                    }

                    .dashboard__item {
                        background-color: rgb(240, 240, 240);
                        width: 100%;
                        min-width: 600px;
                        height: auto;
                        display: grid;
                        padding: 20px 0px;
                        margin: 30px 0;
                        grid-template-columns: .5fr 1fr 1fr .5fr;
                        grid-template-rows: auto;

                        p {
                            padding: 0;
                            margin: 0;
                            text-align: center;
                        }
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