$(function(){

    $('body').on('click','.dot_wrap li',function(){
        
        var index = $(this).index();
        
        $(this).addClass('active').siblings().removeClass('active');
        
        $('.banner li').eq(index).fadeIn(800).siblings().hide();
        
    });
    
 setInterval(function(){
     
     if($('.dot_wrap li').index($('.dot_wrap .active'))+1 == $('.dot_wrap li').length){

         $('.dot_wrap li').eq(0).click();
         
     }else{
         
         $('.dot_wrap .active').next().click();
     }
     
 },4000);   
    
    
});