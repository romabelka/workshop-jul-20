import React, { Component } from "react";
import Article from "../article";

class ArticleList extends Component {
  state = {
    openArticleId: this.props.defaultOpenId
  };

  static getDerivedStateFromProps(props, state) {
    return {};
  }

  /*
    Once
   */

  /*
  componentWillMount() {
  }
*/

  componentDidMount() {}

  componentWillUnmount() {}

  /*
    Update
   */

  /*
  componentWillReceiveProps(nextProps, nextContext) {

  }
*/

  /*
  componentWillUpdate(nextProps, nextState, nextContext) {
  }
*/

  getSnapshotBeforeUpdate(prevProps, prevState) {}

  componentDidUpdate(prevProps, prevState, snapshot) {}

  render() {
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
