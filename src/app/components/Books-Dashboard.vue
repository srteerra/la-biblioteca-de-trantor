<template>
    <div class="main">
        <div class="container-fluid table responsive books-dashboard__container px-5">
            <h2 class="text-secondary">Libros</h2>
            <div class="row my-4">
                <div class="col col-lg-3 form-group">
                    <input type="text" class="form-control" v-model="filterField" placeholder="Buscar por nombre">
                </div>
                <div class="col form-group">
                    <label>En uso</label>
                    <input type="checkbox" class="" v-model="filterFieldInUse">
                    <label>Disponible</label>
                    <input type="checkbox" class="" v-model="filterFieldAvailable">
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-lg-8">
                    <table class="table table-borderless table-striped text-center">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Titulo</th>
                                <th>Autor</th>
                                <th>Categoria</th>
                                <th>Estatus</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-show="filterSearch(book)" v-for="book in books" v-bind:key="book">
                                <td>{{book.book_id}}</td>
                                <td>{{book.book_title}}</td>
                                <td>{{book.book_author}}</td>
                                <td>{{book.book_category}}</td>
                                <td>{{book.book_status}}</td>
                            </tr>
                        </tbody>
                    </table>   
                </div>
                <div class="col-4">
                   <div class="container p-5 border">
                        <h3 class="text-center mb-3">Administrador</h3>
                        <ul class="nav nav-pills my-4 d-flex justify-content-center" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="pills-bookAdd-tab" data-bs-toggle="pill" data-bs-target="#pills-bookAdd" type="button" role="tab" aria-controls="pills-bookAdd" aria-selected="true">Agregar</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-bookEdit-tab" data-bs-toggle="pill" data-bs-target="#pills-bookEdit" type="button" role="tab" aria-controls="pills-bookEdit" aria-selected="false">Editar</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-bookDelete-tab" data-bs-toggle="pill" data-bs-target="#pills-bookDelete" type="button" role="tab" aria-controls="pills-bookDelete" aria-selected="false">Eliminar</button>
                            </li>
                        </ul>

                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-bookAdd" role="tabpanel" aria-labelledby="pills-bookAdd-tab">
                                <form method="POST">
                                    <label class="form-label fw-bold">Titulo del libro</label>
                                    <input type="text" v-model="booktitleAdd" class="form-control mb-3" name="">
                                    <label class="form-label fw-bold">Autor del libro</label>
                                    <input type="text" v-model="bookauthorAdd" class="form-control mb-3" name="">
                                    <label class="form-label fw-bold">Categoria del libro</label>
                                    <input type="text" v-model="bookcategoryAdd" class="form-control mb-3" name="">
                                    <div class="text-center d-grid">
                                        <button v-on:click.prevent="addBook" type="submit" class="btn btn-dark">Agregar</button>
                                        <p v-if="bookverifyAdd" class="text-success pt-3">Se ha agregado un libro!</p>
                                    </div>
                                </form>
                            </div>
                            <div class="tab-pane fade" id="pills-bookEdit" role="tabpanel" aria-labelledby="pills-bookEdit-tab">
                                <form method="POST">
                                    <label class="form-label fw-bold">ID del libro</label>
                                    <input type="text" v-model="bookidEdit" class="form-control mb-3" name="">
                                    <label class="form-label fw-bold">Titulo del libro</label>
                                    <input type="text" v-model="booktitleEdit" class="form-control mb-3" name="">
                                    <label class="form-label fw-bold">Autor del libro</label>
                                    <input type="text" v-model="bookauthorEdit" class="form-control mb-3" name="">
                                    <label class="form-label fw-bold">Categoria del libro</label>
                                    <input type="text" v-model="bookcategoryEdit" class="form-control mb-3" name="">
                                    <div class="text-center d-grid">
                                        <button v-on:click.prevent="editBook" type="submit" class="btn btn-dark">Editar</button>
                                        <p v-if="bookverifyEdit" class="text-success pt-3">Se ha editado correctamente!</p>
                                    </div>
                                </form>
                            </div>
                            <div class="tab-pane fade" id="pills-bookDelete" role="tabpanel" aria-labelledby="pills-bookDelete-tab">
                                <form method="POST">
                                    <label class="form-label fw-bold">ID del libro</label>
                                    <input type="text" v-model="bookidDelete" class="form-control mb-3" name="">
                                    <div class="text-center d-grid">
                                        <button v-on:click.prevent="deleteBook" type="submit" class="btn btn-dark">Eliminar</button>
                                        <p v-if="bookverifyDelete" class="text-success pt-3">Se ha eliminado correctamente!</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                books: '',

                filterField: '',
                filterFieldInUse: 0,
                filterFieldAvailable: 0,

                booktitleAdd: '',
                bookauthorAdd: '',
                bookcategoryAdd: '',
                bookverifyAdd: 0,

                bookidEdit: '',
                booktitleEdit: '',
                bookauthorEdit: '',
                bookcategoryEdit: '',
                bookverifyEdit: 0,

                bookidDelete: '',
                bookverifyDelete: 0,
            }
        },
        methods: {
            filterSearch(book) {
                console.log(book.book_title+" "+this.filterField+" "+this.filterFieldInUse)
                var show = true

                if(book.book_title.toLocaleLowerCase().indexOf(this.filterField.toLocaleLowerCase()) < 0)
                    show = false
                else if(book.book_status == 'En uso' && this.filterFieldAvailable)
                    show = false
                else if(book.book_status == 'Disponible' && this.filterFieldInUse)
                    show = false
                
                return show
            },
            addBook() {
                try {
                    var dataBookAdd = {
                        book_title: this.booktitleAdd,
                        book_author: this.bookauthorAdd,
                        book_category: this.bookcategoryAdd
                    }
                    axios.post('/api/v1/books', dataBookAdd)
                    this.bookverifyAdd = 1
                } catch (error) {
                    console.log(error)
                }
            },
            editBook() {
                try {
                    var dataBookEdit = {
                        book_title: this.booktitleEdit,
                        book_author: this.bookauthorEdit,
                        book_category: this.bookcategoryEdit
                    }
                    axios.patch(`/api/v1/books/${this.bookidEdit}`, dataBookEdit)
                    this.bookverifyEdit = 1
                } catch (error) {
                    console.log(error)
                }
            },
            deleteBook() {
                try {
                    axios.delete(`/api/v1/books/${this.bookidDelete}`)
                    this.bookverifyDelete = 1
                } catch (error) {
                    console.log(error)
                }
            }
        },
        beforeMount() {
            axios.get('/api/v1/books')
            .then(res=>{
                this.books=res.data
            })
        }
    }
</script>

<style lang="scss">
    .books-dashboard__container{
        width: 70%;
        overflow-y: scroll;
        &::-webkit-scrollbar {
            display: none;
        }
    }
</style>