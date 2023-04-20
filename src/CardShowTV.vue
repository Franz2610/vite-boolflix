<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-3 mt-2" v-for="show in store.shows" :key="show.id" :shows="show">
        <div class="card">
            <div class="card-head text-center">
                <h3>{{ show.name }}</h3>
                <img class="img-card-top" :src="store.baseUrlImg+store.fileSize+show.poster_path" :alt="show.original_name" />
            </div>
            <div class="card-body text-center">
                <a href="#"> RIPRODUCI</a>
                <p>{{ show.original_name}}</p>
                <p>{{ show.original_language}}</p>
                <p>{{ show.vote_average}}</p>
            </div>
        </div>
    </div>
</template>
  
  <script>
  import { store } from "./store";
  export default {
    name: "CardShowTV",
    props: ["shows"],
    data() {
      return {
        store,
      }
    },
  }
</script>
  
<style lang="scss" scoped>
.card{
    height: 250px;
    background-color: black;

    &:hover{
        border: 2px solid white;
        color: white;
        transition: 1s;
    }
}
a{
    color: black;
    text-decoration: none;
    
    &:hover{
        transition: 2s;
        color: red;
    }
}
</style>