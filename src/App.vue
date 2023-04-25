<template>
  <div class="wrapper">
    <HeaderApp @on-search="getData"/>
    <div>
      <MainApp />
    </div>
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
    MainApp,
},
  data() {
    return {
      store,
    };
  },
  methods: {
    searchFilm() {
      const url = store.baseUrl + store.endPoint.movie ;
      axios.get(url, { params: store.params}).then((res) => {
        this.store.films = res.data.results;
      }).catch((error) =>{
        this.store.errors.tvmovie = error.message
      }).finally(() =>{
        this.store.loaders.tvmovie =false;
      })
    },
    searchTV() {
      const url = store.baseUrl + store.endPoint.tv;
      axios.get(url, { params: store.params}).then((res) => {
        this.store.shows = res.data.results;
      }).catch((error) =>{
        this.store.errors.tvshow = error.message
      }).finally(() =>{
        this.store.loaders.tvshow = false;
      })
    },
    getData(){
      this.store.errors.tvmovie = '';
      this.store.errors.tvshow = '';
      this.store.loaders.tvmovie = true;
      this.store.loaders.tvshow = true;
      this.searchFilm();
      this.searchTV();
    },
   /* getMostP() {
      const url = store.baseUrl + store.endPoint.mostP ;
      axios.get(url, { params: store.params}).then((res) => {
        this.store.films = res.data.results;
      });
    },*/
  },
  mounted() {
    //this.searchFilm();
    //this.searchTV();
    //this.getMostP();
  },
};
</script>

<style lang="scss" scoped>

</style>
