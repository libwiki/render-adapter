<!--<script setup>-->
<!--import SphericalMercator from "@mapbox/sphericalmercator"-->
<!--// https://github.com/mapbox/sphericalmercator/issues/22-->
<!--// https://lbs.amap.com/demo/javascript-api/example/axis/transformate-between-coordinates-of-lnglat-and-geographical-pixels-->
<!--const zoom = 16;-->
<!--const merc = new SphericalMercator();-->
<!--const ll = [116.512402, 39.867054]-->
<!--const px = merc.px(ll, zoom)-->
<!--console.log('?', px, merc.ll(px, zoom))-->

<!--const px0 = merc.px([0, 0], zoom)-->
<!--console.log('px0', merc.ll(px0, zoom), px0)-->
<!--const px_10 = merc.px([-10, -10], zoom)-->
<!--console.log('px-10', merc.ll(px_10, zoom), px_10)-->

<!--const px10 = merc.px([10, 10], zoom)-->
<!--console.log('px10', merc.ll(px10, zoom), px10)-->


<!--const bbox = merc.bbox(...[256, 256], zoom)-->
<!--console.log('bbox', merc.xyz(bbox, zoom), bbox)-->

<!--</script>-->
<script lang="ts">
enum DemoType {
  a,
  b,
}

enum DemoType2 {
  e,
  a,
  b,
}

</script>

<template>
  <router-view/>
</template>

<style scoped>
</style>
