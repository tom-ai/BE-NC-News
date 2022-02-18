const express = require('express')

const {getArticleById, updateArticleVoteCount, getArticles } = require('./controllers/articles-controller')
const { postComment } = require('./controllers/comments-controller')
const { getTopics  } = require('./controllers/topics-controller')
const {getUsers} = require('./controllers/users-controller')
const { customErrorHandler, psqlErrorHandler } = require('./errors')

const app = express()
app.use(express.json())

app.get('/api/topics', getTopics)
app.get('/api/articles/:article_id', getArticleById)
app.patch('/api/articles/:article_id', updateArticleVoteCount)
app.get('/api/users', getUsers)
app.get('/api/articles', getArticles)
app.post('/api/articles/:article_id/comments', postComment)

app.all('/api/*', (req, res) => {
    res.status(404).send({msg: 'Invalid path'})
})

app.use(customErrorHandler);
app.use(psqlErrorHandler);

module.exports = app;