function fibonacci(n) {
    return n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(this)

var onmessage = function (event) {
    let number = event.data
    console.log('分线程接收到主线程发送的数据:' + number)
    let result = fibonacci(number)
    postMessage(result)
    console.log('分线程向主线程返回数据' + result)
}

//alert是window的方法，在分线程不能调用
//分线程中的全局对象不再是window，所以分线程中不可能更新界面

