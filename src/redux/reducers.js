import {ADD_MOVIE, GET_MOVIES_LIST} from './constant_names';

const initialState = {
  Movies: [],
  Loading: false,
};

function MoviesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES_LIST:
      return {...state, Movies: action.payload};
    case ADD_MOVIE:
      return {...state, Movies: action.payload};
    default:
      return state;
  }
}
export default MoviesReducer;
