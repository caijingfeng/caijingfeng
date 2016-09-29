

var express = require('express')
var fs = require('fs')
var router = express.Router()

router.post('/:folderName',(req,res)=>{
var data ={
    code:'success',
    message:'创建文件夹成功'
}

    var folderName = req.params.folderName
    if((!folderName) || (folderName.length == 0)){
        data.code="fail"
        data.message = '请输入文件夹名称'
    }
    else{
       if((!/^[a-z0-9A-z\u4e00-\u9fa5/]{1,16}$/.test(folderName))){
                 data.code ="fail";
                 data.message ="你输入的格式不正确"
         }
         else{
             var path ="data/"+folderName
             fs.exists(path,function(exists){
                 if(exists){
                     data.code ="fail"
                     data.message = '文件夹已存在'
                 }
                 else{
                     fs.mkdir(path,function(err){
                         if(err){
                             data.code ='fail'
                             data.message = '创建文件夹失败'
                         }
                     })
                 }
             })
         }

    }
    res.json(data)
})


module.exports = router