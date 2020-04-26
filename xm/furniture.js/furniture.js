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
        left: -i * 55+"em"
    }, 50); 
})

// 上一个按钮
$('#slide-left').click(function() {
    i--;
    if (i == -1) {
        i = $('#slide li').length - 1;
        $('#slide').css({
            left: -($('#slide li').length -1) * 55+"em"
        });
    }
    $('#slide').stop().animate({
        left: -i * 55+"em"
    }, 50);
    
})
window.addEventListener("scroll",function(){
    var st=document.body.scrollTop||document.documentElement.scrollTop;
    if(st >=100){
        $("#nav").css({
           " opacity":"0",
           " transition": "all .5s",
            "display":"none"
        })
    }else{
        $("#nav").css({
            " opacity":"1",
            " transition": "all .5s",
             "display":"block"
         })
    }
})
$("#p-nav div").on("mousemove",function(){
    $(this).css({
       "background-color":"red"
       
     })
})
$("#p-nav div").on("mouseout",function(){
    $(this).css({
       "background-color":""
     })
})

var muns=0
setInterval(function(){
    
  if(muns ==0){
    $("h5 span").css({
        "background-color":"orange",
        "color":"white"
        
    })
    muns =1
  }else{
    $("h5 span").css({
        "background-color":"",
        "color":"orange"
    })
    muns =0 
  }
},300)

}())
$("#xilie-boxs #img-d1").css({
    "background-color":"black",
    "opacity": 0
})

function move(d1){
    d1.on("mousemove",function(){
        $(this).css({
            "opacity":.5 
        })
        })
}

function out(d1){
    d1.on("mouseout",function(){
        $(this).css({
            "opacity":0
        })
        })
}
    move($("#xilie-boxs #img-d1"))
    out($("#xilie-boxs #img-d1"))
    move($("#anli-box #img-d2"))
    out($("#anli-box #img-d2"))
    move($("#sev-box #img-d3"))
    out($("#sev-box #img-d3"))