
const express = require("express")
const fs = require('fs')
const router = express.Router()

router.get("/", (req, res) => {
    fs.readdir("data", (err, file) => {
        // console.log(file)
          var data = []
        function count(index) {
          
            if (index < file.length) {
                //先判断以下当前的文件是否 是一个文件夹
                var folder = file[index]
                var path = "data/" + folder
                fs.stat(path, function (err, stars) {
                    if (stars.isDirectory()) {
                        fs.readdir(path, (err, files) => {
                            if (!err) {
                                data.push({ folderName: folder, fileCount: files.length })
                            }   
                             console.log(data)                   
                                count(++index)                          
                        })
                        
                    } else {
                        
                        count(++index)
                    }

                })
            }
            else {
                console.log(data+"asas")
                res.render('index', {folders:data})
            }
           
        }
         count(0)
    })



})






module.exports = router
