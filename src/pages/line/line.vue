<template>
  <div class="ec-wrap">
    <v-chart :options="polar" />
  </div>
</template>

<script>
export default {
  data () {

    return {
      polar:{
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'line',
            data: [5, 20, 36, 10, 10, 20]
        }]
      }
    }
  }
}
</script>

<style lang="sass">

.ec-wrap {

  .echarts {
    width: 100%;
    height: 100%;
  }
}


</style>

