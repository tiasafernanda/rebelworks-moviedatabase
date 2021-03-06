import {
  GET_MOVIES_BEGIN,
  GET_MOVIE_DETAIL_BEGIN,
  GET_SIMILAR_MOVIES_BEGIN,
} from '../../constant/type';

export const getMoviesAction = (page) => {
  return {
    type: GET_MOVIES_BEGIN,
    page,
  };
};

export const getMovieDetailAction = (id) => {
  return {
    type: GET_MOVIE_DETAIL_BEGIN,
    id,
  };
};

export const getSimilarMoviesAction = (id) => {
  return {
    type: GET_SIMILAR_MOVIES_BEGIN,
    id,
  };
};
