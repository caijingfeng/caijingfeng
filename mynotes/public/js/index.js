
$(function () {
    $('#new').on('click', function () {
        new Prompt('新建文件夹', '请输入用户名', function () {
            //    var folderName = $.trim($("input[type=text]").val())
            var folderName = this.text().trim()
               console.log(folderName)
               //var folder = this.te
               if(folderName.length ==0){
                  new Alert('必须写上关键字').show()
                    return 
                  
               }
               if((!/^[a-z0-9A-z\u4e00-\u9fa5/]{1,16}$/.test(folderName))){
                     new Alert("你输入的格式不正确").show()
                     return 
               }
               //去调用api/addfolder/文件名称
               $.post('/api/addfolder/'+folderName,null,function(res){
                      console.log(res)
                      if(res.code == "success"){
                          //这个是action路径
                          location.href = '/';
                      }else{
                          new Alert(res.message).show()
                          return
                      }
               })
             
        }).show()

    })

})