<template>
  <div class="wrapper">
    <HeaderApp @onSearch="searchFilm , searchTV"/>
    <MainApp />
  </div>
</template>

<script>
import axios from "axios";
import { store } from "./store.js";
import HeaderApp from "./HeaderApp.vue";
import MainApp from "./MainApp.vue";
export default {
  name: "App",
  components: {
    HeaderApp,
    MainApp
},
  data() {
    return {
      store,
    };
  },
  methods: {
    searchFilm() {
      const url = store.baseUrl + store.endPoint.film ;
      axios.get(url, { params: store.params}).then((res) => {
        store.films = res.data.results;
      });
    },
    searchTV() {
      const url = store.baseUrl + store.endPoint.tv;
      axios.get(url, { params: store.params}).then((res) => {
        store.shows = res.data.results;
        console.log(res.data);
      });
    }
  },
  mounted() {
    this.searchTV;
    this.searchFilm
  },
};
</script>

<style lang="scss" scoped>

</style>
