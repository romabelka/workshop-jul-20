import {
  ADD_COMMENT,
  CHANGE_DATE_RANGE,
  CHANGE_SELECTION,
  DELETE_ARTICLE,
  ERROR,
  FETCH_ALL_ARTICLES,
  FETCH_ARTICLE,
  INCREMENT,
  START,
  SUCCESS
} from "../constants";

export const increment = () => ({
  type: INCREMENT
});

export const deleteArticle = id => ({
  type: DELETE_ARTICLE,
  payload: { id }
});

export const changeDateRange = dateRange => ({
  type: CHANGE_DATE_RANGE,
  payload: { dateRange }
});

export const changeSelection = selected => ({
  type: CHANGE_SELECTION,
  payload: { selected }
});

export const addComment = (comment, articleId) => ({
  type: ADD_COMMENT,
  payload: { comment, articleId },
  generateId: true
});

/*
export const fetchAllArticles = () => ({
  type: FETCH_ALL_ARTICLES,
  callAPI: "/api/article"
});
*/

export const fetchAllArticles = () => async dispatch => {
  dispatch({
    type: FETCH_ALL_ARTICLES + START
  });

  try {
    const res = await fetch("/api/article");
    const response = await res.json();

    dispatch({
      response,
      type: FETCH_ALL_ARTICLES + SUCCESS
    });
  } catch (error) {
    dispatch({
      error,
      type: FETCH_ALL_ARTICLES + ERROR
    });
  }
};

export const fetchArticle = id => ({
  type: FETCH_ARTICLE,
  payload: { id },
  callAPI: `/api/article/${id}`
});
