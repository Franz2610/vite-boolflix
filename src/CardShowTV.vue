<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-3 mt-2" v-for="show in store.shows" :key="show.id" :shows="show">
        <div class="card">
            <div class="card-head text-center">
                <h3>{{ show.name }}</h3>
                <img class="img-card-top" :src=" store.baseUrlImg + store.fileSize + show.poster_path" :alt="show.original_name" />
            </div>
            <div class="card-body text-center">
                <a href="#"> RIPRODUCI <i class="fa-solid fa-circle-play"></i></a>
                <p>{{ show.original_name}}</p>
                <img class="flag mb-3" :src="'../public/images/'+ show.original_language + '.png'" :alt="show.original_language"/>
                <p> Voto : <i class="fa-regular fa-star" v-for="(n,index) in Math.round(show.vote_average / 2)" :key="index"> </i> </p>
                <h5>Descrizione</h5>
                <p>{{ show.overview }} </p>
                <div class="alert alert-danger" v-if="store.errors.tvshow">
                    {{ store.errors.tvshow }}
                </div>
                <div class="alert alert-success" v-if="store.loaders.tvshow">
                    Loading...
                </div>
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
    height: 500px;
    width: 342px;
    background-color: black;
    margin-bottom: 50px;
    color: white;
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
}
.fa-star{
    color: gold;
}
.flag{
    width: 10%;
}
</style>