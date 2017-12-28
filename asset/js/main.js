
$(function () {
    loadImg()
})

function loadImg(){
    var index = parseInt(Math.random()*10) % 8
    var path = 'asset/img/'+index+'.jpg'
    $('.me-img').attr('src',path)
}