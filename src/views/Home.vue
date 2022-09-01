<script setup>

import {onMounted, ref} from "vue";
import echarts from "../utils/Echarts";
import {SVGRenderer} from "echarts/renderers";

const mainRef = ref()
onMounted(() => {
  initEcharts()
})

function initEcharts() {
  if (!mainRef.value) {
    return
  }

  console.log(echarts)

  const myChart = echarts.init(mainRef.value, null, {
    width: 600,
    height: 400,
    renderer: 'svg',
  });
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption({
    title: {
      text: '圆环图的例子',
      left: 'center',
      // top: 'center'
    },
    series: [
      {
        type: 'pie',
        data: [
          {
            value: 335,
            name: 'A'
          },
          {
            value: 234,
            name: 'B'
          },
          {
            value: 1548,
            name: 'C'
          }
        ],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
          emphasis: {
            show: true,
            fontSize: '30',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        emphasis: {
          position: 'center',
          label: {
            show: true,
            fontSize: '30',
            fontWeight: 'bold'
          }
        },
        radius: ['40%', '70%']
      }
    ]
  })



}

</script>

<template>
  <div ref="mainRef"></div>
</template>


<style scoped>

</style>