(function flexible (window, document) {  
    var docEl = document.documentElement 
    //document.documentElement 获取html标签下所有内容， 扩展=》document.body 获取body标签下所有内容   
    var dpr = window.devicePixelRatio || 1
    //window.devicePixelRatio获取设备像素比（设备像素比 ＝ 物理像素 / 设备独立像素）  
    //setBodyFontSize 根据dpr自动设置根元素的font-size
    function setBodyFontSize () {    
        if (document.body) {     
            document.body.style.fontSize = (12 * dpr) + 'px'
        } else {      
            document.addEventListener('DOMContentLoaded', setBodyFontSize)
            //DOMContentLoaded指的是dom加载完，window.onload指的是页面上所有的DOM，样式表，图片，等都已经加载完成了    
            } 
    }  
    setBodyFontSize(); 
    // set 1rem = viewWidth / 10
    //设置rem
    function setRemUnit () { 
        var rem = docEl.clientWidth / 10   
        docEl.style.fontSize = rem + 'px' 
    } 
    setRemUnit()    
    //在窗口大小改变之后,就会触发resize事件.
    //当一条会话历史记录被执行的时候将会触发页面显示(pageshow)事件
    // reset rem unit on page resize  
    window.addEventListener('resize', setRemUnit) 
    window.addEventListener('pageshow', function (e) {   
        if (e.persisted) {  
            // 从缓存加载      
            setRemUnit()   
        }  
    })  
    // detect 0.5px supports
    //当dpr >=2的时候设置border为0.5px 
    if (dpr >= 2) {    
        var fakeBody = document.createElement('body')    
        var testElement = document.createElement('div')   
        testElement.style.border = '.5px solid transparent'   
        fakeBody.appendChild(testElement)   
        docEl.appendChild(fakeBody)  
        if (testElement.offsetHeight === 1) { 
        docEl.classList.add('hairlines')    
    }    
    docEl.removeChild(fakeBody) 
    }}(window, document))
   