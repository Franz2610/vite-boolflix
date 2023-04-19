<template>
    <main>
      <h2 class="text-center">
        COSA VOGLIAMO VEDERE OGGI?
      </h2>
      <div class="container">
        <div class="row">
          <CardShow v-for="card in store.card" :key="card.id" :card="card"/>
        </div>
      </div>
    </main>
  </template>
  
  <script>
  import { store } from "./store";
  import CardShow from "./CardShow.vue";
  
  export default {
    name: "MainApp",
    components: {
      CardShow,
    },
    data() {
      return {
        store,
      };
    },
  };
  </script>
  
<style lang="scss" scoped>
  main {
    background-color: black;
    height: 1500px;
  }
  h2{
    color: rgba(255, 255, 255, 0.695);
  }
</style>