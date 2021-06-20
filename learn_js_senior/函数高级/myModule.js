function myModule() {
    //私有数据
    let msg = 'My at your'
    //操作数据的函数
    function dosomething() {
        console.log('dosomething'+msg.toUpperCase()) // toUpperCase 字符串的全部大写
    }
    function dootherthing() {
        console.log('dootherthing'+msg.toLowerCase()) // toLowerCase 字符串的全部小写
    }
    //向外暴露对象(给外部使用的方法)
    return {
        dosomething:dosomething,
        dootherthing:dootherthing
    }
}