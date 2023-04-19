<template>
  <div class="wrapper">
    <HeaderApp @Search="searchFilm" />
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
      const urlF = store.baseUrl + store.searchFilm + store.api_key + store.endPoint;
      const urlS = store.baseUrl + store.searchTv+ store.api_key + store.endPoint;
      let searched = {};
      let params = {};
      for (let key in store.card) {
        if (store.card[key]) {
          params[key] = store.card[key];
        }
        if (Object.keys(params).length > 0) {
          searched.params = params;
        }
      }
      axios.get(urlF, searched).then((res) => {
        store.card = res.data.results;
      });
    },
  },
  mounted() {
    store.endPoint = "&language=en-US&query=a&page=1&include_adult=false";
  },
};
</script>

<style lang="scss" scoped>

</style>