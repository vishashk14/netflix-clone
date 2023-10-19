const key = "630234b93905db57351212f4d7af2711";

const request = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-us&page=1`, //working
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-us&page=1`, // working
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-us&page=1`, // working
  requestpopularTwo: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-us&page=2`, // not working
  requestVideos: `https://api.themoviedb.org/3/movie/{movie_id}/recommendations?api_key=${key}&language=en-US&page=1
`,
  //more end point API for future
  // requestVideo: `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=Y${key}&language=en-US`,
  //Get Movie Credits: //  https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=YOUR_API_KEY
  //search  //https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&language=en-US&query=SEARCH_QUERY&page=1
};

export default request;
