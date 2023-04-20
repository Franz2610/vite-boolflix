<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-3 mt-2" v-for="film in store.films" :key="film.id" :film="film">
        <div class="card">
            <div class="card-head text-center">
                <h3>{{ film.title }}</h3>
            </div>
            <div class="card-body text-center">
                <a href="#"> RIPRODUCI</a>
                <p>{{ film.original_title}}</p>
                <p>{{ film.original_language}}</p>
                <p>{{ film.vote_average}}</p>
            </div>
        </div>
    </div>
</template>
  
  <script>
  import { store } from "./store";
  export default {
    name: "CardShowFilm",
    props: ["film"],
    data() {
      return {
        store,
      };
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