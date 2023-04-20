import { reactive } from "vue";

export const store = reactive({
  baseUrl: "https://api.themoviedb.org/3/",
  baseUrlImg: "https://image.tmdb.org/t/p/",
  endPoint: "",
  api_key: "?api_key=9964fc9b74576c3b3bee38b618120d0a",
  searchFilm: "search/movie",
  searchTv : "search/tv",
  searchMostP: '/movie/popular',
  card: {
    query: "",
  },
  shows: [],
  films: [],
});