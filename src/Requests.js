const key = "540329d9571cab65e94d3477681553f1";

const requests = {
	requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
	requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
	requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
	requestTrending: `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`,
	requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include-adult=false`,
	requestComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=35`,
	requestDocumentary: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=99`,
	requestDrama: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=18`,
	requestAnimated: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=16`,

	review: "https://api.themoviedb.org/3/movie/{movie.id}/reviews?api_key=540329d9571cab65e94d3477681553f1&language=en-US&page=1",
};

export default requests;
