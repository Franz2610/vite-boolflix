<template>
    <header class="d-flex justify-content-between align-items-center">
      <div class="logo">
        <img class="logo" src="/download.png" alt="boolflix" />
      </div>
      <div>
          <NavUl />
      </div>
      <div class="">
          <input type="text" name="searchBar" id="searchBar" placeholder="Cosa ti piacerebbe vedere?" class="rounded-3" v-model="store.params.query" @keyup.enter="$emit('onSearch')"/>
          <button class="btn btn-danger m-4" @keyup.enter="$emit('onSerch')">Cerca</button>
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
  }
</script>


<style lang="scss" scoped>
header{
  height: 90px;
}
</style>