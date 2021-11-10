<template>
    <div class="container main__container">
        <Loans class="loans"/>
        <Users/>
    </div>
</template>

<script>
    import Loans from '../components/Loans-Dashboard';
    import Users from '../components/Users-Dashboard';
    export default {
        name: 'admin',
        data(){

        },
        components: {
            Loans,
            Users
        }
    };
</script>

<style lang="scss">
    .main__container {
        padding: 200px 10px 100px;

        .loans{
            margin-bottom: 100px;
        }
    }
</style>