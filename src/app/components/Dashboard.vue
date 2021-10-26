<template>
  <div class="dashboard__container container-fluid">
        <div class="row">
            <div class="col-12 col-md-11 col-lg-9 col-xl-6 mx-auto p-0">
                <img src="../assets/img/badge.png" alt="" id="badge__img" class="d-none d-md-block">
                <div class="dashboard__card px-3 px-lg-5 py-5">
                    <div class="dashboard__content p-0 p-md-4">
                        <div class="text-center pb-3">
                            <h1 class="fs-2">TABLA DE PUNTUACIONES</h1>
                            <h5 class="fs-5"> {{ competitionDate }} </h5>
                        </div>
                        <div class="dashboard__body table-responsive">
                            <table class="table table-borderless text-center">
                                <thead>
                                    <tr>
                                        <th>Lugar</th>
                                        <th>Nombre</th>
                                        <th>Libros</th>
                                        <th>Puntos</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="user in users" :key="user.id">
                                        <td>{{user.userPlace}}</td>
                                        <td>{{user.userName}}</td>
                                        <td>{{user.userBooks}}</td>
                                        <td>{{user.userScore}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="dashboard__footer pt-3">
                            <button type="button" class="rewards__btn text-dark" data-bs-toggle="modal" data-bs-target="#rewardsModal">Ver recompensas</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'dashboard',
        data() {
            return {
                competitionDate: "10/26/2021 - 04/26/2022",
                users: [
                    { userPlace: "1", userName: "Miriam Rodriguez", userBooks: "12", userScore: "9.8"},
                    { userPlace: "2", userName: "Carlos Sanchez", userBooks: "11", userScore: "9.5"},
                    { userPlace: "3", userName: "Carlos Sanchez", userBooks: "11", userScore: "9.5"},
                    { userPlace: "4", userName: "Carlos Sanchez", userBooks: "11", userScore: "9.5"},
                    { userPlace: "5", userName: "Carlos Sanchez", userBooks: "11", userScore: "9.5"},
                    { userPlace: "6", userName: "Carlos Sanchez", userBooks: "11", userScore: "9.5"},
                    { userPlace: "7", userName: "Carlos Sanchez", userBooks: "11", userScore: "9.5"},
                    { userPlace: "8", userName: "Carlos Sanchez", userBooks: "11", userScore: "9.5"},
                    { userPlace: "9", userName: "Carlos Sanchez", userBooks: "11", userScore: "9.5"},
                    { userPlace: "10", userName: "Carlos Sanchez", userBooks: "11", userScore: "9.5"},
                    { userPlace: "11", userName: "Carlos Sanchez", userBooks: "11", userScore: "9.5"},
                    { userPlace: "12", userName: "Carlos Sanchez", userBooks: "11", userScore: "9.5"},
                    { userPlace: "13", userName: "Carlos Sanchez", userBooks: "11", userScore: "9.5"},
                    { userPlace: "14", userName: "Carlos Sanchez", userBooks: "11", userScore: "9.5"},
                    { userPlace: "15", userName: "Carlos Sanchez", userBooks: "11", userScore: "9.5"},
                    { userPlace: "16", userName: "Carlos Sanchez", userBooks: "11", userScore: "9.5"},
                    { userPlace: "17", userName: "Carlos Sanchez", userBooks: "11", userScore: "9.5"},
                    { userPlace: "18", userName: "Carlos Sanchez", userBooks: "11", userScore: "9.5"},
                    { userPlace: "19", userName: "Carlos Sanchez", userBooks: "11", userScore: "9.5"},
                    { userPlace: "20", userName: "Carlos Sanchez", userBooks: "11", userScore: "9.5"},
                    { userPlace: "21", userName: "Carlos Sanchez", userBooks: "11", userScore: "9.5"},
                    { userPlace: "22", userName: "Carlos Sanchez", userBooks: "11", userScore: "9.5"},
                    { userPlace: "23", userName: "Carlos Sanchez", userBooks: "11", userScore: "9.5"},
                    { userPlace: "24", userName: "Carlos Sanchez", userBooks: "11", userScore: "9.5"},
                    { userPlace: "25", userName: "Carlos Sanchez", userBooks: "11", userScore: "9.5"},
                    { userPlace: "26", userName: "Carlos Sanchez", userBooks: "11", userScore: "9.5"},
                    { userPlace: "27", userName: "Carlos Sanchez", userBooks: "11", userScore: "9.5"},
                    { userPlace: "28", userName: "Carlos Sanchez", userBooks: "11", userScore: "9.5"},
                    { userPlace: "29", userName: "Carlos Sanchez", userBooks: "11", userScore: "9.5"},
                    { userPlace: "30", userName: "Carlos Sanchez", userBooks: "11", userScore: "9.5"}
                ]
            }
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
            box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
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