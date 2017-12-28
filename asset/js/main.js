$(function () {
    loadImg()
    changePage(1)
})

function loadImg(){
    var index = parseInt(Math.random()*10) % 8
    var path = 'asset/img/'+index+'.jpg'
    $('.me-img').attr('src',path)
}


function changePage(i){
    if( i == 1 ){
        getLocalResource('asset/subpage/profile.html',function (res) {
            $('#content').html(res);
            $("#profileButton").addClass('active')
            $("#programButton").removeClass('active');
            $("#contactButton").removeClass('active');
        })
    }else if( i == 2){
        getLocalResource('asset/subpage/program.html',function (res) {
            $('#content').html(res)
            $("#profileButton").removeClass('active')
            $("#programButton").addClass('active');
            $("#contactButton").removeClass('active');
        })
    }else if( i == 3){
        getLocalResource('asset/subpage/contact.html',function (res) {
            $('#content').html(res)
            $("#profileButton").removeClass('active')
            $("#programButton").removeClass('active');
            $("#contactButton").addClass('active');
        })
    }else{

    }
}