<template>
<<<<<<< HEAD
    
=======
    <div class="main">
        <h2 class="text-secondary">Revisiones</h2>
        <div class="container-fluid table_responsive revisions-dashboard__container">
            <table class="table table-borderless table-striped text-center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nickname</th>
                        <th>Revision 1</th>
                        <th>Revision 2</th>
                        <th>Revision 3</th>
                        <th>Revision 4</th>
                        <th>Revision 5</th>
                        <th>Revision 6</th>
                        <th>Revision 7</th>
                        <th>Revision 8</th>
                        <th>Revision 9</th>
                        <th>Revision 10</th>
                        <th>Revision 11</th>
                        <th>Revision 12</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="revision in revisions1" v-bind:key="revision">
                        <td>{{revision.user_id}}</td>
                        <td>{{revision.user_nickname}}</td>
                        <td>{{revision.revision_1}}</td>
                        <td>{{revision.revision_2}}</td>
                        <td>{{revision.revision_3}}</td>
                        <td>{{revision.revision_4}}</td>
                        <td>{{revision.revision_5}}</td>
                        <td>{{revision.revision_6}}</td>
                        <td>{{revision.revision_7}}</td>
                        <td>{{revision.revision_8}}</td>
                        <td>{{revision.revision_9}}</td>
                        <td>{{revision.revision_10}}</td>
                        <td>{{revision.revision_11}}</td>
                        <td>{{revision.revision_12}}</td>
                    </tr>
                </tbody>
            </table>   
        </div>
    </div>
>>>>>>> 84074ef32665c1670fd0dbfe9df48392d3f48759
</template>

<script>
import axios from 'axios'
export default {
    name: 'revisions',
    data(){
        return{
            
        }
    },
    
}
</script>

<style lang="scss">
    
</style>