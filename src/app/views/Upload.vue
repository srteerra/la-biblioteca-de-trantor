<template>
    <div class="container upload__cont">
        <div class="mt-5 row">
            <h1 class="fs-1 fw-bold">Califica tu aprendizaje</h1>
            <p class="fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi unde exercitationem omnis neque doloremque delectus obcaecati quasi, repellat rerum sequi magni officia nobis vitae aperiam fugiat aspernatur sint atque? Molestiae?</p>
        </div>
        <section class="py-5 row">
            <div class="bg-white p-5 border rounded-5">
                <section class="p-4 d-flex justify-content-center w-100">
                    <div class="file-upload-wrapper">
                        <div class="file-upload">
                            <div class="file-upload-message">
                                <i class="fas fa-cloud-upload-alt file-upload-cloud-icon"></i>
                                <p class="file-upload-default-message">Arrastra y suelta un archivo aqui o da click</p>
                                <p class="file-upload-main-error"></p>
                            </div>
                            <div class="file-upload-mask"></div>
                            <ul class="file-upload-errors"></ul>
                            <input type="file" id="input-file-now" class="file-upload-input" data-mdb-file-upload="file-upload" accept="">
                            <div class="file-upload-previews"></div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'upload',
        data() {
            return {}
        }
    }
</script>

<style lang="scss">
    .upload__cont {
        padding: 250px 0 150px 0;
    }
</style>
