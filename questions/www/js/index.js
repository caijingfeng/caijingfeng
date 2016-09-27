var petname = $.cookie('petname')

if (petname) {
    $('#user').find('span').last().text(petname)
}
else {
    // $('#user').find('span').last().text('登录')
    // $('#user').removeAttr('data-toggle').click(function () {
    //     location.href = 'login.html'
    // })
    $('#user').find('span').last().text('登录').end().end().removeAttr('data-toggle').click(function () {
        location.href = 'login.html'
    })
}

$('#ask').click(function () {
    // if (petname) {
    //     location.href = 'ask.html'
    // }
    // else {
    //     location.href = 'login.html'
    // }

    location.href = petname ? 'ask.html' : 'login.html'
})

$('.navbar .dropdown-menu li').last().click(function () {
    $.get('/api/logout', null, function (res) {
        if (res.code == 'success') {
            location.href = 'index.html'
        }
    })
})

//delegate代理，委托事件
$('.questions').delegate('[question]', 'click', function () {
    if (petname) {
        //客户端添加cookie
        $.cookie('question', $(this).attr('question'))
        location.href = 'answer.html'
    }
    else {
        location.href = 'login.html'
    }
})

$.getJSON('/api/questions', null, function (res) {
    if (res.code != "success") {
        console.log(res.message);
        return;
    }
    console.log(res)
    // `${1}-${2}-${3}`
    var html = template('askTemplate',{data:res.data})
    
    $('.questions').html(html)
})
