<template>
  <div class="main__container">
      <Loans/>
  </div>
</template>

<script>
    import Loans from '../components/Loans-Dashboard';
    export default {
        name: 'loans',
        data(){

        },
        components: {
            Loans
        }
    };
</script>

<style lang="scss">
    .main__container {
        padding: 200px 10px 100px;
    }
</style>