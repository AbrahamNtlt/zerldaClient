<template>
  <div id="wrapper">
    <!-- <p>{{url | type }}</p> -->
    <!-- <img id="logo" src="~@/assets/logo.png" alt="electron-vue"> -->
    <div style="height: 100%; width: 100%">
      <div class="info" style="height: 15%">
        <p>{{url | type }}</p>
        <span>Center: {{ center }}</span>
        <span>Zoom: {{ zoom }}</span>
        <span>Bounds: {{ bounds }}</span>
      </div>
      <l-map
        style="height: 80%; width: 100%"
        :zoom="mapOpt.zoom"
        :maxZoom="mapOpt.maxZoom"
        :minZoom="mapOpt.minZoom"
        :center="mapOpt.center"
        @update:zoom="zoomUpdated"
        @update:center="centerUpdated"
        @update:bounds="boundsUpdated"
      >
        <l-tile-layer :url="mapOpt.url" :options="mapOpt.tileLayerOpt">
          <!-- <l-marker :lat-lng="[0, 0]">
                        <l-icon :icon-anchor="staticAnchor" class-name="someExtraClass">
                            <div class="headline">{{ customText }}</div>
                            <img src="static/images/layers.png">
                        </l-icon>
          </l-marker>-->
        </l-tile-layer>
      </l-map>
    </div>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

let templet;

export default {
  name: "mainmap",
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data() {
    return {
      mapOpt: {
        url: "static/Map/{z}_{x}_{y}.png",
        // url: "https://www.duanshaocheng.com/download/Map/{z}_{x}_{y}.png",
        zoom: 4,
        maxZoom:7,
        minZoom:0,
        center: [0, 0],
        bounds: null,
        tileLayerOpt: {
          noWrap: true
        }
      },

      search: "1",
      markers:[]
    };
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    }
  },
  filters: {
    type: val => {
      console.log(templet.search);

      return val;
    }
  },
  created() {
    templet = this;
  }
};
</script>

<style>
</style>
