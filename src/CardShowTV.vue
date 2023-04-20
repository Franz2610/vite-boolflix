<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-3 mt-2" v-for="show in store.shows" :key="show.id" :shows="show">
        <div class="card">
            <div class="card-head text-center">
                <h3>{{ show.name }}</h3>
                <img class="img-card-top" :src=" store.baseUrlImg + store.fileSize + show.poster_path" :alt="show.original_name" />
            </div>
            <div class="card-body text-center">
                <a href="#"> RIPRODUCI</a>
                <p>{{ show.original_name}}</p>
                <img class="flag" :src="'../public/'+ show.original_language + '.png'" :alt="film.original_language"/>
                <p>{{ (show.vote_average / 2 )}} <i class="fa-solid fa-star"></i></p>
                <p>{{ show.overview }} </p>
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