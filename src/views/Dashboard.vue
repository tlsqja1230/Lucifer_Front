<template>
    <v-container grid-list-xl fluid>
        <v-layout row wrap>
            <v-flex class="btn-group">
                <v-btn v-for="(item, index) in chartBtnList" :key="index" class="ma-2" @click="clickChartBtn(item)">{{item.name}}</v-btn>
                    <v-expand-transition>
                        <v-card
                            v-if="expand"
                            max-width="300"
                            class="mx-auto"
                            outlined
                        >
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title class="headline mb-1">{{selChartItem.name}}</v-list-item-title>
                                    <v-text-field flat label="차트너비(px)" class="hidden-sm-and-down" v-model="selChartItem.width"/>
                                    <v-text-field flat label="차트높이(px)" class="hidden-sm-and-down" v-model="selChartItem.height"/>
                                </v-list-item-content>
                            </v-list-item>
                            <v-card-actions>
                                <v-btn text @click="createChart()">확인</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-expand-transition>
            </v-flex>
            <v-flex>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Dashboard',
    components: {
    },
    props: {
    },
    watch: {
    },
    computed: {
    },
    data() {
        return {
            expand: false,
            chartBtnList: [
                {id:'CPU', name: 'CPU'},
                {id:'XLOG', name: 'XLOG'},
                {id:'TPS', name: 'TPS'},
                {id:'ERROR RATE', name: 'ERROR RATE'},
                {id:'ACTIVE SERVICE', name: 'ACTIVE SERVICE'},
            ],
            selChartItem: {
                id: '',
                name: '',
                width: '',
                height: ''
            }
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
        clickChartBtn(item){
            this.selChartItem = item
            this.expand = !this.expand
        },
        createChart(){
            this.selChartItem
        }
    },
}
</script>
<style scoped>
.btn-group {
    height:85px;
    width:100%;
    text-align:center;
}
</style>