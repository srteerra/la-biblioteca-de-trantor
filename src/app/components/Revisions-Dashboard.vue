<template>
    <div class="main">
        <h2 class="text-secondary">Revisiones</h2>
        <div class="container table responsive revisions-dashboard__container">
            <table class="table table-borderless table-striped text-center">
                <thead>
                    <tr>
                        <th>Usuario</th>
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
                    <tr v-for="(revision) in revisions" v-bind:key="revision">
                        <td>{{revision.user}}</td>
                        <td>{{revision.rev_1}}</td>
                        <td>{{revision.rev_2}}</td>
                        <td>{{revision.rev_3}}</td>
                        <td>{{revision.rev_4}}</td>
                        <td>{{revision.rev_5}}</td>
                        <td>{{revision.rev_6}}</td>
                        <td>{{revision.rev_7}}</td>
                        <td>{{revision.rev_8}}</td>
                        <td>{{revision.rev_9}}</td>
                        <td>{{revision.rev_10}}</td>
                        <td>{{revision.rev_11}}</td>
                        <td>{{revision.rev_12}}</td>
                    </tr>
                </tbody>
            </table>   
        </div>
    </div>
</template>

<script>
export default {
    name: 'revisions',
    data(){
        return{
            revisions:[
                {user:"123",rev_1:"9",rev_2:"10",rev_3:"8",rev_4:"10",rev_5:"9",rev_6:"10",rev_7:"10",rev_8:"9",rev_9:"10",rev_10:"8",rev_11:"10",rev_12:"10"},
                {user:"112",rev_1:"8",rev_2:"8",rev_3:"9",rev_4:"9",rev_5:"9",rev_6:"10",rev_7:"8",rev_8:"9",rev_9:"9",rev_10:"8",rev_11:"10",rev_12:"9"},
                {user:"837",rev_1:"9",rev_2:"10",rev_3:"8",rev_4:"10",rev_5:"9",rev_6:"10",rev_7:"10",rev_8:"9",rev_9:"10",rev_10:"8",rev_11:"10",rev_12:"10"},
                {user:"012",rev_1:"9",rev_2:"10",rev_3:"8",rev_4:"10",rev_5:"9",rev_6:"10",rev_7:"10",rev_8:"9",rev_9:"10",rev_10:"8",rev_11:"10",rev_12:"10"},
                {user:"111",rev_1:"9",rev_2:"10",rev_3:"8",rev_4:"10",rev_5:"9",rev_6:"10",rev_7:"10",rev_8:"9",rev_9:"10",rev_10:"8",rev_11:"10",rev_12:"10"},
                {user:"123",rev_1:"9",rev_2:"10",rev_3:"8",rev_4:"10",rev_5:"9",rev_6:"10",rev_7:"10",rev_8:"9",rev_9:"10",rev_10:"8",rev_11:"10",rev_12:"10"},
                {user:"123",rev_1:"9",rev_2:"10",rev_3:"8",rev_4:"10",rev_5:"9",rev_6:"10",rev_7:"10",rev_8:"9",rev_9:"10",rev_10:"8",rev_11:"10",rev_12:"10"},
                {user:"123",rev_1:"9",rev_2:"10",rev_3:"8",rev_4:"10",rev_5:"9",rev_6:"10",rev_7:"10",rev_8:"9",rev_9:"10",rev_10:"8",rev_11:"10",rev_12:"10"},
                {user:"123",rev_1:"9",rev_2:"10",rev_3:"8",rev_4:"10",rev_5:"9",rev_6:"10",rev_7:"10",rev_8:"9",rev_9:"10",rev_10:"8",rev_11:"10",rev_12:"10"}
            ]
        }
    }
}
</script>

<style lang="scss">
    .revisions-dashboard__container{
        max-height: 300px;
        overflow-y: scroll;
        &::-webkit-scrollbar {
            display: none;
        }
    }
</style>