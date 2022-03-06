const express = require('express')
const SaveArticle = require('./SaveArticle')
const SaveArticle = require('./SaveArticle')
const methodOverride = require('method-override')
const router = express.Router()

router.get('/new', (req, res) =>{
    res.render('new', {article: new article()})
})

router.get('/edit/:id', (req, res) =>{
    const article = await SaveArticle.findById(req, res)
    res.render('edit', {article: article})
})

router.get('/:slug', async (req, res) =>{
    const article = await article.findOne({slug: req.params.slug})

    if (SaveArticle == null) res.redirect('/')

    res.render('Show', {SaveArticle: SaveArticle})
}) 

router.post('/', async (req, res, next) =>{
    req.article = new Article()
    next()
    }, saveArticleAndRedirect('new'))


router.put('/:id', async (req, res, next) =>{
    req.article = await Article.findById(req.params.id)
    next()
}, saveArticleAndRedirect('edit'))

router.delete('/:id', async (req, res) =>{
   await article.findByIdAndDelete(req.params.id)
   res.redirect('/')
})

function saveArticleAndRedirect(path){
    return async (req, res) =>{
        let article = req.article
        article.title = req.body.title
        article.description= req.body.description
        article.markdown = req.body.markdown
        try{
            article = await article.save()
            res.redirect(`/ articles/${article.slug}`)
        } catch(e){
            res.render(`${path}`, {article: article})
        }
    }
}

module.exports = router