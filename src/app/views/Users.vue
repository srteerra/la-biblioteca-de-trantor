<template>
    <div class="container main__container">
        <Loans class="loans"/>
        <Users/>
    </div>
</template>

<script>
    import Users from '../components/Users-Dashboard';
    export default {
        name: 'users',
        data(){

        },
        components: {
            Users
        }
    };
</script>

<style lang="scss">
    .main__container {
        padding: 200px 10px 100px;
    }
</style>