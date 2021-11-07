<template>
    <div class="container lons__container">
        <loans/>
    </div>
</template>

<script>
    import Loans from '../components/Loans.vue';
    export default {
        name: 'admin',
        data(){

        },
        components: {
            Loans
        }
    };
</script>

<style lang="scss">
    .lons__container {
        padding: 300px 10px 100px;
        width: 70%;
    }
</style>