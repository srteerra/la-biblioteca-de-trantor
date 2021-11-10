<template>
    <div class="container main__content">
        <Revisions/>
    </div>
</template>

<script>
import Revisions from '../components/Revisions-Dashboard';

export default {
    name: 'reviewer',
    data(){

    },
    components:{
        Revisions
    }
}
</script>

<style lang="scss">
    .main__content {
        padding: 200px 10px 100px;
        .revisions{
            margin-bottom: 100px;
        }
    }
</style>