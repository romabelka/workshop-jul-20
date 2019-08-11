import React, { useEffect, useContext } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./styles.css";
import CommentList from "../comment-list";
import { deleteArticle, fetchArticle } from "../../ac";
import Loader from "../loader";
import userContext from "../../contexts/user-context";

export function Article({
  article,
  isOpen,
  onBtnClick,
  deleteArticle,
  fetchArticle
}) {
  const username = useContext(userContext);

  useEffect(() => {
    if (isOpen) {
      fetchArticle(article.id);
    }
  }, [article.id, isOpen]);

  const body = isOpen && (
    <section data-id="article-body">
      {article.loading && <Loader />}
      <p>{article.text}</p>
      <CommentList article={article} />
    </section>
  );

  return (
    <div>
      <h3 className={styles.header}>
        {username}: {article.title}
      </h3>
      <button onClick={() => deleteArticle(article.id)}>Delete me</button>
      {body}
      <button onClick={onBtnClick}>{isOpen ? "hide" : "open"} article</button>
    </div>
  );
}

Article.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string
  })
};

export default connect(
  null,
  { deleteArticle, fetchArticle }
)(Article);
