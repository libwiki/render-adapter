<script lang="ts" setup>
import EchartDemo from "../views/EchartDemo.vue";
import {Render} from "../render/Render";
import {TencentMapAdapter} from "../render/adapters/tencentMap/TencentMapAdapter";
import {onMounted, ref} from "vue";

const tMapAdapter=new TencentMapAdapter()
const render = new Render(tMapAdapter)
const mainRef = ref()

onMounted(()=>{
  if(mainRef.value){
    // render.render(tMapAdapter.getAdapterName(),{
    //
    // })
  }
})



</script>

<template>
  <div ref="mainRef"></div>
  <EchartDemo/>
</template>


<style scoped>

</style>
