const express = require('express')
const mysql = require('mysql')
const Article = require('./article')
const articleRouter = require('./routes/articles')
const app = express()

sql.connect('mysql://localhost/blog', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))
app.get('/', async (req, res) =>{
    const articles = Article.find().sort({createdAt: 'desc'})
    res.render('index', {articles: articles})
})

app.use('/articles', articleRouter)

app.listen(5000)



