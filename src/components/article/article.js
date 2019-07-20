import React from "react";
import styles from "./styles.css";

function Article({ article, isOpen, onBtnClick }) {
  const body = isOpen && (
    <section>
      <p>{article.text.split("").join(" ")}</p>
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
