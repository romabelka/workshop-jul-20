import React, { Component } from "react";
import Article from "../article";

class ArticleList extends Component {
  state = {
    openArticleId: this.props.defaultOpenId,
    error: null
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error
    });
  }

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

export default ArticleList;
