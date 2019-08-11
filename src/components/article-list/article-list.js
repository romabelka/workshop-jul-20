import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Article from "../article";
import accordion from "../../decorators/accordion";
import {
  articlesLoadingSelector,
  filtratedArticlesSelector
} from "../../selectors";
import { fetchAllArticles } from "../../ac";
import Loader from "../loader";

@connect(
  state => ({
    articles: filtratedArticlesSelector(state),
    isLoading: articlesLoadingSelector(state)
  }),
  { fetchAllArticles }
)
@accordion
class ArticleList extends React.Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    fetchAll: PropTypes.func,
    //from decorator
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func
  };

  componentDidMount() {
    this.props.fetchAllArticles();
  }

  render() {
    /*
    useEffect(() => props.fetchAllArticles(), [])
*/

    const {
      articles,
      defaultOpenId,
      isOpen,
      setOpenId,
      isLoading
    } = this.props;

    if (isLoading) return <Loader />;

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
