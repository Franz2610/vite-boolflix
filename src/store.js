import { reactive } from "vue";

export const store = reactive({
  baseUrl: "https://api.themoviedb.org/3/",
  baseUrlImg: "https://image.tmdb.org/t/p/",
  fileSize: '342w',
  endPoint: {
    movie: "search/movie",
    tv : "search/tv",
    mostP: 'movie/popular'
  },
  params: {
    query: '',
    api_key: "9964fc9b74576c3b3bee38b618120d0a",
  },
  shows: [],
  films: [],
});