import { get, post, put, del, exGet } from './request';

const URL = '/api';
const AUTH_URL = `${URL}/auth`;
const REVIEW_URL = `${URL}/reviews`;
const USER_URL = `${URL}/users`;
const OMDB_KEY = process.env.API_KEY; //eslint-disable-line 
const OMDB_URL = `https://www.omdbapi.com/?apikey=${OMDB_KEY}`;

export const fetchSignin = certification => post(`${AUTH_URL}/signin`, certification);
export const fetchSignup = certification => post(`${AUTH_URL}/signup`, certification);
export const sendUpdateUser = (data, userId) => put(`${URL}/users/${userId}`, data);
export const fetchVerifyUser = token => get(`${AUTH_URL}/verify`, { 
  headers: {
    Authorization: token
  }
});

export const fetchSorted = (cat, p) => get(`${REVIEW_URL}/sort/${cat}/${p}`);
export const fetchTopTens = () => get(`${REVIEW_URL}/top10`);

export const fetchMovieAvgs = movieId => get(`${REVIEW_URL}/${movieId}`);
export const fetchMovieReviews = movieId => get(`${REVIEW_URL}/movie/${movieId}`);
export const fetchMovieReviewsCat = (movieId, cat) => get(`${REVIEW_URL}/movie/${movieId}/${cat}`);

export const fetchUserReviews = userId => get(`${REVIEW_URL}/user/${userId}`);
export const fetchUserAvg = userId => get(`${REVIEW_URL}/user/avg/${userId}`);
export const fetchReview = reviewId => get(`${REVIEW_URL}/detail/${reviewId}`);

export const sendNewReview = (data, userId) => post(`${REVIEW_URL}/user/${userId}`, data);
export const sendUpdateReview = (review, userId) => put(`${REVIEW_URL}/user/${userId}/${review._id}`, review);
export const sendRemoveReview = (reviewId, userId) => del(`${REVIEW_URL}/user/${userId}/${reviewId}`);

export const sendToWatchlist = (data, userId) => post(`${USER_URL}/${userId}/watchlist`, data);
export const fetchWatchlist = userId => get(`${USER_URL}/${userId}/watchlist`);

export const fetchSearch = query => exGet(`${OMDB_URL}&type=movie&s=${query}`);
export const fetchMovie = imdbID => exGet(`${OMDB_URL}&i=${imdbID}`);

