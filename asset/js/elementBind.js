
$("#profileButton").on('click',function(){
    changePage(1);
});
$("#programButton").on('click',function(){
    changePage(2);
});
$("#contactButton").on('click',function(){
    changePage(3);
});

$("#quitButton").on('click',function () {
   window.close();
});