import { Record } from "immutable";
import {
  ADD_COMMENT,
  DELETE_ARTICLE,
  ERROR,
  FETCH_ALL_ARTICLES,
  FETCH_ARTICLE,
  START,
  SUCCESS
} from "../constants";
import { arrToMap } from "../utils";

const ArticleModel = Record({
  id: null,
  title: "",
  text: "",
  date: "",
  loading: false,
  comments: []
});

const ReducerModel = Record({
  entities: arrToMap([], ArticleModel),
  isLoading: false,
  isLoaded: false,
  error: null
});

export default (articles = new ReducerModel(), action) => {
  const { type, payload, id, response, error } = action;

  switch (type) {
    case DELETE_ARTICLE:
      return articles.deleteIn(["entities", payload.id]);

    case ADD_COMMENT:
      return articles.updateIn(
        ["entities", payload.articleId, "comments"],
        comments => comments.concat(id)
      );

    case FETCH_ALL_ARTICLES + START:
      return articles.set("isLoading", true);

    case FETCH_ALL_ARTICLES + ERROR:
      return articles
        .set("isLoading", false)
        .set("isLoaded", false)
        .set("error", error);

    case FETCH_ALL_ARTICLES + SUCCESS:
      return articles
        .set("entities", arrToMap(response, ArticleModel))
        .set("isLoading", false)
        .set("isLoaded", true)
        .set("error", null);

    case FETCH_ARTICLE + START:
      return articles.setIn(["entities", payload.id, "loading"], true);

    case FETCH_ARTICLE + SUCCESS:
      return articles.setIn(
        ["entities", payload.id],
        new ArticleModel(response)
      );

    default:
      return articles;
  }
};
