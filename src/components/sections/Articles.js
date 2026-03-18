import React, { useEffect, useState } from "react";
import Article from "../elements/Article";
import Section from "../ui/Section";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let ignore = false;

    async function loadArticles() {
      try {
        const response = await fetch("https://dev.to/api/articles?username=umairkhan13");
        const data = await response.json();

        if (!ignore) {
          setArticles(data.slice(0, 3));
        }
      } catch (error) {
        if (!ignore) {
          setHasError(true);
        }
      }
    }

    loadArticles();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <Section
      id="writing"
      eyebrow="Writing"
      title="Sharing ideas, lessons, and practical automation thinking."
      description="A strong personal brand also shows how you think. This section keeps the site connected to your latest public writing."
    >
      <div className="articles-grid">
        {articles.map((article) => (
          <Article
            key={article.id}
            title={article.title}
            url={article.url}
            image={article.cover_image}
            extract={article.description}
            publishedAt={article.published_at}
          />
        ))}

        {!articles.length && !hasError ? (
          <div className="surface-card empty-state">
            <p>Loading recent writing from DEV Community...</p>
          </div>
        ) : null}

        {hasError ? (
          <div className="surface-card empty-state">
            <p>
              Recent articles could not be loaded right now. Your DEV profile can
              still be reached from the social links above.
            </p>
          </div>
        ) : null}
      </div>
    </Section>
  );
}

export default Articles;
