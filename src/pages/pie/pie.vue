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
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        series: [{
            name: '销量',
            radius : '55%',
            center: ['40%', '50%'],
            type: 'pie',
            data: [
               {value:335, name:'直接访问'},
              {value:310, name:'邮件营销'},
              {value:234, name:'联盟广告'},
              {value:135, name:'视频广告'},
              {value:1548, name:'搜索引擎'}
            ]
        }]
      }
    }
  }
}
</script>

<style lang="sass">

.ec-wrap {
  width: 100%;
  height: 100%;
  .echarts {
    width: 100%;
    height: 100%;
  }
}


</style>

