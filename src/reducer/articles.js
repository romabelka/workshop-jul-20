import { ADD_COMMENT, DELETE_ARTICLE } from "../constants";
import { normalizedArticles } from "../fixtures";
import { arrToMap } from "../utils";

const defaultArticles = arrToMap(normalizedArticles);

export default (articles = defaultArticles, action) => {
  const { type, payload, id } = action;

  switch (type) {
    case DELETE_ARTICLE:
      return articles.filter(article => article.id !== payload.id);

    case ADD_COMMENT:
      const article = articles[payload.articleId];

      return {
        ...articles,
        [payload.articleId]: {
          ...article,
          comments: [...(article.comments || []), id]
        }
      };

    default:
      return articles;
  }
};
