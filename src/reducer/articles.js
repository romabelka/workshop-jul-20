import { Record } from "immutable";
import { ADD_COMMENT, DELETE_ARTICLE } from "../constants";
import { normalizedArticles } from "../fixtures";
import { arrToMap } from "../utils";

const ArticleModel = Record({
  id: null,
  title: "",
  text: "",
  date: "",
  comments: []
});

const defaultArticles = arrToMap(normalizedArticles, ArticleModel);

export default (articles = defaultArticles, action) => {
  const { type, payload, id } = action;

  switch (type) {
    case DELETE_ARTICLE:
      return articles.delete(payload.id);

    case ADD_COMMENT:
      return articles.updateIn([payload.articleId, "comments"], comments =>
        comments.concat(id)
      );

    default:
      return articles;
  }
};
