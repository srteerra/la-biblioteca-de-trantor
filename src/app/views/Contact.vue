<template>
    <div class="container contact__container px-4 px-md-2">
        <div class="row pb-5">
            <h1 class="fs-1 fw-bold">Contacto</h1>
        </div>
        <div class="row pb-5">
            <p class="lh-lg text-justify fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, deserunt eaque. Natus, aut impedit earum dolorum quo ex, voluptatum cum, sapiente mollitia optio quia rerum laudantium possimus obcaecati in saepe. Donec facilisis arcu vitae elit viverra, sed faucibus leo convallis. Vivamus vehicula sollicitudin turpis ut dignissim. Etiam ut massa ipsum. Etiam purus arcu, molestie eu turpis quis, efficitur porttitor urna. Sed sit amet sodales sem, vitae sollicitudin risus. Vestibulum ac metus ipsum. In eu mauris ac arcu accumsan porta.</p>
        </div>
        <div class="row pt-5">
            <form action="">
                <div class="mb-5">
                    <label for="subjectcontactInput" class="form-label pb-3 fs-4 fw-bold">Asunto</label>
                    <input v-model="subject" type="text" class="form-control" id="subjectcontactInput" placeholder="Ingresa el asunto...">
                </div>
                <div class="mb-5">
                    <label for="emailcontactInput" class="form-label pb-3 fs-4 fw-bold">Correo Electronico</label>
                    <input v-model="email" type="email" class="form-control" id="emailcontactInput" placeholder="Ingresa tu correo electronico...">
                </div>
                <div class="mb-5">
                    <label for="messagecontactTextarea" class="form-label pb-3 fs-4 fw-bold">Mensaje</label>
                    <textarea v-model="message" class="form-control" id="messagecontactTextarea" placeholder="Escribenos tu mensaje..." rows="5"></textarea>
                </div>
                <div class="">
                    <button class="btn btn-dark px-5 py-3 rounded-pill col-12 col-lg-3" type="submit" :disabled="contactSubmitButton">Enviar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'contact',
        data() {
            return {
                subject:'',
                email:'',
                message:''
            }
        },
        computed:{
            contactSubmitButton(){
                if (this.subject == "" | this.email == "" | this.message == "") 
                    return true
                else 
                    return false
            }
        }
    }
</script>

<style lang="scss">
    .contact__container {
        padding: 300px 0px;
    }
</style>