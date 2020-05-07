<template>
    <v-container grid-list-xl fluid>
        <v-layout row wrap class="layout_dashboard">
            <div class="div_top">
                <ChartModal @modalResult="modalResult"></ChartModal>
            </div>
            <div style="border:1px solid black" :style="{width:width+'%', height:height+'px'}">
            </div>
        </v-layout>
    </v-container>
</template>

<script>
import ChartModal from '@/components/common/ChartModal.vue'
export default {
    name: 'Dashboard',
    components: {
        ChartModal
    },
    props: {
    },
    watch: {
    },
    computed: {
    },
    data() {
        return {
            width: 0,
            height: 0,
        }
    },
    beforeRouteEnter (to, from, next) {
        next()
    },
    created() {
    },
    mounted() {
    },
    updated() {
    },
    methods: {
        modalResult(result){
            this.height = result.height
            this.width = result.width
        },
    },
}
</script>
<style scoped>
.layout_dashboard {
    padding: 20px;
}
.div_top {
    height:85px;
    width:100%;
    text-align: center;
    padding: 20px;
}
</style>