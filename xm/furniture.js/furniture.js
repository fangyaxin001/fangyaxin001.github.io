(function(){
  
    $("#big-img li").eq(0).css("display","block")
    var x = 0;
    var flag = true;
$("#left").on("click",function(){
    $("#big-img li").eq(x).css("display","none")

    x--;
    if(x<0){
        x=$("#big-img li").length-1;
    }
    // 递增之后 即将要显示的图片索引
    $("#big-img li").eq(x).css("display","block")
})
$("#right").on("click",function(){
    $("#big-img li").eq(x).css("display","none")

    x++;
    if(x>$("#big-img li").length-1){
        x=0;
    }
    $("#big-img li").eq(x).css("display","block")
   
})
// 第二个轮播图
var i = 0
$('#slide-right').click(function() {
    i++;
    if (i == $('#slide li').length) {
        i = 0;
        $('#slide').css({
            left: 0
        }); 
    };

    $('#slide').stop().animate({
        left: -i * 1000
    }, 50); 
})

// 上一个按钮
$('#slide-left').click(function() {
    i--;
    if (i == -1) {
        i = $('#slide li').length - 1;
        $('#slide').css({
            left: -($('#slide li').length -1) * 1000
        });
    }
    $('#slide').stop().animate({
        left: -i * 1000
    }, 50);
    
})

}())