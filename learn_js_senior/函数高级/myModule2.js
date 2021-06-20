//匿名函数自调用 IIFE方法
(function (window) {
    let msg = 'My at your'
    function dosomething() {
        console.log("dosomething"+msg.toUpperCase())
    }
    function dootherthing() {
        console.log("dootherthing"+msg.toLowerCase())
    }

    //向外暴露对象(给外部使用的方法)
    window.myModule2 = {
        dosomething:dosomething,
        dootherthing:dootherthing
    }
})(window)