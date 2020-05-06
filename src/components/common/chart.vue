<template>
    <div id="chart">
        <apexchart type="scatter" :options="chartOptions" :series="series"></apexchart>
      </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
export default {
        name: 'chart',
        components: {
          apexchart: VueApexCharts,
        },
        props: {
            series: {
                type: Array
            }
        },
        data() {
            return {
                chartOptions: {
                    chart: {
                        type: 'scatter',
                        zoom: {
                            type: 'xy'
                        }
                    },
                    dataLabels: {
                        enabled: false
                    },
                    grid: {
                        xaxis: {
                            lines: {
                                show: true
                            }
                        },
                        yaxis: {
                            lines: {
                                show: true
                            }
                        },
                    },
                    xaxis: {
                        type: 'datetime',
                    },
                    yaxis: {
                        max: 2000
                    }
                },
          
            }
        },
        methods: {
            generateDayWiseTimeSeries(baseval, count, yrange) {
                var i = 0;
                var series = [];
                while (i < count) {
                var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
            
                series.push([baseval, y]);
                baseval += 86400000;
                i++;
                }
                return series;
            }
        },
}
</script>

<style>

</style>