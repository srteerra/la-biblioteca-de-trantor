<template>
  <div class="main__container">
      <Books/>
  </div>
</template>

<script>
    import Books from '../components/Books-Dashboard';
    export default {
        name: 'books',
        data(){

        },
        components: {
            Books
        }
    };
</script>

<style lang="scss">
    .main__container {
        padding: 200px 10px 100px;
    }
</style>