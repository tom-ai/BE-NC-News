const db = require("../db/connection");

exports.selectArticleById = async (articleId) => {
  const {rows: articles} = await db
  .query(`
  SELECT articles.*,
  COUNT(comments.comment_id) AS comment_count
  FROM articles
  LEFT JOIN comments ON comments.article_id = articles.article_id
  WHERE articles.article_id = $1
  GROUP BY articles.article_id;
  `, [
      articleId,
    ])

  if (articles.length === 0) {
    return Promise.reject({ status: 404, msg: "Article not found" });
  }
  return articles[0];
};

exports.incrementVote = async (articleId, vote) => {
  if (!vote) {
    return Promise.reject({ status: 400, msg: "Invalid vote" });
  }
  return db
    .query("SELECT * FROM articles WHERE articles.article_id = $1;", [
      articleId,
    ])
    .then(({ rows: [article] }) => {
      article.votes = vote;
      return article; 
    });
};

exports.selectArticles = async () => {
  const {rows: articles} = await db.query(
    `SELECT articles.*,
    COUNT(comments.comment_id) AS comment_count
    FROM articles
    LEFT JOIN comments ON comments.article_id = articles.article_id
    GROUP BY articles.article_id
    ORDER BY articles.created_at DESC;`
  );
  return articles;
};


