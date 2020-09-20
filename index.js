$(document).ready(function(){
    
    
    
    
    
/*Hide button*/    
$(".show1 button").click(function(){
    $(".show1 p").hide(1000);
});

 /*Color Change*/
    $(".show2 button").click(function(){
        $(".show2 p").css({
            "background-color":"green",
            "color":"white"
            
        });
    });
    
   /*Double Click*/
    $(".show3 button").dblclick(function(){
        $(".show3 p").css({
            "background-color":"green",
            "color":"white"
            
        });
    });
    
     /*Hover*/
    $(".show4 button").hover(function(){
        $(".show4 p").css({
            "background-color":"green",
            "color":"white"
            
        });
    });
    
     /*Mouseenter*/
    $(".show5 button").mouseenter(function(){
        $(".show5 p").css({
            "background-color":"green",
            "color":"white"
            
        });
    });
    
     /*Mouseleave*/
    $(".show6 button").mouseleave(function(){
        $(".show6 p").css({
            "background-color":"green",
            "color":"white"
            
        });
    });
    
      /*Toggle*/
    $(".show7 button").click(function(){
        $(".show7 p").toggle(3000);
    });
    
    
     /*Hide Myself*/
    $(".show8 button").click(function(){
        $(".show8 button").hide(3000);
    });
    
    /*Hide & show Button*/
     $(".show9 .btn1").click(function(){
        $(".show9 .btn1").hide(1000);
    });
    
    $(".show9 .btn2").click(function(){
        $(".show9 .btn1").show(1000);
    });
    
    
     /*Hide & show Text*/
     $(".show10 .btn1").click(function(){
        $(".show10 p").hide(1000);
    });
    
    $(".show10 .btn2").click(function(){
        $(".show10 p").show(1000);
    });
    
    
    /*Slide Down*/
    $(".show11 h5").click(function(){
        $(".show11 p").slideDown(2000);
    });
    
    /*Slide Up*/
    $(".show12 h5").click(function(){
        $(".show12 p").slideUp(2000);
    });
    
    
       /*Slide Toggle*/
    $(".show13 h5").click(function(){
        $(".show13 p").slideToggle(2000);
    });
    
    
    /*Animation*/
    $(".show14 button").click(function(){
       $(".show14 div").animate({
           "left":"400px",
           "width":"200px",
           "height":"200px",
           
           
       }); 
    });
    
    
    /*Traversing Ancestors*/
    
    $(".show15 span").parentsUntil(".show15 div").css({
       "color":"red", 
        "border":"5px solid red",
    });
    
    /*Traversing Decendent*/
    
    $(".show16").find("span").css({
        "color":"red",
        "border":"5px solid red",
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});


