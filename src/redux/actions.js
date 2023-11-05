import {ADD_MOVIE, GET_MOVIES_LIST} from './constant_names';

export const fetchMoviesList = () => dispatch => {
  const apiURL = `https://www.omdbapi.com/?s=Batman&page=2&apikey=77f8da7b`;
  fetch(apiURL)
    .then(res => res.json())
    .then(resJson => {
      dispatch({
        type: GET_MOVIES_LIST,
        payload: resJson.Search,
      });
    })
    .catch(function (e) {
      console.warn('error', e);
    });
};

export const addMovie = (movies) => dispatch => {
  dispatch({
    type: ADD_MOVIE,
    payload: movies,
  });
};
