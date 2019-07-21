import React, { useEffect } from "react";
import { findDOMNode } from "react-dom";
import styles from "./styles.css";
import CommentList from "../comment-list";

function Article({ article, isOpen, onBtnClick }) {
  useEffect(() => {
    //subscribe
    console.log("subscribe for ", article.id);

    return () => console.log("unsubscribe", article.id);
  }, [article.id]);

  const body = isOpen && (
    <section data-id="article-body">
      <p>{article.text}</p>
      <CommentList comments={article.comments} />
    </section>
  );

  return (
    <div>
      <h3 className={styles.header}>{article.title}</h3>
      {body}
      <button onClick={onBtnClick}>{isOpen ? "hide" : "open"} article</button>
    </div>
  );
}

export default Article;
