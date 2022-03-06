const mysql = require('mysql')
const marked = require('marked')
const slugify = require('slugify')

const articleSchema = new mysql.Schema({
    title:{
        type: String,
        required: true
    },
    description: {
        type: String
    },
    markdown:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    slug: {
        type: String,
        required: true,
        unique: true
    }
})

articleSchema.pro('validate', function(next){
    if(this.title){
        this.slug = slugify(this.title, {lower: true,
        strict: true})
    }

    next()
})

module.exports = mysql.model('Article', articleSchema)