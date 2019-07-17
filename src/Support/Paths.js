const isProduction = process.env.NODE_ENV === 'production';
const prefix = '/' + (isProduction ? 'movie-list/' : '');

export const PATH_HOME = prefix;
export const PATH_SEARCH = `${prefix}search`;
export const PATH_MOVIE = `${prefix}movie/:id`;

export const makeSearchUrl = (query) => encodeURI(`${prefix}search?q=${query}`);
export const makeMovieUrl = (movieId) => `${prefix}movie/${movieId}`;
