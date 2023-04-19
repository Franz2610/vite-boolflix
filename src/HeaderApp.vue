<template>
    <header class="d-flex justify-content-between align-items-center">
      <div class="logo">
        <img class="logo" src="/download.png" alt="boolflix" />
      </div>
      <div>
        <NavUl />
      </div>
      <div class="search-zone">
        <input type="text" name="searchBar" id="searchBar" placeholder="Cerca il tuo film" class="rounded-2 p-1" @input="search" v-model.trim="store.card.query"
        />
        <button class="btn btn-danger m-4" @click="search">Cerca</button>
      </div>
    </header>
</template>
  
<script>
import NavUl from "./NavUl.vue";
  import { store } from "./store";
  export default {
    name: "HeaderApp",
    components: {
      NavUl
    },
    data() {
      return {
        store,
      };
    },
    methods: {
      search() {
        this.$emit("search");
      },
    },
  }
</script>


<style lang="scss" scoped>

</style>