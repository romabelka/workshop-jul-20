import React, { useState } from "react";
import Article from "../article";
import { useAccordion } from "../../hooks/accordion";

function ArticleList({ articles, defaultOpenId }) {
  const { isOpen, setOpenId } = useAccordion(defaultOpenId);
  const [error, setError] = useState();
  const [foo, setFoo] = useState({ bar: { baz: "hi" } });

  return (
    <div>
      {articles.map(article => (
        <Article
          key={article.id}
          article={article}
          isOpen={isOpen(article.id)}
          onBtnClick={setOpenId(article.id)}
        />
      ))}
    </div>
  );
}

/*
class ArticleList extends Component {
  state = {
    openArticleId: this.props.defaultOpenId
  };

  render() {
    if (this.state.error) {
      return <h3>Some error</h3>;
    }
    return (
      <div>
        {this.props.articles.map(article => (
          <Article
            key={article.id}
            article={article}
            isOpen={article.id === this.state.openArticleId}
            onBtnClick={this.toggleOpenArticle(article.id)}
          />
        ))}
      </div>
    );
  }

  toggleOpenArticle = openArticleId => () => this.setState({ openArticleId });
}
*/

export default ArticleList;
