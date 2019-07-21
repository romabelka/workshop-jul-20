import React, { useState } from "react";
import { connect } from "react-redux";
import Article from "../article";
import accordion from "../../decorators/accordion";

@connect(state => ({ articles: state.articles }))
@accordion
class ArticleList extends React.Component {
  render() {
    const { articles, defaultOpenId, isOpen, setOpenId } = this.props;

    return (
      <div ref={this.setContainerRef}>
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

  setContainerRef = containerRef => console.log("container: ", containerRef);
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
