<template>
<div>

</div>
</template>

<script>
import axios from "axios";
import { store } from "./store.js";
    export default {
        name:'MostPop',
        data() {
    return {
      store,
    };
  },
  methods: {
    getMostP() {
      const url = store.baseUrl + store.endPoint.mostP ;
      axios.get(url, { params: store.params}).then((res) => {
        this.store.films = res.data.results;
      });
    },
  },
  mounted() {
    this.getMostP();
  }
    }
</script>

<style lang="scss" scoped>
</style>