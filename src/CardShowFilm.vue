<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-3 mt-2" v-for="card in store.films" :key="card.films.id" :card="card.films">
        <div class="card">
            <div class="card-head text-center">
                <h3>{{ card.title }}</h3>
            </div>
            <div class="card-body text-center">
                <a href="#"> RIPRODUCI</a>
                <p>{{ card.original_title}}</p>
                <p>{{ card.original_language}}</p>
                <p>{{ card.vote_average}}</p>
            </div>
        </div>
    </div>
</template>
  
  <script>
  export default {
    name: "CardShowFilm",
    props: ["card"],
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