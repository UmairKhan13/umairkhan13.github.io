import React from "react";

function formatDate(value) {
  if (!value) {
    return "Recent article";
  }

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(value));
}

function Article({ title, url, image, extract, publishedAt }) {
  return (
    <article className="surface-card article-card">
      {image ? (
        <a href={url} target="_blank" rel="noreferrer" className="article-image">
          <img src={image} alt={title} loading="lazy" />
        </a>
      ) : null}

      <div className="article-body">
        <p className="article-meta">{formatDate(publishedAt)} on DEV</p>
        <h3>{title}</h3>
        <p>{extract}</p>
        <a href={url} target="_blank" rel="noreferrer" className="article-link">
          Read article
        </a>
      </div>
    </article>
  );
}

export default Article;
