<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-3 mt-2" v-for="film in store.films" :key="film.id" :films="film">
        <div class="card">
            <div class="card-head text-center">
                <h3>{{ film.title }}</h3>
            </div>
            <div class="card-body text-center">
                <a href="#"> RIPRODUCI </a>
                <img class="img-card-top" :src="store.baseUrlImg + store.fileSize + film.poster_path" :alt="film.original_title" />
                <p>{{ film.original_title}}</p>
                <img class="flag"  :src="'../public/images/'+ film.original_language + '.png'" :alt="film.original_languages"/>
                <p>{{ film.vote_average / 2}} <i class="fa-solid fa-star"></i></p>
                <p>{{ film.overview }}</p>
            </div>
        </div>
    </div>
</template>
  
  <script>
  import { store } from "./store";
  export default {
    name: "CardShowFilm",
    props: ["films"],
    data() {
      return {
        store,
      }
    }
  }
</script>
  
<style lang="scss" scoped>
.card{
    height: 500px;
    width: 342px;
    background-color: black;
    margin-bottom: 50px;

    &:hover{
        border: 2px solid white;
        color: white;
        transition: 1s;
    }
}
a{
    color: black;
    text-decoration: none;
    border: 1px solid red;
    
    &:hover{
        transition: 2s;
        color: black;
        background-color: red;
    }
}
img:hover{
    display: none;
    transition: 2s;
}
.fa-star{
    color: gold;
}
.flag{
    width: 10%;
}
</style>