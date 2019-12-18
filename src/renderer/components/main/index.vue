<template>
    <div id="wrapper">
        <div style="height: 100%; width: 100%">
            <l-map
                style="height: 100%; width: 100%"
                :zoom="mapOpt.zoom"
                :maxZoom="mapOpt.maxZoom"
                :minZoom="mapOpt.minZoom"
                :center="mapOpt.center"
                :maxBounds="mapOpt.maxBounds"
                :bounds="mapOpt.bounds"
                :maxBoundsViscosity="mapOpt.maxBoundsViscosity"
                :attributionControl="mapOpt.attributionControl"
                :crs="mapOpt.crs"
                @update:zoom="zoomUpdated"
                @update:center="centerUpdated"
                @update:bounds="boundsUpdated"
            >
                <l-tile-layer :url="mapOpt.url" :options="mapOpt.tileLayerOpt"></l-tile-layer>
                <l-marker :lat-lng="[marker.y,marker.x]" v-for="(marker,idx) of markers" :key="idx">
                    <l-icon
                        className="markIcon icon-BotW_Shrines"
                        :iconSize="[20,20]"
                        :iconAnchor="[10, 10]"
                        :popupAnchor="[0, -10]"
                        
                    >
                        <div class="headline"></div>
                    </l-icon>
                    <l-popup content="<h1>he222</h1>">Hello!</l-popup>
                </l-marker>
            </l-map>
        </div>
    </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LIcon,LPopup } from "vue2-leaflet";
import { Icon } from "leaflet";
import "leaflet";

import "leaflet/dist/leaflet.css";
// import '~@assets/icomoon/icon.css'

import sourceData from "./data";

let templet;
// console.log(L.CRS.Simple);

// const crs =   Object.assign(L.CRS, {
//     code: "simple",
//     projection: L.Projection.LonLat,
//     transformation: new L.Transformation(1, 0, -1, 0)
//   });

const bounds = new L.LatLngBounds(
  new L.LatLng(-49.875, 34.25),
  new L.LatLng(-206, 221)
);

export default {
  name: "mainmap",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LPopup
  },
  data() {
    return {
      mapOpt: {
        url: "static/Map/{z}_{x}_{y}.png",
        // url: "https://www.duanshaocheng.com/download/Map/{z}_{x}_{y}.png",
        zoom: 4,
        crs: L.CRS.Simple,
        maxZoom: 7,
        minZoom: 0,
        maxBounds: bounds,
        maxBoundsViscosity: 1.0,
        attributionControl: false,
        center: [0, 0],
        bounds: bounds,
        tileLayerOpt: {
          noWrap: true
        }
      },

      search: "1",
      markers: []
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
    },
    test(list) {
      
      return list.filter(item => {

        // 神庙
        return item.markerCategoryId == "1913"; 
      });
    }
  },
  filters: {
    type: list => {
      console.log(templet.search);
      // val.filter(item){
      //     return
      // }
      return val;
    }
  },
  created() {
    templet = this;
  },
  beforeMount() {
    // this.markers = sourceData;
    console.log(this.markers);
    this.markers = this.test(sourceData);
  }
};
</script>

<style>

    @import '/static/icomoon/icon.css';
</style>
