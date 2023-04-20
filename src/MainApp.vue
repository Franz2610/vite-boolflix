<template>
    <main>
      <h2 class="text-center">
        COSA VOGLIAMO VEDERE OGGI?
      </h2>
      <div class="d-flex container">
        <MostPop />
      </div>
      <div class="container">
        <div class="row">
          <CardShowFilm/>
        </div>
        <div class="row">
          <CardShowTV/>
        </div>
      </div>
    </main>
  </template>
  
  <script>
  import { store } from "./store";
  import CardShowFilm from "./CardShowFilm.vue";
  import CardShowTV from "./CardShowTV.vue";
  import MostPop from "./MostPop.vue";
  
  export default {
    name: "MainApp",
    components: {
    CardShowFilm,
    CardShowTV,
    MostPop
    
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
    overflow-y: auto;
  }
  h2{
    color: rgba(255, 255, 255, 0.695);
  }
</style>