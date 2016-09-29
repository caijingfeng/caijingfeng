var express = require('express')
var fs = require('fs')
var app = express()
var bodyparser = require('body-parser')
var template = require('art-template')
var multer = require('multer')
var multiper = multer()



app.use(bodyparser.urlencoded({ extended: true }))

app.engine('html',template.__express)

app.set('view engine','html')
//设置了视图引擎后，默认情况下去views文件下查找视图文件，可以通过以下
//语句改变查找的位置
app.set('views','./views')


app.use('/',require('./routers/index'))
app.use('/api/addfolder',require('./routers/api/addfolder'))


app.use(express.static('public'))





app.listen(3004, (req, res) => {
    console.log('服务期运行在3004')
})