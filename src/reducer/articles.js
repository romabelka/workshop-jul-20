import { DELETE_ARTICLE } from "../constants";
import { normalizedArticles } from "../fixtures";
import { arrToMap } from "../utils";

const defaultArticles = arrToMap(normalizedArticles);

export default (articles = defaultArticles, action) => {
  const { type, payload } = action;

  switch (type) {
    case DELETE_ARTICLE:
      return articles.filter(article => article.id !== payload.id);

    default:
      return articles;
  }
};
